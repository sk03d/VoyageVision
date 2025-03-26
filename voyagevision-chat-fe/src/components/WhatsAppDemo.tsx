
import React, { useRef, useEffect, useState } from 'react';
import { Send, Smile, Paperclip, Search, MessageSquare, X, PhoneCall, Video } from 'lucide-react';

const messages = [
  { id: 1, type: 'received', text: "Hi there! 👋 I'm your TravelQuest AI assistant. How can I help with your travel plans today?" },
  { id: 2, type: 'sent', text: "Hey! I'm planning a vacation to Bali next month and need help booking everything." },
  { id: 3, type: 'received', text: "I'd be happy to help you plan your Bali trip! When exactly are you planning to travel and from which city will you be departing?" },
  { id: 4, type: 'sent', text: "I'll be traveling from New York from September 15-25." },
  { id: 5, type: 'received', text: "Great! Let me search for the best flight options from New York to Bali for those dates..." },
  { id: 6, type: 'received', type2: 'flight', title: 'Best Flight Option Found:', details: [
    { label: 'Airline', value: 'Singapore Airlines' },
    { label: 'Departure', value: 'Sep 15, 10:30 AM' },
    { label: 'Return', value: 'Sep 25, 8:45 PM' },
    { label: 'Price', value: '$1,250 USD' },
  ] },
  { id: 7, type: 'sent', text: "That looks good. Can you also find a nice beachfront hotel in Seminyak?" },
  { id: 8, type: 'received', text: "Searching for beachfront hotels in Seminyak, Bali..." },
  { id: 9, type: 'received', type2: 'hotel', title: 'Recommended Hotel:', details: [
    { label: 'Name', value: 'W Bali - Seminyak' },
    { label: 'Rating', value: '5 stars' },
    { label: 'Price', value: '$220/night' },
    { label: 'Amenities', value: 'Pool, Spa, Restaurant' },
  ] },
  { id: 10, type: 'sent', text: "Perfect! Can I book both the flight and hotel now?" },
  { id: 11, type: 'received', text: "Yes, I can book those for you. Would you like to proceed with payment? We accept credit cards, PayPal, and cryptocurrency." },
  { id: 12, type: 'sent', text: "I'll pay by credit card." },
  { id: 13, type: 'received', type2: 'payment', title: 'Payment Summary:', details: [
    { label: 'Flight', value: '$1,250' },
    { label: 'Hotel (10 nights)', value: '$2,200' },
    { label: 'Service Fee', value: '$0' },
    { label: 'Total', value: '$3,450' },
  ] },
];

