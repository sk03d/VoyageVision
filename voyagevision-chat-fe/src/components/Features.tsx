
import React, { useRef, useEffect, useState } from 'react';
import { 
  MessageSquare, 
  PlaneTakeoff, 
  Hotel, 
  MapPin, 
  Languages, 
  Award, 
  CreditCard, 
  Zap 
} from 'lucide-react';

const featuresList = [
  {
    icon: <MessageSquare className="w-5 h-5 text-teal" />,
    title: "WhatsApp Integration",
    description: "Book your entire trip through familiar WhatsApp chat—no apps to download or websites to navigate."
  },
  {
    icon: <PlaneTakeoff className="w-5 h-5 text-teal" />,
    title: "AI-Powered Booking",
    description: "Our AI assistant searches across multiple platforms to find you the best deals on flights, hotels, and tours."
  },
  {
    icon: <Hotel className="w-5 h-5 text-purple-400" />,
    title: "Complete Accommodations",
    description: "From luxury hotels to budget stays, find and book the perfect place through direct chat conversation."
  },
  {
    icon: <Languages className="w-5 h-5 text-purple-400" />,
    title: "Multilingual Support",
    description: "Communicate in your preferred language—our AI assistant speaks over 30 languages fluently."
  },
  {
    icon: <MapPin className="w-5 h-5 text-teal" />,
    title: "Proximity Marketing",
    description: "Receive exclusive location-based offers when you enter specific travel hotspots or partner locations."
  },
  {
    icon: <Award className="w-5 h-5 text-purple-400" />,
    title: "Gamified Rewards",
    description: "Earn XP and unlock badges with each booking and activity, redeeming points for discounts and perks."
  },
  {
    icon: <CreditCard className="w-5 h-5 text-teal" />,
    title: "Seamless Payments",
    description: "Pay securely through multiple options including credit cards, PayPal, and even cryptocurrency."
  },
  {
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    title: "Real-time Updates",
    description: "Receive instant notifications about flight changes, check-in reminders, and travel advisories."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section className="section-padding relative" id="features" ref={sectionRef}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-0 w-65 h-96 bg-teal/10 rounded-full filter blur-[120px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h6 className="text-teal mb-3 font-medium tracking-wide text-sm uppercase">Features</h6>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            AI-Powered Travel <span className="heading-gradient">Revolution</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            TravelQuest AI combines cutting-edge artificial intelligence with the simplicity of WhatsApp to transform how you plan, book, and experience travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-6 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-20 glass-card p-6 md:p-8 opacity-0 ${isVisible ? 'animate-slide-up animate-delay-400' : ''}`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Smart <span className="heading-gradient">Blockchain-Powered</span> Transactions
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our platform leverages advanced blockchain technology to ensure secure, transparent transactions with minimal fees. Book your travels with confidence using traditional payment methods or cryptocurrency.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                  Secure Payments
                </div>
                <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                  Crypto Support
                </div>
                <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                  Smart Contracts
                </div>
                <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                  Transparent Fees
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 glass rounded-xl overflow-hidden border border-space-600/50">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="p-5 flex items-center justify-between border-b border-space-600/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-teal fill-current">
                        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white">TravelQuest Smart Wallet</span>
                  </div>
                  <div className="text-white/70 text-sm">Balance: 320 TQST</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white/70 text-xs">TRANSACTION HISTORY</span>
                    <span className="text-teal text-xs">View All</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-space-700/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center">
                          <PlaneTakeoff className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Flight to Barcelona</div>
                          <div className="text-xs text-white/50">3 days ago</div>
                        </div>
                      </div>
                      <div className="text-red-400 text-sm">-120 TQST</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-space-700/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                          <Award className="w-4 h-4 text-teal" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Reward Bonus</div>
                          <div className="text-xs text-white/50">1 week ago</div>
                        </div>
                      </div>
                      <div className="text-green-400 text-sm">+45 TQST</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center">
                          <Hotel className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Hilton Madrid</div>
                          <div className="text-xs text-white/50">2 weeks ago</div>
                        </div>
                      </div>
                      <div className="text-red-400 text-sm">-85 TQST</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal/20 to-purple/20 blur-xl rounded-xl transform translate-y-2 scale-95"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
