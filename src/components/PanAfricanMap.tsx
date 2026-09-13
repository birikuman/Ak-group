import React, { useState } from 'react';
import { AFRICAN_LOCATIONS } from '../data/mockData';
import type { AfricanLocation } from '../types';

export const PanAfricanMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<AfricanLocation>(AFRICAN_LOCATIONS[0]);

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider">
            PAN-AFRICAN LOGISTICS & SUPPLY
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
            BRANDING ACROSS <span className="text-gradient-red">AFRICA</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            From local enterprise orders to regional corporate campaigns, we fabricate, customize, and deliver premium branded solutions across African markets.
          </p>
        </div>

        {/* Map Container + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 white-card-thick p-5 rounded-2xl relative overflow-hidden shadow-md bg-white border border-slate-200">
            
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto flex items-center justify-center">
              
              {/* African Continent SVG Outline */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-slate-300 fill-slate-100 stroke-slate-400 stroke-[0.8]">
                <path d="
                  M 35 15 
                  C 45 10, 65 12, 75 22 
                  C 85 30, 85 45, 75 55 
                  C 72 65, 65 75, 58 88 
                  C 52 95, 48 95, 45 88 
                  C 42 78, 38 68, 35 58 
                  C 30 52, 22 45, 25 35 
                  C 28 25, 30 18, 35 15 Z
                " />
                <path d="M 80 65 C 82 62, 85 70, 82 78 C 80 82, 78 75, 80 65 Z" className="fill-slate-200 stroke-slate-400" />
              </svg>

              {/* Connected Supply Route Lines */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="62" y1="55" x2="58" y2="82" stroke="#D71920" strokeWidth="0.8" strokeDasharray="1.5,1.5" className="animate-pulse" />
                <line x1="62" y1="55" x2="66" y2="52" stroke="#D71920" strokeWidth="0.8" strokeDasharray="1.5,1.5" />
                <line x1="62" y1="55" x2="60" y2="50" stroke="#D71920" strokeWidth="0.8" strokeDasharray="1.5,1.5" />
                <line x1="62" y1="55" x2="48" y2="56" stroke="#D71920" strokeWidth="0.8" strokeDasharray="1.5,1.5" />
                <line x1="62" y1="55" x2="65" y2="60" stroke="#D71920" strokeWidth="0.8" strokeDasharray="1.5,1.5" />
              </svg>

              {/* Location Pins */}
              {AFRICAN_LOCATIONS.map((loc) => {
                const isSelected = loc.id === selectedLocation.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    style={{ left: `${loc.coordinates?.x ?? 50}%`, top: `${loc.coordinates?.y ?? 50}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition transform hover:scale-110 z-10"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute w-5 h-5 rounded-full ${isSelected ? 'bg-red-500 animate-ping-slow' : 'bg-red-300/40'}`}></span>
                      
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md border-2 font-black text-[10px] ${
                        isSelected 
                          ? 'bg-red-600 border-white text-white scale-110 shadow-red-600/50' 
                          : loc.isHeadquarters 
                            ? 'bg-amber-400 border-slate-900 text-slate-950 font-black' 
                            : 'bg-[#0B2545] border-white text-white'
                      }`}>
                        {loc.country.substring(0, 1)}
                      </div>

                      <div className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded text-[10px] font-black shadow-md border ${
                        isSelected 
                          ? 'bg-red-600 text-white border-red-500' 
                          : 'bg-white text-[#0B2545] border-slate-300 group-hover:border-red-600'
                      }`}>
                        {loc.city}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Location Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5 justify-center border-t border-slate-200 pt-3">
              {AFRICAN_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 border ${
                    selectedLocation.id === loc.id
                      ? 'bg-red-600 text-white border-red-600 shadow'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-red-600 hover:text-[#0B2545]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${loc.isHeadquarters ? 'bg-amber-400' : 'bg-blue-600'}`}></span>
                  {loc.country} ({loc.city})
                </button>
              ))}
            </div>
          </div>

          {/* Location Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="white-card-thick p-5 sm:p-6 rounded-2xl space-y-4 shadow-md bg-white border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-wider block">
                    {selectedLocation.isHeadquarters ? 'Primary Regional Headquarters' : 'Logistics & Supply Hub'}
                  </span>
                  <h3 className="text-xl font-black text-[#0B2545] mt-0.5">
                    {selectedLocation.entityName}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-white flex items-center justify-center font-black text-xs shadow">
                  {selectedLocation.country.substring(0, 2).toUpperCase()}
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                {selectedLocation.description}
              </p>

              <div className="space-y-2 border-t border-slate-200 pt-3 text-xs font-medium">
                <div>
                  <span className="text-slate-500 text-[10px] block font-bold uppercase tracking-wider">Address</span>
                  <span className="font-bold text-[#0B2545] text-xs">{selectedLocation.address}</span>
                </div>

                <div>
                  <span className="text-slate-500 text-[10px] block font-bold uppercase tracking-wider">Direct Phone</span>
                  <span className="font-mono font-bold text-[#0B2545] text-xs">{selectedLocation.phone}</span>
                </div>

                <div>
                  <span className="text-slate-500 text-[10px] block font-bold uppercase tracking-wider">Corporate Email</span>
                  <span className="font-mono font-bold text-[#0B2545] text-xs">{selectedLocation.email}</span>
                </div>
              </div>

              <div className="pt-1.5 border-t border-slate-200">
                <span className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider block">
                  Active Pan-African Delivery Route
                </span>
              </div>
            </div>

            {/* Logistics Callout Card */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
              <h4 className="text-xs font-black text-[#0B2545] uppercase tracking-wider">Cross-Border Logistics Clearance</h4>
              <p className="text-[11px] text-slate-600 font-medium">
                We manage customs clearing, regional warehousing, and direct delivery across African trade corridors.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

