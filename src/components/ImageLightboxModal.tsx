import React from 'react';
import { useApp } from '../context/AppContext';

export const ImageLightboxModal: React.FC = () => {
  const { previewImageUrl, setPreviewImageUrl } = useApp();

  if (!previewImageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={() => setPreviewImageUrl(null)}
    >
      <div 
        className="relative max-w-4xl max-h-[92vh] flex flex-col items-center justify-center space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setPreviewImageUrl(null)}
          className="absolute -top-12 right-0 text-white hover:text-red-500 font-extrabold text-sm bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-wider backdrop-blur-md"
        >
          CLOSE [X]
        </button>

        <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl bg-slate-900 group">
          <img
            src={previewImageUrl}
            alt="Full-Screen Vertical Preview"
            className="max-h-[82vh] w-auto object-contain rounded-2xl transition-transform duration-700 hover:scale-110"
          />
        </div>

        <span className="text-white/80 text-xs font-mono font-bold uppercase tracking-wider">
          Click image or press CLOSE to exit full-screen view
        </span>
      </div>
    </div>
  );
};