const WhatsAppDemo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentMessageIndex < messages.length) {
      if (currentMessageIndex > 0 && messages[currentMessageIndex-1].type === 'sent') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setDisplayedMessages(prev => [...prev, messages[currentMessageIndex]]);
          setCurrentMessageIndex(prev => prev + 1);
        }, 1500);
      } else {
        setTimeout(() => {
          setDisplayedMessages(prev => [...prev, messages[currentMessageIndex]]);
          setCurrentMessageIndex(prev => prev + 1);
        }, 1000);
      }
    }
  }, [isVisible, currentMessageIndex]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [displayedMessages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim() === '') return;
    
    setUserInput('');
    
    // Handle response for demo purposes
    setTimeout(() => {
      setDisplayedMessages(prev => [...prev, { 
        id: displayedMessages.length + 1, 
        type: 'sent', 
        text: userInput.trim() 
      }]);
      
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages(prev => [...prev, { 
          id: displayedMessages.length + 2, 
          type: 'received', 
          text: "I've noted your request. Is there anything else you'd like me to help with for your Bali trip?" 
        }]);
      }, 1500);
    }, 100);
  };

  return (
    <section className="section-padding relative" id="whatsapp" ref={sectionRef}>
      <div className="absolute top-1/3 left-0 w-65 h-96 bg-teal/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className={`phone-mockup relative mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-purple/20 rounded-[3rem] blur-xl"></div>
              <div className="relative glass rounded-[2.5rem] border border-space-700 overflow-hidden p-3 pb-6 w-full max-w-[320px]">
                <div className="rounded-[2rem] overflow-hidden h-[600px] bg-[#0a1014]">
                  {/* WhatsApp-like interface */}
                  <div className="bg-[#1E2C35] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
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
                    <div className="flex items-center gap-4 text-white/60">
                      <PhoneCall className="w-5 h-5" />
                      <Video className="w-5 h-5" />
                      <Search className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="bg-[#0e1621] h-[calc(600px-120px)] overflow-y-auto p-3 space-y-2" ref={chatRef}>
                    {displayedMessages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`${message.type === 'sent' ? 'ml-auto' : 'mr-auto'} max-w-[85%] animate-fade-in`}
                      >
                        {message.type2 === 'flight' || message.type2 === 'hotel' || message.type2 === 'payment' ? (
                          <div className="bg-[#056162] text-white rounded-lg p-3 overflow-hidden">
                            <p className="font-medium text-sm mb-2">{message.title}</p>
                            <div className="space-y-1">
                              {message.details.map((detail, index) => (
                                <div key={index} className="flex justify-between">
                                  <span className="text-white/70 text-xs">{detail.label}:</span>
                                  <span className="text-white text-xs font-medium">{detail.value}</span>
                                </div>
                              ))}
                            </div>
                            <button className="mt-3 py-1 px-3 bg-teal text-space-900 text-xs rounded-full font-medium w-full">
                              {message.type2 === 'payment' ? 'Proceed to Payment' : 'Select This Option'}
                            </button>
                          </div>
                        ) : (
                          <div 
                            className={`rounded-lg p-2 px-3 text-sm ${
                              message.type === 'sent' 
                                ? 'bg-[#2e5865] text-white' 
                                : 'bg-[#17212b] text-white'
                            }`}
                          >
                            {message.text}
                          </div>
                        )}
                        <div 
                          className={`text-[10px] text-white/50 mt-1 ${
                            message.type === 'sent' ? 'text-right' : 'text-left'
                          }`}
                        >
                          {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, '0')}
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="mr-auto max-w-[85%]">
                        <div className="bg-[#17212b] text-white rounded-lg p-2 px-4">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Input Area */}
                  <form onSubmit={handleSendMessage} className="bg-[#17212b] p-2 absolute bottom-0 w-full flex items-center gap-2">
                    <div className="text-white/60">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div className="text-white/60">
                      <Paperclip className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-grow bg-[#242f3d] rounded-full p-1 px-3 text-white text-sm border-none outline-none"
                      placeholder="Type a message..."
                    />
                    <button type="submit" className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                      <Send className="w-4 h-4 text-space-900 transform -rotate-45" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h6 className="text-teal mb-3 font-medium tracking-wide text-sm uppercase">WhatsApp Integration</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Plan Your Travel With a Simple <span className="heading-gradient">WhatsApp Chat</span>
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              No more juggling between different travel apps and websites. TravelQuest AI brings the entire travel booking experience to your favorite messaging platform. Simply chat with our AI assistant to search, compare, and book your perfect trip.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center mt-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-teal fill-current">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Natural Conversations</h4>
                  <p className="text-white/70 text-sm">Interact naturally with our AI as if you're chatting with a human travel agent.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center mt-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-teal fill-current">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Smart Recommendations</h4>
                  <p className="text-white/70 text-sm">Receive personalized suggestions based on your preferences and past travel history.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center mt-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-teal fill-current">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Secure Booking</h4>
                  <p className="text-white/70 text-sm">Complete your booking with secure, encrypted payment processing right from the chat.</p>
                </div>
              </div>
            </div>
            
            <a href="#" className="btn-primary inline-flex items-center gap-2">
              <MessageSquare size={18} />
              Connect Your WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;
