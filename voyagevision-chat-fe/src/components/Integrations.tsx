
import React, { useRef, useEffect, useState } from 'react';
import { Shuffle, CreditCard, Shield } from 'lucide-react';

const partners = [
  {
    name: "Skyscanner",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M10.5 15.5c.9-.7 1.8-1.3 2.8-1.9 2.3-1.3 4.8-2.2 7.4-2.7.2 0 .2-.1.2-.3-.4-1.9-1.9-3.3-3.7-3.6-2.5-.4-4.8 1.4-5.2 3.9-.1.7 0 1.5.1 2.2.1.9.1 1.7.1 2.5-.7 0-1.3.1-1.9.1h-.3c-.1 0-.1 0-.1-.1.2-1.9-.1-3.8-.9-5.5-1.5-3.5-4.5-5.8-8.2-6.4-.1 0-.2 0-.2.2v.4c0 3.1.9 6 2.5 8.6 1.6 2.6 3.8 4.5 6.5 5.8.7.4 1.4.7 2.1 1 0 .3-.1.6-.2.8 0 .1-.1.1-.2.1H7.8c-1 0-2 0-3.1-.1-.1 0-.2 0-.2.1-.3.3-.6.6-.9.9-.1.1-.1.1 0 .2.1.1.2.1.3.1h10.3c.3 0 .7 0 1-.1.2 0 .3-.1.3-.4.1-.5.4-1 .8-1.4.1-.1.1-.2.1-.3-.3-1.6-1.1-2.7-2.4-3.5-1.2-.8-2.4-1.4-3.5-2.1z" fill="currentColor"/>
      </svg>
    ),
    description: "Flight search and comparison"
  },
  {
    name: "Booking.com",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M20.377 11.082c-.09 0-1.027.001-1.11.003-.078.002-.15.005-.228.01-.364.02-.74.062-1.11.123l-.5.008c-.14.003-.28.005-.42.01-.42.01-.83.025-1.239.046-.25.012-.491.027-.726.043-.293.02-.571.044-.83.07-.035.003-.68.007-.103.01-.44.04-.861.09-1.249.145-.176.025-.343.05-.5.077-.293.05-.562.102-.8.157-.052.012-.102.024-.15.037-.353.085-.652.18-.892.284-.43.021-.83.043-.12.065-.97.058-.18.12-.245.183-.14.013-.26.027-.38.041-.3.035-.54.072-.74.111-.5.009-.9.018-.12.027-.2.045-.3.091-.3.138 0 .031.003.06.01.087 0 .001 0 .003.002.004.01.039.033.082.07.128.009.011.02.022.03.033a.618.618 0 0 0 .056.047c.01.008.022.016.033.023.061.038.134.072.225.104.1.005.24.01.38.016.127.044.28.084.462.123.24.007.51.014.78.02.206.043.438.082.696.116.33.004.69.009.106.013.363.044.767.08 1.212.107.095.006.194.01.295.015.11.005.222.01.338.013.29.01.592.017.905.02.166.001.334.003.505.003H18.797c.173 0 .345 0 .513-.003l.844-.02c.092-.002.182-.006.272-.01.119-.005.236-.01.35-.018.084-.004.167-.01.249-.014.15-.01.295-.02.437-.031.096-.008.19-.016.282-.024.157-.015.309-.032.456-.05.067-.007.133-.015.198-.023a16.24 16.24 0 0 0 .427-.062c.064-.01.127-.02.19-.032.14-.023.272-.049.401-.076.055-.012.111-.024.165-.037.136-.031.265-.065.385-.1.042-.012.086-.024.126-.037a3.52 3.52 0 0 0 .349-.122c.037-.015.074-.03.107-.047a1.31 1.31 0 0 0 .306-.17c.015-.011.03-.024.045-.036a.49.49 0 0 0 .069-.077c.01-.014.02-.029.027-.044a.273.273 0 0 0 .025-.063l.007-.022a.163.163 0 0 0 .005-.037.174.174 0 0 0-.006-.038l-.006-.023a.306.306 0 0 0-.028-.065 1.107 1.107 0 0 0-.132-.171 1.468 1.468 0 0 0-.192-.139 3.407 3.407 0 0 0-.478-.17c-.117-.034-.242-.065-.375-.094-.135-.03-.278-.057-.427-.082a16.2 16.2 0 0 0-.505-.077c-.178-.023-.365-.045-.56-.065-.191-.02-.39-.037-.595-.052-.153-.012-.31-.022-.47-.031-.108-.006-.217-.01-.328-.016-.253-.01-.513-.02-.779-.023-.086-.001-.172-.002-.258-.002h-1.14zM12.035 13.4c-.062 0-.124-.004-.185-.013a.429.429 0 0 1-.156-.06.37.37 0 0 1-.113-.105.364.364 0 0 1-.064-.147.924.924 0 0 1-.012-.154v-6.9c0-.257.09-.371.257-.385a.456.456 0 0 1 .14.01c.064.01.123.03.176.063.053.033.097.08.13.141.03.063.047.143.05.24.001.077.002.158.002.241v2.838c.22-.23.446-.447.677-.65.232-.201.467-.386.706-.554.24-.168.48-.318.723-.45.244-.133.485-.244.724-.333.24-.09.474-.158.702-.206.228-.048.446-.071.652-.071.357 0 .673.061.947.184.273.124.506.3.697.527.192.229.337.506.436.833.098.326.147.691.147 1.095v2.947c0 .096-.009.18-.027.25-.018.07-.045.13-.08.18-.36.05-.8.085-.135.108a.464.464 0 0 1-.188.034.387.387 0 0 1-.176-.034.358.358 0 0 1-.118-.094.403.403 0 0 1-.073-.142.646.646 0 0 1-.024-.18V9.73c0-.326-.024-.613-.07-.862-.047-.248-.126-.458-.234-.63a1.092 1.092 0 0 0-.462-.388 1.568 1.568 0 0 0-.748-.135c-.224 0-.447.031-.67.093-.223.061-.446.142-.67.241-.225.099-.45.214-.675.344a8.082 8.082 0 0 0-.668.424 9.726 9.726 0 0 0-.653.486c-.219.174-.44.348-.661.522v3.254c0 .089-.005.166-.016.232-.01.066-.029.12-.056.166a.335.335 0 0 1-.1.107.33.33 0 0 1-.151.058 1.006 1.006 0 0 1-.199.018M8.045 12.977c-.107 0-.202-.019-.284-.056a.468.468 0 0 1-.186-.17.897.897 0 0 1-.107-.275 1.388 1.388 0 0 1-.046-.36l.152-3.907c.013-.31.039-.581.077-.814.037-.232.093-.428.166-.588a.86.86 0 0 1 .277-.354c.112-.08.254-.12.428-.12.22 0 .429.031.63.092.2.062.411.144.635.245.223.102.459.22.706.355.248.136.516.283.804.442v3.877c0 .108-.007.203-.02.285a.593.593 0 0 1-.069.213.345.345 0 0 1-.135.137.452.452 0 0 1-.223.048c-.057 0-.113-.005-.168-.017a.357.357 0 0 1-.142-.063.46.46 0 0 1-.1-.113.404.404 0 0 1-.054-.17c-.2.03-.46.072-.8.127-.33.054-.76.11-.13.17a1.809 1.809 0 0 1-.174.176 1.66 1.66 0 0 1-.235.166 2.396 2.396 0 0 1-.32.147 2.631 2.631 0 0 1-.418.128c-.077.017-.16.03-.248.041a1.68 1.68 0 0 1-.243.015zm1.674-1.05V8.42c-.182-.11-.361-.215-.537-.315-.177-.1-.346-.188-.508-.264-.162-.076-.315-.137-.458-.182a1.25 1.25 0 0 0-.385-.068c-.096 0-.17.025-.22.075-.052.05-.094.124-.127.222a1.26 1.26 0 0 0-.074.363 4.59 4.59 0 0 0-.021.5L7.3 11.742c.006.083.017.159.03.226.013.068.036.127.067.178.03.05.072.09.125.118a.37.37 0 0 0 .2.043c.06 0 .136-.012.23-.036a1.454 1.454 0 0 0 .314-.123c.116-.059.243-.136.379-.232.137-.095.281-.214.433-.358.063-.058.122-.112.179-.16.056-.05.115-.094.175-.134.06-.04.124-.074.191-.104.067-.03.143-.054.228-.073a.26.26 0 0 0-.32.056z" fill="currentColor"/>
      </svg>
    ),
    description: "Hotel and accommodation booking"
  },
  {
    name: "Expedia",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M20.934 7.17h-2.425v10.037h2.425V7.17zm-4.443.675c-.12.25-.24.553-.408.855-.167.302-.334.605-.5.856-.144.25-.288.48-.408.658.144-.022.312-.022.48-.045.168-.022.336-.022.504-.045.17 0 .313-.023.457-.023.144 0 .265-.022.385-.022-.12-.18-.264-.408-.409-.658a8.65 8.65 0 0 1-.408-.856c-.12-.302-.216-.58-.336-.856-.12.276-.24.578-.36.834zm-1.922 9.362h2.354l.65-1.714h3.77l.673 1.714h2.354L20.21 7.17h-2.378l-3.265 10.037zM5.388 7.17H2.89c-.35 0-.65.119-.889.356-.24.226-.337.505-.337.833 0 .35.12.65.336.879.216.23.53.344.889.344h2.5v7.625h2.425V9.581h2.522V7.17H5.388z" fill="currentColor"/>
      </svg>
    ),
    description: "Full travel packages and tours"
  },
  {
    name: "Stripe",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M13.208 13.016c0-.84-.687-1.2-1.787-1.2-.84 0-1.8.228-2.52.6l-.276-1.296c.78-.348 1.908-.624 3.084-.624 1.872 0 3.012.864 3.012 2.388 0 2.532-3.408 2.208-3.408 3.372 0 .444.348.588.936.588.756 0 1.824-.312 2.508-.684l.288 1.308c-.744.372-1.86.684-2.928.684-1.74 0-2.868-.684-2.868-2.028 0-2.304 3.96-2.076 3.96-3.108zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="currentColor"/>
      </svg>
    ),
    description: "Secure payment processing"
  },
  {
    name: "PayPal",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M19.897 8.788c.01.118.01.236.01.355 0 1.91-.493 3.295-1.667 4.237-1.133.902-2.724 1.367-4.83 1.367h-.65a.86.86 0 0 0-.848.722l-.532 3.367-.148.96a.476.476 0 0 1-.47.399h-2.855a.39.39 0 0 1-.385-.452l.026-.133.523-3.328.005-.038a.476.476 0 0 1 .47-.398h1.48c1.935 0 3.452-.395 4.526-1.263.975-.785 1.623-1.944 1.92-3.46.108-.558.158-1.032.158-1.447 0-.197-.01-.372-.02-.53a7.673 7.673 0 0 0-.167-.962c-.082-.367-.201-.73-.357-1.093h2.337c.062.25.119.503.167.76.056.296.099.609.107.937zm-4.31-4.518c-.593-.65-1.56-.975-2.85-.975H8.983a.86.86 0 0 0-.848.722L6.6 13.74a.39.39 0 0 0 .385.452h2.973a.86.86 0 0 0 .848-.722l.454-2.88a.606.606 0 0 1 .593-.505h.73c1.934 0 3.451-.395 4.526-1.264.975-.784 1.623-1.944 1.92-3.459.108-.558.157-1.033.157-1.447 0-.523-.079-.973-.217-1.368-.296.197-.65.375-1.049.523a6.593 6.593 0 0 1-2.333.3zM9.244.788c-.23 0-.456.01-.681.03H4.247a.86.86 0 0 0-.847.721L2.01 11.115a.39.39 0 0 0 .385.452h2.964l.75-4.742.002-.02a.476.476 0 0 1 .47-.398h.979c1.935 0 3.451-.395 4.525-1.263.975-.785 1.623-1.944 1.92-3.459.107-.558.157-1.032.157-1.447 0-.523-.078-.972-.216-1.367A7.368 7.368 0 0 0 9.244.789z" fill="currentColor"/>
      </svg>
    ),
    description: "Alternative payment methods"
  },
  {
    name: "Crypto",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2l-2-6 1-2h5v2h-3l1 4h2l1 2h-3zm5-8h-2l-1-2h-2l-1 2H8l1-2h6l1 2z" fill="currentColor"/>
      </svg>
    ),
    description: "Cryptocurrency payments"
  }
];

