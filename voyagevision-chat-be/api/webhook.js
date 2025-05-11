const twilio = require('twilio');
const axios = require('axios');

// Initialize Twilio client
const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// Function to extract airport name from message
function extractAirportName(message) {
    if (!message) return '';
    
    const lowerMessage = message.toLowerCase();
    let airportName = '';
    
    if (lowerMessage.includes('landed at')) {
        airportName = message.split('landed at')[1].trim();
    } else if (lowerMessage.includes('arrived at')) {
        airportName = message.split('arrived at')[1].trim();
    }
    
    return airportName;
}

// Function to generate recommendations using OpenAI (ChatGPT)
async function generateRecommendations(airportName) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not configured');
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-002:generateContent?key=${apiKey}`;
        const prompt = `Generate a helpful and engaging message with hotel recommendations for someone who just landed at ${airportName} airport. \nInclude:\n1. A friendly welcome message\n2. 3-4 hotel recommendations near the airport\n3. For each hotel, include:\n   - Name\n   - Approximate price range (using $ symbols)\n   - Key features (like airport shuttle, free breakfast, etc.)\n   - Distance from airport\n4. Some travel tips for the area\n\nFormat the response with emojis and make it engaging. Keep it concise but informative.`;
        const data = {
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        };
        const response = await axios.post(url, data, { timeout: 20000 });
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error generating recommendations:', error.response?.data || error.message);
        return "I'm having trouble generating recommendations right now. Please try again later.";
    }
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Log the incoming request body for debugging
        console.log('Received webhook request:', req.body);

        // Extract message details from Twilio's request format
        const messageBody = req.body.Body || req.body.message || '';
        const fromNumber = req.body.From || req.body.from || '';

        if (!messageBody || !fromNumber) {
            console.error('Missing required fields:', { messageBody, fromNumber });
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if the message is about landing at any airport
        if (messageBody.toLowerCase().includes('landed at') || 
            messageBody.toLowerCase().includes('arrived at')) {
            
            // Extract airport name from the message
            const airportName = extractAirportName(messageBody);
            
            if (!airportName) {
                const errorMessage = "I couldn't identify the airport name. Please try again with a message like 'I've landed at [Airport Name]'";
                await twilioClient.messages.create({
                    body: errorMessage,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: fromNumber
                });
                return res.json({ message: errorMessage });
            }

            // Generate personalized recommendations using OpenAI (ChatGPT)
            const recommendations = await generateRecommendations(airportName);
            
            // Send response back via WhatsApp (handle Twilio 1600 char limit)
            const MAX_LENGTH = 1600;
            for (let i = 0; i < recommendations.length; i += MAX_LENGTH) {
                const chunk = recommendations.substring(i, i + MAX_LENGTH);
                await twilioClient.messages.create({
                    body: chunk,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: fromNumber
                });
            }
            res.json({ message: recommendations });
        } else {
            // Default response
            const welcomeMessage = "Welcome to VoyageVision! I can help you find hotels near any airport. Just let me know when you've landed by saying 'I've landed at [Airport Name]'!";
            
            if (fromNumber === 'user') {
                res.json({ message: welcomeMessage });
            } else {
                await twilioClient.messages.create({
                    body: welcomeMessage,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: fromNumber
                });
                res.json({ message: welcomeMessage });
            }
        }
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).json({ error: 'Error processing request', details: error.message });
    }
}; 