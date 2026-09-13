import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20 text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider">
          CUSTOM BRANDING & MERCHANDISE EXPERTS
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
          AK GROUP <span className="text-gradient-red">LIMITED</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
          We specialize in custom corporate branding tailored to customer needs. From bank promotional products, branded drinkware & bottles, to executive gift sets, corporate apparel, and vehicle fleet wrapping — we turn your brand identity into physical products people remember.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="white-card-thick p-6 rounded-2xl space-y-3 hover:border-red-600 transition shadow-lg bg-white border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 font-black flex items-center justify-center border border-red-200 text-xs">
              MIS
            </div>
            <h3 className="text-xl font-black text-[#0B2545]">Our Mission</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              To provide banks, corporations, and institutions across Africa with tailored custom-branded merchandise, corporate apparel, laser-engraved bottles, and 3M vehicle fleet wraps engineered to match exact customer brand specifications.
            </p>
          </div>

          <div className="white-card-thick p-6 rounded-2xl space-y-3 hover:border-red-600 transition shadow-lg bg-white border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B2545] font-black flex items-center justify-center border border-slate-200 text-xs">
              VIS
            </div>
            <h3 className="text-xl font-black text-[#0B2545]">Our Vision</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              To be Africa's premier custom branding partner — delivering reliable, high-volume product branding, precision embroidery, screen printing, and vehicle signage that elevates corporate visibility across regional markets.
            </p>
          </div>
        </div>

        {/* 4 Selling Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2545]">WHY CHOOSE AK GROUP?</h2>
            <p className="text-xs text-slate-500 mt-0.5 font-bold">Built around the core pillars from our corporate promotional brochure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="white-card-thick p-5 rounded-2xl space-y-2 shadow-md bg-white border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 font-black flex items-center justify-center border border-amber-200 text-xs">
                01
              </div>
              <h4 className="text-sm font-black text-[#0B2545]">PRIME OUTLETS</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Partnering with leading international suppliers for premium quality, safety compliance, and fabric reliability.
              </p>
            </div>

            <div className="white-card-thick p-5 rounded-2xl space-y-2 shadow-md bg-white border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 font-black flex items-center justify-center border border-emerald-200 text-xs">
                02
              </div>
              <h4 className="text-sm font-black text-[#0B2545]">PRICE COMPETITIVE</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Best value for money without compromising quality. Direct manufacturer relationships ensure tier pricing discounts.
              </p>
            </div>

            <div className="white-card-thick p-5 rounded-2xl space-y-2 shadow-md bg-white border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 font-black flex items-center justify-center border border-sky-200 text-xs">
                03
              </div>
              <h4 className="text-sm font-black text-[#0B2545]">PAN-AFRICAN SUPPLY</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Delivering across Africa with active operational hubs in Kigali (Rwanda) and Centurion (South Africa).
              </p>
            </div>

            <div className="white-card-thick p-5 rounded-2xl space-y-2 shadow-md bg-white border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 font-black flex items-center justify-center border border-purple-200 text-xs">
                04
              </div>
              <h4 className="text-sm font-black text-[#0B2545]">TAILORED BRANDING RANGE</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Custom logo branding for bank merchandise, stainless bottles & drinkware, corporate apparel, caps, executive gift sets, and 3M vehicle fleet wraps tailored to customer requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="white-card-thick p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl bg-white border border-slate-200">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2545]">OUR CORE VALUES</h2>
            <p className="text-xs text-slate-500 mt-0.5 font-bold">The principles driving every logo print, embroidery stitch, and vehicle wrap.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'QUALITY', desc: 'Strict inspection standards for every single product unit.' },
              { title: 'RELIABILITY', desc: 'On-time delivery guarantees for corporate events and campaigns.' },
              { title: 'INNOVATION', desc: 'Cutting-edge laser engraving, 3D embroidery, and vinyl techniques.' },
              { title: 'VALUE', desc: 'Maximizing marketing return on investment for your brand.' },
              { title: 'CUSTOMER SERVICE', desc: 'Dedicated regional account managers assisting every quotation.' },
              { title: 'PAN-AFRICAN REACH', desc: 'Seamless cross-border customs clearing and regional supply.' },
            ].map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 className="text-xs font-black text-[#0B2545] uppercase tracking-wider">{val.title}</h4>
                <p className="text-[11px] text-slate-600 font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Headquarters Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="white-card-thick p-6 rounded-2xl space-y-2 shadow-lg bg-white border border-slate-200 border-l-4 border-l-red-600">
            <h3 className="text-lg font-black text-[#0B2545]">AK GROUP LIMITED (KIGALI)</h3>
            <p className="text-xs font-bold text-slate-700">
              Kigali, Rwanda Office & Regional Fulfillment Center
            </p>
            <p className="text-xs text-slate-600 font-medium">
              Serving East and Central African business markets with rapid turnaround screen printing, embroidery, and event canopy fabrication.
            </p>
          </div>

          <div className="white-card-thick p-6 rounded-2xl space-y-2 shadow-lg bg-white border border-slate-200 border-l-4 border-l-sky-600">
            <h3 className="text-lg font-black text-[#0B2545]">AK GROUP (SOUTH AFRICA HUB)</h3>
            <p className="text-xs font-bold text-slate-700">
              Centurion, South Africa Office (Midstream Estate)
            </p>
            <p className="text-xs text-slate-600 font-medium">
              Serving Southern African markets with large-volume procurement, executive luxury gift boxes, and fleet wrap engineering.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
