import React from 'react';
import { useApp } from '../context/AppContext';
const aksantiLogo = '/images/aksanti-logo.png';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  const handleNav = (tab: any) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040E1C] border-t border-slate-800 text-slate-400 text-xs py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <img 
                src={aksantiLogo} 
                alt="AK GROUP Logo" 
                className="h-10 w-auto object-contain bg-white rounded-lg p-1" 
              />
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-tight block">AK GROUP</span>
              <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider block">
                Your Brand. Our Craft. Across Africa.
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed">
            We build brands that get noticed. Premium corporate apparel, promotional stationery, drinkware, bags, executive gift sets, and vehicle fleet wrapping delivered across African markets.
          </p>

          <div className="pt-2 flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">Pan-African Logistics Network Operational</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><button onClick={() => handleNav('home')} className="hover:text-red-400 transition">HOME</button></li>
            <li><button onClick={() => handleNav('showroom')} className="hover:text-red-400 transition font-bold text-amber-300">SHOWROOM</button></li>
            <li><button onClick={() => handleNav('builder')} className="hover:text-amber-300 transition">BUILD YOUR BRAND</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-red-400 transition">SERVICES</button></li>
            <li><button onClick={() => handleNav('at-work')} className="hover:text-red-400 transition">AT WORK</button></li>
            <li><button onClick={() => handleNav('catalogues')} className="hover:text-red-400 transition font-bold text-red-400">DIGITAL CATALOGUES</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-red-400 transition">ABOUT US</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-red-400 transition">CONTACT US</button></li>
          </ul>
        </div>

        {/* Regional Offices Column 1 */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-red-500">
            AK GROUP LIMITED (RWANDA)
          </h4>
          <div className="space-y-2 text-slate-300">
            <p>KG 7 Ave, Heights Building, Kigali, Rwanda</p>
            <p className="font-mono">+250 788 123 456</p>
            <p className="font-mono">kigali@akgroup.com</p>
          </div>
        </div>

        {/* Regional Offices Column 2 */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-sky-400">
            AK GROUP (SOUTH AFRICA HUB)
          </h4>
          <div className="space-y-2 text-slate-300">
            <p>Midstream Estate, Centurion, 1692, South Africa</p>
            <p className="font-mono">+27 12 345 6789</p>
            <p className="font-mono">sa@akgroup.com</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
        <p>© 2026 AK GROUP LIMITED. All rights reserved. Across Africa.</p>
        <button
          onClick={() => handleNav('admin')}
          className="text-slate-400 hover:text-white transition font-mono uppercase tracking-wider"
        >
          Admin Portal Access
        </button>
      </div>
    </footer>
  );
};

