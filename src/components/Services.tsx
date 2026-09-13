import React from 'react';
import { useApp } from '../context/AppContext';

const SERVICES_DATA = [
  {
    id: 'branding-printing',
    title: 'Branding & Printing',
    tagline: 'Screen Printing, 3D Embroidery, Engraving & Foil Stamping',
    image: '/images/service-branding.jpg'
  },
  {
    id: 'corporate-merchandise',
    title: 'Corporate Merchandise',
    tagline: 'Staff Workwear, Executive Gifts & Onboarding Kits',
    image: '/images/service-merchandise.jpg'
  },
  {
    id: 'promotional-materials',
    title: 'Promotional Materials',
    tagline: 'Campaign Giveaways, Stationeries, Bags & Drinkware',
    image: '/images/service-promotional.jpg'
  },
  {
    id: 'vehicle-branding',
    title: 'Vehicle Fleet Branding',
    tagline: '3M Cast Vinyl Wraps for Delivery Vans, Pickups & Sedans',
    image: '/images/service-vehicle.jpeg'
  },
  {
    id: 'event-branding',
    title: 'Event & Campaign Branding',
    tagline: 'Pop-Up Gazebos, Teardrop Flags & Summit Exhibition Booths',
    image: '/images/service-event.jpg'
  },
  {
    id: 'bulk-supply',
    title: 'Pan-African Bulk Supply',
    tagline: 'Procurement & Logistics Across East, Central & Southern Africa',
    image: '/images/service-logistics.jpg'
  }
];

export const Services: React.FC = () => {
  const { setActiveTab, setPreviewImageUrl } = useApp();

  return (
    <div className="min-h-screen bg-white pb-20 text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider">
          CAPABILITIES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B2545] tracking-tight">
          OUR <span className="text-gradient-red">SERVICES</span>
        </h1>
        <p className="text-xs text-red-600 font-bold uppercase tracking-wider">WE BUILD BRANDS THAT PEOPLE WILL NEVER FORGET</p>
      </div>

      {/* Services Grid - Big Vertical Image Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className="white-card-thick rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200 group hover:border-red-600 transition duration-500 flex flex-col justify-between"
          >
            {/* Big High Quality Vertical Portrait Picture */}
            <div 
              className="relative h-96 sm:h-[480px] overflow-hidden bg-slate-100 border-b border-slate-200 cursor-pointer"
              onClick={() => setPreviewImageUrl(service.image)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                SERVICE 0{index + 1}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow backdrop-blur-sm">
                CLICK FOR FULL-SCREEN
              </div>
            </div>

            <div className="p-6 space-y-3 bg-white">
              <h2 className="text-2xl font-black text-[#0B2545] group-hover:text-red-600 transition">
                {service.title}
              </h2>
              <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">
                {service.tagline}
              </p>
              
              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setActiveTab('showroom');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-[#0B2545] hover:bg-red-600 text-white font-extrabold text-xs rounded-xl shadow uppercase tracking-wider transition"
                >
                  VIEW SHOWROOM
                </button>
                <button
                  onClick={() => {
                    setActiveTab('quote');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0B2545] font-bold text-xs rounded-xl border border-slate-300 uppercase tracking-wider transition"
                >
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
