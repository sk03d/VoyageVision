import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageSquare, Award, Zap, Loader2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  // Backend URL - Update this with your actual deployed URL
  const BACKEND_URL = 'https://voyagevision-chat-be.vercel.app/api/webhook';
  // WhatsApp number with country code (no spaces or special characters)
  const WHATSAPP_NUMBER = '14155238886';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resetStates = () => {
    setError(null);
    setSuccess(false);
    setRetryCount(0);
  };

  const handleWhatsAppClick = async () => {
    try {
      setIsLoading(true);
      resetStates();
      
      const message = 'Hello VoyageVision!';
      
      // First, send the message to our backend with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      console.log('Attempting to connect to backend:', BACKEND_URL);
      
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify({
          message: message,
          from: 'user'
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Backend error response:', errorData);
        throw new Error(`Server responded with status: ${response.status} - ${errorData}`);
      }

      const responseData = await response.json();
      console.log('Backend response:', responseData);
      
      if (!responseData.message) {
        throw new Error('Invalid response from server: missing message');
      }

      setSuccess(true);
      
      // Format the WhatsApp URL properly
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      console.log('Opening WhatsApp URL:', whatsappUrl);
      
      // Open WhatsApp in a new tab
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow) {
        throw new Error('Failed to open WhatsApp. Please check your popup blocker settings.');
      }
    } catch (error) {
      console.error('Error details:', error);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          setError('Connection timed out. Please check if the backend server is running.');
        } else if (retryCount < MAX_RETRIES) {
          setRetryCount(prev => prev + 1);
          setError(`Connection failed. Retrying... (${retryCount + 1}/${MAX_RETRIES})`);
          // Retry after 2 seconds
          setTimeout(handleWhatsAppClick, 2000);
          return;
        } else {
          setError('Failed to connect to the backend server. Please try again later or contact support.');
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      if (retryCount >= MAX_RETRIES) {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-lines"></div>
        <div className="bg-noise"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full filter blur-[100px] animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 left-1/3 w-65 h-96 bg-teal/20 rounded-full filter blur-[100px] animate-pulse-subtle"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 md:left-20 w-16 h-16 glass rounded-xl rotate-12 animate-float animate-delay-300 opacity-0 md:opacity-70">
        <div className="flex items-center justify-center h-full">
          <MessageSquare className="text-teal w-6 h-6" />
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-10 md:right-20 w-16 h-16 glass rounded-xl -rotate-12 animate-float animate-delay-700 opacity-0 md:opacity-70">
        <div className="flex items-center justify-center h-full">
          <Award className="text-purple w-6 h-6" />
        </div>
      </div>

      <div className="absolute top-1/3 right-[20%] w-16 h-16 glass rounded-xl rotate-45 animate-float animate-delay-500 opacity-0 md:opacity-70">
        <div className="flex items-center justify-center h-full">
          <Zap className="text-teal-400 w-6 h-6" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-space-700 bg-space-800/30 text-sm font-medium text-white/80">
              <span className="mr-2">✨</span>
              Revolutionizing Travel with AI & WhatsApp
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-balance">
              Your <span className="heading-gradient">AI-Powered</span> Travel Assistant in Your Pocket
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
              Book flights, hotels, and experiences through WhatsApp with our AI assistant. Earn rewards, receive real-time updates, and enjoy personalized travel planning.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button 
                onClick={handleWhatsAppClick} 
                className={`btn-primary flex items-center justify-center gap-2 ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                } relative`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>
                      {retryCount > 0 
                        ? `Retrying... (${retryCount}/${MAX_RETRIES})`
                        : 'Connecting...'}
                    </span>
                  </>
                ) : (
                  <>
                    <MessageSquare size={18} />
                    <span>Try WhatsApp Demo</span>
                  </>
                )}
              </button>
              <a href="#features" className="btn-outline flex items-center justify-center gap-2">
                <span>Explore Features</span>
              </a>
            </div>

            {/* Status Messages */}
            <div className="mt-4 text-center">
              {error && (
                <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg inline-block">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-green-500 text-sm bg-green-500/10 p-3 rounded-lg inline-block">
                  Connected successfully! WhatsApp should open in a new tab.
                </div>
              )}
            </div>
          </div>

          {/* Phone mockup with WhatsApp chat */}
          <div className={`relative mx-auto w-full max-w-xs sm:max-w-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-purple/20 rounded-[3rem] blur-xl"></div>
            <div className="relative glass rounded-[2.5rem] border border-space-700 overflow-hidden p-3 pb-6">
              <div className="rounded-[2rem] overflow-hidden h-[500px] bg-[#0a1014]">
                {/* WhatsApp-like interface */}
                <div className="bg-[#1E2C35] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-teal fill-current">
                      <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" opacity="0.25"/>
                      <path d="M19.47,7.5l-7-4a1,1,0,0,0-1,0l-7,4A1,1,0,0,0,4,8.5v7a1,1,0,0,0,.47.85l7,4a1,1,0,0,0,1,0l7-4A1,1,0,0,0,20,15.5v-7A1,1,0,0,0,19.47,7.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">TravelQuest AI</p>
                    <p className="text-green-400 text-xs">Online</p>
                  </div>
                </div>
                <div className="p-3 overflow-y-auto h-[calc(500px-120px)] flex flex-col gap-2">
                  <div className="bg-[#262D31] text-white rounded-lg p-2 px-3 ml-auto max-w-[80%] text-sm">
                    Hi! I want to book a flight to Tokyo.
                  </div>
                  <div className="bg-[#056162] text-white rounded-lg p-2 px-3 mr-auto max-w-[80%] text-sm">
                    Hello! I'd be happy to help you book a flight to Tokyo. When are you planning to travel?
                  </div>
                  <div className="bg-[#262D31] text-white rounded-lg p-2 px-3 ml-auto max-w-[80%] text-sm">
                    Next month, from August 10 to 20
                  </div>
                  <div className="bg-[#056162] text-white rounded-lg p-2 px-3 mr-auto max-w-[80%] text-sm">
                    Great! Searching for flights from your location to Tokyo, Japan for Aug 10-20...
                  </div>
                  <div className="flex justify-center my-3">
                    <div className="w-8 h-8 rounded-full bg-teal animate-pulse flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="glass-card p-3 mr-auto">
                    <p className="text-white text-xs font-medium mb-1">Best Flight Option:</p>
                    <p className="text-white/80 text-xs">ANA Airways - $950</p>
                    <p className="text-white/80 text-xs">Departing: Aug 10, 10:30</p>
                    <p className="text-white/80 text-xs">Return: Aug 20, 14:15</p>
                    <button className="mt-2 py-1 px-3 bg-teal text-space-900 text-xs rounded-full font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="bg-[#1E2C35] p-2 absolute bottom-0 w-full flex items-center gap-2">
                  <div className="flex-grow bg-[#2A3942] rounded-full p-1 px-3 text-white/60 text-sm">
                    Type a message...
                  </div>
                  <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-space-900">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#features" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white animate-bounce transition-colors">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
