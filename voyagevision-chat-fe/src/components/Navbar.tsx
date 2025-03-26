
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glass shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-teal to-purple flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" opacity="0.25"/>
              <path d="M19.47,7.5l-7-4a1,1,0,0,0-1,0l-7,4A1,1,0,0,0,4,8.5v7a1,1,0,0,0,.47.85l7,4a1,1,0,0,0,1,0l7-4A1,1,0,0,0,20,15.5v-7A1,1,0,0,0,19.47,7.5ZM12,3.8,17.92,7.6,12,11.4,6.08,7.6ZM6,9.4l5,3V19L6,16Zm7,9.6V12.4l5-3V16Z"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl">TravelQuest<span className="text-teal">AI</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors animated-border">Features</a>
          <a href="#whatsapp" className="text-sm text-white/80 hover:text-white transition-colors animated-border">WhatsApp</a>
          <a href="#rewards" className="text-sm text-white/80 hover:text-white transition-colors animated-border">Rewards</a>
          <a href="#integrations" className="text-sm text-white/80 hover:text-white transition-colors animated-border">Integrations</a>
          <a href="#contact" className="btn-primary text-sm font-medium">
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-space-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-[400px] border-b border-space-700' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a href="#features" className="text-sm py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#whatsapp" className="text-sm py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>WhatsApp</a>
          <a href="#rewards" className="text-sm py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Rewards</a>
          <a href="#integrations" className="text-sm py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Integrations</a>
          <a href="#contact" className="btn-primary text-center text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
