import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { TabType } from '../context/AppContext';
import { Menu, X } from 'lucide-react';
const aksantiLogo = '/images/aksanti-logo.png';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner - Regional Presence */}
      <div className="bg-[#0B2545] text-slate-200 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="font-semibold text-red-400">
              AK GROUP LIMITED: <span className="text-white">Pan-African Supply & Delivery</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline-block text-[11px]">
              Kigali, Rwanda • Across Africa
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Brand Logo & Tagline */}
            <div 
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex items-center gap-3 group"
            >
              <img 
                src={aksantiLogo} 
                alt="AK GROUP Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-black text-lg text-[#0B2545] tracking-tight group-hover:text-red-600 transition-colors leading-none">
                  AK GROUP
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold text-red-600 mt-1">
                  Your Brand. Our Craft. Across Africa.
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'home' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-[#0B2545] hover:text-red-600 hover:bg-slate-100'
                }`}
              >
                HOME
              </button>

              <button
                onClick={() => handleNavClick('showroom')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wide transition ${
                  activeTab === 'showroom'
                    ? 'bg-red-600 text-white shadow'
                    : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                }`}
              >
                SHOWROOM
              </button>

              <button
                onClick={() => handleNavClick('services')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'services' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-[#0B2545] hover:text-red-600 hover:bg-slate-100'
                }`}
              >
                SERVICES
              </button>

              <button
                onClick={() => handleNavClick('at-work')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'at-work' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-[#0B2545] hover:text-red-600 hover:bg-slate-100'
                }`}
              >
                AT WORK
              </button>

              <button
                onClick={() => handleNavClick('catalogues')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'catalogues' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-[#0B2545] hover:text-red-600 hover:bg-slate-100'
                }`}
              >
                CATALOGUES
              </button>

              <button
                onClick={() => handleNavClick('builder')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'builder' 
                    ? 'text-amber-800 bg-amber-100 border border-amber-300' 
                    : 'text-amber-700 hover:bg-amber-50 border border-amber-200'
                }`}
              >
                BUILD YOUR BRAND
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'about' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-[#0B2545] hover:text-red-600 hover:bg-slate-100'
                }`}
              >
                ABOUT US
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'contact' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-[#0B2545] hover:text-red-600 hover:bg-slate-100'
                }`}
              >
                CONTACT
              </button>
            </nav>

            {/* Right Action CTA Button */}
            <div className="flex items-center gap-2">


              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-100 text-[#0B2545] border border-slate-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1.5 shadow-xl text-xs">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'home' ? 'bg-red-600 text-white' : 'text-[#0B2545] hover:bg-slate-100'
              }`}
            >
              HOME
            </button>
            
            <button
              onClick={() => handleNavClick('showroom')}
              className={`w-full text-left px-3 py-2 rounded-lg font-black ${
                activeTab === 'showroom' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              SHOWROOM & CATALOG
            </button>

            <button
              onClick={() => handleNavClick('builder')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'builder' ? 'bg-amber-100 text-amber-900' : 'text-amber-800 hover:bg-amber-50'
              }`}
            >
              BUILD YOUR BRAND WIZARD
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'services' ? 'bg-red-600 text-white' : 'text-[#0B2545] hover:bg-slate-100'
              }`}
            >
              SERVICES
            </button>

            <button
              onClick={() => handleNavClick('at-work')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'at-work' ? 'bg-red-600 text-white' : 'text-[#0B2545] hover:bg-slate-100'
              }`}
            >
              AT WORK / PORTFOLIO
            </button>

            <button
              onClick={() => handleNavClick('catalogues')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'catalogues' ? 'bg-red-600 text-white' : 'text-[#0B2545] hover:bg-slate-100'
              }`}
            >
              DIGITAL CATALOGUES
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'about' ? 'bg-red-600 text-white' : 'text-[#0B2545] hover:bg-slate-100'
              }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold ${
                activeTab === 'contact' ? 'bg-red-600 text-white' : 'text-[#0B2545] hover:bg-slate-100'
              }`}
            >
              CONTACT US
            </button>


          </div>
        )}
      </header>
    </>
  );
};

