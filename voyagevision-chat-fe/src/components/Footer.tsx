
import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative" id="contact">
      <div className="section-padding bg-space-900">
        <div className="section-container">
          <div className="glass-card p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Ready to Revolutionize Your <span className="heading-gradient">Travel Experience?</span>
                </h2>
                <p className="text-white/70 mb-6">
                  Connect your WhatsApp to TravelQuest AI and start booking smarter, faster, and more rewarding travel experiences today.
                </p>
                <a href="#" className="btn-primary inline-flex items-center gap-2">
                  <MessageSquare size={18} />
                  Get Started with WhatsApp
                </a>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-space-800 border border-space-700 rounded-lg px-4 py-2 text-white focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-space-800 border border-space-700 rounded-lg px-4 py-2 text-white focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-1">Message</label>
                    <textarea 
                      className="w-full bg-space-800 border border-space-700 rounded-lg px-4 py-2 text-white focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal h-28"
                      placeholder="Tell us about your travel needs"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-secondary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-teal to-purple flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" opacity="0.25"/>
                    <path d="M19.47,7.5l-7-4a1,1,0,0,0-1,0l-7,4A1,1,0,0,0,4,8.5v7a1,1,0,0,0,.47.85l7,4a1,1,0,0,0,1,0l7-4A1,1,0,0,0,20,15.5v-7A1,1,0,0,0,19.47,7.5ZM12,3.8,17.92,7.6,12,11.4,6.08,7.6ZM6,9.4l5,3V19L6,16Zm7,9.6V12.4l5-3V16Z"/>
                  </svg>
                </div>
                <span className="font-display font-bold text-xl">TravelQuest<span className="text-teal">AI</span></span>
              </a>
              <p className="text-white/70 text-sm mb-6">
                Revolutionizing travel booking through AI and WhatsApp integration. Book smarter, travel better.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-space-800 flex items-center justify-center text-white/70 hover:text-teal transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-space-800 flex items-center justify-center text-white/70 hover:text-teal transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-space-800 flex items-center justify-center text-white/70 hover:text-teal transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-space-800 flex items-center justify-center text-white/70 hover:text-teal transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors text-sm">Home</a></li>
                <li><a href="#features" className="text-white/70 hover:text-teal transition-colors text-sm">Features</a></li>
                <li><a href="#whatsapp" className="text-white/70 hover:text-teal transition-colors text-sm">WhatsApp Demo</a></li>
                <li><a href="#rewards" className="text-white/70 hover:text-teal transition-colors text-sm">Rewards</a></li>
                <li><a href="#integrations" className="text-white/70 hover:text-teal transition-colors text-sm">Integrations</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-teal transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors text-sm">Cookies Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors text-sm">GDPR Compliance</a></li>
                <li><a href="#" className="text-white/70 hover:text-teal transition-colors text-sm">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal mt-0.5" />
                  <span className="text-white/70 text-sm">info@travelquestai.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal mt-0.5" />
                  <span className="text-white/70 text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal mt-0.5" />
                  <span className="text-white/70 text-sm">123 AI Innovation Drive, San Francisco, CA 94105</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-space-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TravelQuest AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
