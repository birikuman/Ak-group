import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CASE_STUDIES } from '../data/mockData';

const CRAFT_STORIES = [
  {
    id: 'design-studio',
    tag: 'Design Studio',
    title: 'Artwork & Vector Engineering',
    caption: 'Our designers drafting Pantone color proofs and CAD vector cut paths before production.',
    image: '/images/atwork-design-studio.jpg'
  },
  {
    id: 'textile-printing',
    tag: 'Screenprint Press',
    title: 'Silk-Screen & Textile Printing',
    caption: 'Hands-on screenprint operators applying multi-color inks on custom corporate apparel.',
    image: '/images/category-corporate-branding.jpg'
  },
  {
    id: 'embroidery-craft',
    tag: 'Embroidery Station',
    title: 'Precision 3D Logo Embroidery',
    caption: 'Multi-head Japanese embroidery machinery stitching raised 3D logos onto cotton polo shirts.',
    image: '/images/atwork-embroidery-craft.jpg'
  },
  {
    id: 'workshop-assembly',
    tag: 'Workshop & QC',
    title: 'Hand Assembly & QC Inspection',
    caption: 'Thorough quality check and hand packaging of custom executive gift sets before dispatch.',
    image: '/images/atwork-workshop.jpg'
  },
  {
    id: 'eco-crafting',
    tag: 'Eco Workshop',
    title: 'Bamboo & Wood Laser Crafting',
    caption: 'Precision laser etching glowing corporate marks onto sustainable bamboo and wood gifts.',
    image: '/images/catalogues/okiyo/page_5.jpg'
  },
  {
    id: 'drinkware-finishing',
    tag: 'Drinkware Station',
    title: 'Insulated Drinkware Finishing',
    caption: 'Hand finishing and pad-printing double-wall vacuum flasks and ceramic mugs.',
    image: '/images/catalogues/kooshty/page_4.jpg'
  }
];

export const AtWork: React.FC = () => {
  const { setPreviewImageUrl } = useApp();

  return (
    <div className="min-h-screen bg-white pb-20 text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider">
          BEHIND THE SCENES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B2545] tracking-tight">
          AK GROUP <span className="text-gradient-red">AT WORK</span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-600 text-xs sm:text-sm font-medium">
          Real photography from our workshop: vector design, silk-screen printing, precision embroidery, and hand finishing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        
        {/* Photo Story Grid - 100% Real Authentic Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CRAFT_STORIES.map((story) => (
            <div 
              key={story.id}
              className="white-card-thick rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200 flex flex-col justify-between group hover:border-red-600 transition duration-500"
            >
              {/* Big Real Picture Section */}
              <div 
                className="relative h-72 sm:h-80 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setPreviewImageUrl(story.image)}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow">
                  {story.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow backdrop-blur-sm">
                  CLICK TO FULLSCREEN
                </div>
              </div>

              {/* Short Humanized Description */}
              <div className="p-5 space-y-1 bg-white border-t border-slate-100">
                <h3 className="font-extrabold text-[#0B2545] text-base leading-tight">{story.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{story.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study Visual Highlight */}
        <div className="white-card-thick p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest block">WORKSHOP CASE STUDY</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] mt-1">{CASE_STUDIES[0].title}</h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{CASE_STUDIES[0].location} • {CASE_STUDIES[0].year}</p>
            </div>
            <div className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs shadow uppercase tracking-wider">
              {CASE_STUDIES[0].results}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-md border border-slate-300 bg-white"
              onClick={() => setPreviewImageUrl(CASE_STUDIES[0].beforeImage || CASE_STUDIES[0].mainImage)}
            >
              <img 
                src={CASE_STUDIES[0].beforeImage || CASE_STUDIES[0].mainImage} 
                alt="Before Branding" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-[#0B2545] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                BEFORE WRAPPING
              </div>
            </div>

            <div 
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-md border border-slate-300 bg-white"
              onClick={() => setPreviewImageUrl(CASE_STUDIES[0].finishedImage || CASE_STUDIES[0].mainImage)}
            >
              <img 
                src={CASE_STUDIES[0].finishedImage || CASE_STUDIES[0].mainImage} 
                alt="Finished 3M Wrap" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                COMPLETED 3M VINYL WRAP
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
