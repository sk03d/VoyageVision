
import React, { useRef, useEffect, useState } from 'react';
import { Trophy, Star, Badge, Award, Gift } from 'lucide-react';

const badges = [
  {
    icon: <Star className="w-6 h-6 text-yellow-300" />,
    title: "First Booking",
    description: "Complete your first booking through TravelQuest AI",
    xp: "50 XP",
    color: "from-yellow-600 to-yellow-300"
  },
  {
    icon: <Trophy className="w-6 h-6 text-teal-300" />,
    title: "Travel Expert",
    description: "Book 5 different trip types (flight, hotel, car, experience)",
    xp: "200 XP",
    color: "from-teal to-teal-300"
  },
  {
    icon: <Badge className="w-6 h-6 text-purple-300" />,
    title: "Globe Trotter",
    description: "Travel to 3 different continents using TravelQuest",
    xp: "500 XP",
    color: "from-purple to-purple-300"
  },
  {
    icon: <Award className="w-6 h-6 text-blue-300" />,
    title: "Feedback Champion",
    description: "Submit 10 reviews for places you've stayed",
    xp: "100 XP",
    color: "from-blue-600 to-blue-300"
  }
];

const rewards = [
  {
    title: "Free Flight Upgrade",
    xp: "1,000 XP",
    tier: "Silver"
  },
  {
    title: "Hotel Room Discount",
    xp: "750 XP",
    tier: "Bronze"
  },
  {
    title: "Priority Support",
    xp: "500 XP",
    tier: "Bronze"
  },
  {
    title: "Exclusive Airport Lounge",
    xp: "2,000 XP",
    tier: "Gold"
  },
  {
    title: "Free Cancellation",
    xp: "1,500 XP",
    tier: "Silver"
  },
  {
    title: "Surprise Gift at Hotel",
    xp: "1,200 XP",
    tier: "Silver"
  }
];

const Rewards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentXP, setCurrentXP] = useState(0);
  const targetXP = 780;
  const [animationComplete, setAnimationComplete] = useState(false);

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
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentXP(prev => {
          const newValue = prev + Math.ceil(targetXP / 50);
          if (newValue >= targetXP) {
            clearInterval(interval);
            setAnimationComplete(true);
            return targetXP;
          }
          return newValue;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="section-padding relative" id="rewards" ref={sectionRef}>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full filter blur-[100px] animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-1/3 w-65 h-96 bg-teal/20 rounded-full filter blur-[100px] animate-pulse-subtle"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h6 className="text-teal mb-3 font-medium tracking-wide text-sm uppercase">Gamification</h6>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Travel & Earn <span className="heading-gradient">Rewards</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Make travel more exciting with our gamified rewards system. Earn XP, unlock badges, and redeem points for exclusive travel perks and discounts.
          </p>
        </div>

        <div className="glass-card p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full bg-space-700/50"></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal to-purple"
                  style={{ 
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                    opacity: 0.2 
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: `conic-gradient(from 0deg, #00f5d4 0%, #7928ca ${(currentXP / 1000) * 100}%, transparent ${(currentXP / 1000) * 100}%, transparent 100%)`,
                  }}
                ></div>
                <div className="absolute inset-2 rounded-full bg-space-800"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white">{currentXP}</span>
                  <span className="text-white/70 text-sm">XP Points</span>
                  <span className="text-teal text-xs mt-1">Bronze Tier</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Your Travel Level</h3>
                <p className="text-white/70 text-sm mb-4">Keep booking to reach Silver tier!</p>
                <div className="w-full h-2 bg-space-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal to-purple transition-all duration-1000 ease-out" 
                    style={{ width: `${(currentXP / 1000) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-white/70 mt-1">
                  <span>Bronze</span>
                  <span>Silver (1,000 XP)</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-white mb-4">Upcoming Rewards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rewards.map((reward, index) => (
                  <div 
                    key={index} 
                    className={`glass p-4 rounded-lg border border-space-700 transition-all duration-300 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-medium">{reward.title}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-space-700/70 text-white/80">{reward.tier}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-teal text-sm">
                        <Gift className="w-4 h-4" />
                        <span>{reward.xp}</span>
                      </div>
                      <button 
                        className={`text-xs px-3 py-1 rounded-full font-medium 
                          ${parseInt(reward.xp.replace(',', '')) <= currentXP 
                            ? 'bg-teal text-space-900' 
                            : 'bg-space-700 text-white/50'
                          }`}
                      >
                        {parseInt(reward.xp.replace(',', '')) <= currentXP ? 'Redeem' : 'Locked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-8 text-center">
          Unlock <span className="heading-gradient">Special Badges</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`glass-card p-6 text-center opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${badge.color} opacity-20 animate-pulse-subtle`}></div>
                <div className="absolute inset-1 rounded-full glass flex items-center justify-center">
                  {badge.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{badge.title}</h3>
              <p className="text-white/70 text-sm mb-3">{badge.description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-space-700/70 text-teal text-xs font-medium">
                {badge.xp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