const Integrations = () => {
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
    <section className="section-padding relative" id="integrations" ref={sectionRef}>
      <div className="absolute top-1/4 left-0 w-60 h-96 bg-teal/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple/10 rounded-full filter blur-[120px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h6 className="text-teal mb-3 font-medium tracking-wide text-sm uppercase">Ecosystem</h6>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Powerful <span className="heading-gradient">Integrations</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            TravelQuest AI connects with the best travel platforms and payment providers to offer you a seamless, end-to-end booking experience.
          </p>
        </div>

        <div className="glass-card p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 glass rounded-lg flex items-center justify-center p-4 mb-4 text-white/80 hover:text-white transition-colors">
                  {partner.logo}
                </div>
                <h3 className="text-white font-medium text-center">{partner.name}</h3>
                <p className="text-white/60 text-xs text-center">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className={`glass-card p-6 flex flex-col opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-4 text-teal">
              <Shuffle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform</h3>
            <p className="text-white/70 text-sm flex-grow">
              In addition to WhatsApp, TravelQuest AI works with Facebook Messenger, Telegram, and Instagram for maximum flexibility.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                WhatsApp
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Facebook
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Instagram
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Telegram
              </div>
            </div>
          </div>
          
          <div 
            className={`glass-card p-6 flex flex-col opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-4 text-teal">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Payment Options</h3>
            <p className="text-white/70 text-sm flex-grow">
              Flexible payment solutions including all major credit cards, digital wallets, and cryptocurrency for global travelers.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Credit Cards
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                PayPal
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Apple Pay
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Crypto
              </div>
            </div>
          </div>
          
          <div 
            className={`glass-card p-6 flex flex-col opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '400ms' }}
          >
            <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-4 text-teal">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
            <p className="text-white/70 text-sm flex-grow">
              Advanced encryption and blockchain technology ensure your personal information and payment details are always protected.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                End-to-end Encryption
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                GDPR Compliant
              </div>
              <div className="bg-space-700/50 rounded-full px-3 py-1 text-xs font-medium text-white/80">
                Blockchain Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
