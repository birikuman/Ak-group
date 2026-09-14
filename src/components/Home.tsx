import React from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES, PRODUCTS, CASE_STUDIES } from '../data/mockData';
import { PanAfricanMap } from './PanAfricanMap';

export const Home: React.FC = () => {
  const { setActiveTab, setFilters, setSelectedProduct, setPreviewImageUrl } = useApp();

  const handleExploreCategory = (catId: any) => {
    setFilters(prev => ({ ...prev, categoryId: catId }));
    setActiveTab('showroom');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white space-y-16 pb-20 text-slate-900">
      
      {/* HERO SECTION - Vertical Advert Showcase */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2545] tracking-tight leading-none">
              WE BUILD BRANDS THAT <br />
              <span className="text-gradient-red">GET NOTICED.</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-md">
              Custom corporate branding tailored to customer needs. Custom logos on bank promotional merchandise, stainless bottles & cups, corporate apparel, caps, and vehicle fleet wrapping across Africa.
            </p>

            <div className="pt-2 border-t border-slate-200 text-xs font-bold text-slate-500 tracking-wider uppercase flex flex-wrap gap-2">
              <span className="text-[#0B2545]">Bottles & Drinkware</span> •
              <span className="text-[#0B2545]">Apparel & Caps</span> •
              <span className="text-[#0B2545]">Bank Merchandise</span> •
              <span className="text-red-600">Vehicle Fleet Wrap</span>
            </div>
          </div>

          {/* Hero Right Showcase - Big Vertical Portrait Image */}
          <div className="lg:col-span-7">
            <div className="white-card-thick p-3 sm:p-4 rounded-3xl shadow-2xl bg-white border border-slate-200">
              <div 
                className="relative h-[480px] sm:h-[560px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group shadow-inner"
                onClick={() => setPreviewImageUrl('/images/product-polo-1.webp')}
              >
                <img
                  src="/images/product-polo-1.webp"
                  alt="Premium Corporate Polo Shirt"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BRANDING SHOWROOM CATEGORIES - Vertical Portrait Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest block">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545]">
            BRANDING <span className="text-gradient-red">SHOWROOM</span>
          </h2>
          <p className="text-xs text-red-600 font-bold uppercase tracking-wider">WE BUILD BRANDS THAT PEOPLE WILL NEVER FORGET</p>
        </div>

        {/* 9 Category Cards Grid - Vertical Portrait Image Focus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="white-card-thick rounded-3xl overflow-hidden group hover:border-red-600 transition duration-500 shadow-md hover:shadow-2xl flex flex-col justify-between bg-white border border-slate-200"
            >
              {/* Vertical Aspect Portrait Image */}
              <div 
                className="relative h-80 sm:h-96 overflow-hidden bg-slate-100 border-b border-slate-200 cursor-pointer"
                onClick={() => setPreviewImageUrl(cat.image)}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow">
                  {cat.name}
                </div>
                <div className="absolute bottom-3 right-3 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow backdrop-blur-sm">
                  ZOOM & EXPAND
                </div>
              </div>

              <div className="p-4 space-y-2 bg-white">
                <p className="text-xs text-slate-600 line-clamp-1 font-medium">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
                  <span className="text-red-600 font-bold uppercase tracking-wider text-[10px]">Custom Branding</span>
                  <button 
                    onClick={() => handleExploreCategory(cat.id)}
                    className="font-extrabold text-[#0B2545] text-xs hover:text-red-600 transition"
                  >
                    Browse Items &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2026 BRAND CATALOGUE BANNERS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest block">Featured Collections</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545]">
            2026 BRAND <span className="text-gradient-red">CATALOGUES</span>
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Click any brand banner to preview high-res catalogue image</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Okiyo Eco-Friendly Gifts */}
          <div 
            onClick={() => {
              setPreviewImageUrl('/images/Brand-Web-Banners-2026-Okiyo.jpg');
            }}
            className="white-card-thick rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl border border-slate-200 transition duration-500"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src="/images/Brand-Web-Banners-2026-Okiyo.jpg" 
                alt="Okiyo Eco-Friendly Gifts" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow">
                OKIYO ECO LINE
              </div>
            </div>
            <div className="p-4 bg-white space-y-1">
              <h3 className="font-extrabold text-[#0B2545] text-sm group-hover:text-red-600 transition">Okiyo Eco-Friendly Gifts</h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">Sustainable bamboo, cork & organic corporate gifts.</p>
            </div>
          </div>

          {/* Kooshty Drinkware */}
          <div 
            onClick={() => {
              setPreviewImageUrl('/images/Brand-Web-Banners-2026-Kooshty.jpg');
            }}
            className="white-card-thick rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl border border-slate-200 transition duration-500"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src="/images/Brand-Web-Banners-2026-Kooshty.jpg" 
                alt="Kooshty Drinkware & Apparel" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-3 left-3 bg-red-600/90 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow">
                KOOSHTY LIFESTYLE
              </div>
            </div>
            <div className="p-4 bg-white space-y-1">
              <h3 className="font-extrabold text-[#0B2545] text-sm group-hover:text-red-600 transition">Kooshty Drinkware & Apparel</h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">Premium insulated tumblers & active lifestyle gear.</p>
            </div>
          </div>

          {/* Executive Diaries */}
          <div 
            onClick={() => {
              setPreviewImageUrl('/images/Brand-Web Banners-2026-Diaries.jpg');
            }}
            className="white-card-thick rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl border border-slate-200 transition duration-500"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src="/images/Brand-Web Banners-2026-Diaries.jpg" 
                alt="2026 Executive Planners" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-3 left-3 bg-amber-600/90 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow">
                EXECUTIVE DIARIES
              </div>
            </div>
            <div className="p-4 bg-white space-y-1">
              <h3 className="font-extrabold text-[#0B2545] text-sm group-hover:text-red-600 transition">2026 Executive Planners</h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">Debossed leather diaries & desk management notebooks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY - Large Vertical Portrait Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest block">Portfolio</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2545] mt-1">
            VEHICLE FLEET WRAPPING
          </h2>
        </div>

        <div className="white-card-thick p-4 sm:p-6 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl bg-white border border-slate-200">
          <div className="lg:col-span-7">
            <div 
              className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden border border-slate-300 shadow-md cursor-pointer group"
              onClick={() => setPreviewImageUrl(CASE_STUDIES[0].mainImage)}
            >
              <img
                src={CASE_STUDIES[0].mainImage}
                alt="Vehicle Fleet Branding"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                3M VINYL FLEET WRAP
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B2545]">
              {CASE_STUDIES[0].title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Full cast vinyl fleet transformation designed for maximum brand exposure on African highways.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-[#0B2545] font-bold space-y-1">
              <p className="text-red-600 uppercase tracking-wider text-[10px]">Project Impact</p>
              <p className="text-sm font-extrabold">{CASE_STUDIES[0].results}</p>
            </div>
            <button
              onClick={() => {
                setActiveTab('at-work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow uppercase tracking-wider"
            >
              EXPLORE CASE STUDIES
            </button>
          </div>
        </div>
      </section>

      {/* PAN-AFRICAN MAP COMPONENT */}
      <PanAfricanMap />

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="white-card-thick p-8 sm:p-12 rounded-3xl space-y-4 shadow-xl bg-gradient-to-b from-slate-50 to-white border border-slate-200">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
            READY TO BUILD YOUR <span className="text-gradient-red">BRAND?</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Request your customized corporate quote today. Delivered across East, Southern, and Central Africa.
          </p>
          <div className="pt-2 flex justify-center gap-3 flex-wrap">

            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B2545] font-bold text-xs border border-slate-300 shadow-sm uppercase tracking-wider"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
