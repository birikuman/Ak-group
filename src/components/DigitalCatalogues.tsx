import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Download, Search, X, ChevronLeft, ChevronRight, 
  CheckCircle, ArrowRight, Layers, ZoomIn, Play, Pause, Maximize2, Minimize2, Volume2, VolumeX, Eye, EyeOff, BookOpen
} from 'lucide-react';

export interface CatalogueItem {
  id: string;
  title: string;
  brandTag: string;
  category: string;
  coverImage: string;
  pdfUrl?: string;
  pagesCount: number;
  year: string;
  pages: string[];
  productType: 'cup' | 'diary' | 'bottle' | 'bag' | 'apparel' | 'giftset';
  stampedLogoText: string;
}

const buildPagesList = (folder: string, count: number, fallbackImages: string[]) => {
  const pages: string[] = [];
  for (let i = 1; i <= count; i++) {
    pages.push(`/images/catalogues/${folder}/page_${i}.jpg`);
  }
  return pages.length > 0 ? pages : fallbackImages;
};

export const CATALOGUES_DATA: CatalogueItem[] = [
  {
    id: 'cat-kooshty-2026-2027',
    title: 'Kooshty Drinkware & Lifestyle Catalogue 2026-2027',
    brandTag: 'Kooshty Original',
    category: 'Drinkware & Lifestyle',
    coverImage: '/images/catalogues/kooshty/page_1.jpg',
    pdfUrl: '',
    pagesCount: 20,
    year: '2026-2027',
    productType: 'cup',
    stampedLogoText: 'AK GROUP MUG & CUP BRANDING',
    pages: buildPagesList('kooshty', 20, ['/images/Brand-Web-Banners-2026-Kooshty.jpg'])
  },
  {
    id: 'cat-diaries-2027',
    title: 'Executive Diaries & Planners Catalogue 2027',
    brandTag: 'Executive Collection',
    category: 'Diaries & Planners',
    coverImage: '/images/catalogues/diaries/page_1.jpg',
    pdfUrl: '',
    pagesCount: 20,
    year: '2027',
    productType: 'diary',
    stampedLogoText: 'AK GROUP GOLD FOIL STAMP',
    pages: buildPagesList('diaries', 20, ['/images/Brand-Web Banners-2026-Diaries.jpg'])
  },
  {
    id: 'cat-okiyo-2026-2027',
    title: 'OKIYO Eco-Friendly Corporate Gifts Catalogue 2026-2027',
    brandTag: 'OKIYO Eco Line',
    category: 'Eco Gifts',
    coverImage: '/images/catalogues/okiyo/page_1.jpg',
    pdfUrl: '',
    pagesCount: 15,
    year: '2026-2027',
    productType: 'bottle',
    stampedLogoText: 'AK GROUP WOOD & BAMBOO LASER MARK',
    pages: buildPagesList('okiyo', 15, ['/images/Brand-Web-Banners-2026-Okiyo.jpg'])
  },
  {
    id: 'cat-andy-cartwright',
    title: 'Andy Cartwright Designer Executive Gifts',
    brandTag: 'Andy Cartwright',
    category: 'Designer Gifts',
    coverImage: '/images/Amrod-Digital-Catalogue-Web-Page 2026-ANDY CARTWRIGHT.webp',
    pagesCount: 12,
    year: '2026',
    productType: 'giftset',
    stampedLogoText: 'AK GROUP C-SUITE EMBLEM',
    pages: [
      '/images/Amrod-Digital-Catalogue-Web-Page 2026-ANDY CARTWRIGHT.webp',
      '/images/product-giftset-1.jpg',
      '/images/product-pen-1.jpg',
      '/images/category-gift-sets.jpg'
    ]
  },
  {
    id: 'cat-serendio',
    title: 'Serendio VIP C-Suite Luxury Gifts',
    brandTag: 'Serendio VIP',
    category: 'VIP Luxury Gifts',
    coverImage: '/images/Amrod-Digital-Catalogue-Web-Page 2026-SERENDIPIO.webp',
    pagesCount: 16,
    year: '2026',
    productType: 'giftset',
    stampedLogoText: 'AK GROUP LUXURY FOIL',
    pages: [
      '/images/Amrod-Digital-Catalogue-Web-Page 2026-SERENDIPIO.webp',
      '/images/product-giftset-1.jpg',
      '/images/product-flask-1.jpg'
    ]
  },
  {
    id: 'cat-swiss-cougar',
    title: 'Swiss Cougar Smart Tech & Audio Gifts',
    brandTag: 'Swiss Cougar',
    category: 'Smart Tech Gifts',
    coverImage: '/images/AmrodDigitalCatalogueWebPage2026-SWISSCOUGAR.webp',
    pagesCount: 14,
    year: '2026',
    productType: 'bottle',
    stampedLogoText: 'AK GROUP SMART TECH LOGO',
    pages: [
      '/images/AmrodDigitalCatalogueWebPage2026-SWISSCOUGAR.webp',
      '/images/product-flask-2.jpg'
    ]
  },
  {
    id: 'cat-hoppla',
    title: 'Hoppla Custom Branded Bags & Soft Goods',
    brandTag: 'Hoppla Bags',
    category: 'Bags & Soft Goods',
    coverImage: '/images/Amrod-Digital-Catalogue-Web-Page-2026-HOPPLA.webp',
    pagesCount: 18,
    year: '2026',
    productType: 'bag',
    stampedLogoText: 'AK GROUP EMBROIDERED PATCH',
    pages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-HOPPLA.webp',
      '/images/product-backpack-1.jpg',
      '/images/category-bags.jpg'
    ]
  },
  {
    id: 'cat-golf-2026',
    title: 'The 2026 Golf Apparel & Accessories',
    brandTag: 'Golf Collection',
    category: 'Apparel & Golf',
    coverImage: '/images/Amrod-Digital-Catalogue-Web-Page-2026-THE-GOLF-COLLECTION.webp',
    pagesCount: 16,
    year: '2026',
    productType: 'apparel',
    stampedLogoText: 'AK GROUP GOLF EMBROIDERY',
    pages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-THE-GOLF-COLLECTION.webp',
      '/images/product-polo-1.jpg',
      '/images/product-polo-2.jpg',
      '/images/product-cap-1.jpg'
    ]
  },
  {
    id: 'cat-drinkware-2026',
    title: 'Insulated Drinkware & Vacuum Flasks',
    brandTag: 'Drinkware Line',
    category: 'Drinkware',
    coverImage: '/images/Amrod-Digital-Catalogue-Web-Page-2026-DRINKWARE.webp',
    pagesCount: 20,
    year: '2026',
    productType: 'cup',
    stampedLogoText: 'AK GROUP LASER ENGRAVED CUP',
    pages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-DRINKWARE.webp',
      '/images/product-flask-1.jpg',
      '/images/product-flask-2.jpg',
      '/images/category-drinkware.jpg'
    ]
  },
  {
    id: 'cat-custom-packaging',
    title: 'Bespoke Presentation Boxes & Packaging',
    brandTag: 'Custom Packaging',
    category: 'Packaging',
    coverImage: '/images/Amrod-Digital-Catalogue-Web-Page-2026-CUSTOM-PACKAGING.webp',
    pagesCount: 10,
    year: '2026',
    productType: 'giftset',
    stampedLogoText: 'AK GROUP PACKAGING SEAL',
    pages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-CUSTOM-PACKAGING.webp'
    ]
  }
];

export const DigitalCatalogues: React.FC = () => {
  const { setActiveTab } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Pure Page Viewer State (Only Pages Displayed)
  const [activeFlipbook, setActiveFlipbook] = useState<CatalogueItem | null>(CATALOGUES_DATA[0]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(7); // Page 8 (Index 7)
  const [isDoublePage, setIsDoublePage] = useState<boolean>(false); // Single Page Mode for pure large view
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showLogoOverlay, setShowLogoOverlay] = useState<boolean>(true);
  const [hideAllUi, setHideAllUi] = useState<boolean>(true); // Pure Page Cinema View (All UI Hidden)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [downloadSuccessMsg, setDownloadSuccessMsg] = useState<string | null>(null);

  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const categoriesList = ['all', ...Array.from(new Set(CATALOGUES_DATA.map(c => c.category)))];

  const filteredCatalogues = CATALOGUES_DATA.filter(cat => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = cat.title.toLowerCase().includes(q);
      const matchBrand = cat.brandTag.toLowerCase().includes(q);
      if (!matchTitle && !matchBrand) return false;
    }
    if (selectedCategory !== 'all' && cat.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  // Synthesize realistic paper page turn sound with Web Audio API
  const playPageFlipSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const duration = 0.18;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(250, ctx.currentTime + duration);
      filter.Q.setValueAtTime(2.0, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      console.warn('Audio play error', e);
    }
  };

  const handleOpenFlipbook = (cat: CatalogueItem, pageIdx = 0) => {
    setActiveFlipbook(cat);
    setCurrentPageIndex(pageIdx);
    setZoomLevel(1);
    setIsAutoplay(false);
    setHideAllUi(true); // Hide all UI elements when opening
    playPageFlipSound();

    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    }
  };

  const handleDownloadPdf = (cat: CatalogueItem) => {
    const targetUrl = cat.pdfUrl || cat.coverImage;
    const a = document.createElement('a');
    a.href = targetUrl;
    a.download = `${cat.title}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setDownloadSuccessMsg(`Downloading "${cat.title}"...`);
    setTimeout(() => setDownloadSuccessMsg(null), 3500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Autoplay Timer Effect
  useEffect(() => {
    if (!isAutoplay || !activeFlipbook) return;
    const timer = setInterval(() => {
      setCurrentPageIndex(prev => {
        const step = isDoublePage && prev > 0 ? 2 : 1;
        if (prev + step >= activeFlipbook.pages.length) {
          setIsAutoplay(false);
          return prev;
        }
        triggerFlipAnimation('next');
        return prev + step;
      });
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoplay, activeFlipbook, isDoublePage]);

  const triggerFlipAnimation = (dir: 'next' | 'prev') => {
    setFlipDirection(dir);
    playPageFlipSound();
    setTimeout(() => setFlipDirection(null), 350);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    if (!activeFlipbook) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goPrevPage();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'h' || e.key === 'H') {
        setHideAllUi(prev => !prev);
      } else if (e.key === 'Escape' && !document.fullscreenElement) {
        setActiveFlipbook(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeFlipbook, currentPageIndex, isDoublePage]);

  // Page Controls
  const totalPages = activeFlipbook ? activeFlipbook.pages.length : 0;
  const goNextPage = () => {
    if (!activeFlipbook || currentPageIndex >= totalPages - 1) return;
    const step = (isDoublePage && currentPageIndex > 0) ? 2 : 1;
    triggerFlipAnimation('next');
    setCurrentPageIndex(prev => Math.min(totalPages - 1, prev + step));
  };
  const goPrevPage = () => {
    if (!activeFlipbook || currentPageIndex <= 0) return;
    const step = (isDoublePage && currentPageIndex > 1) ? 2 : 1;
    triggerFlipAnimation('prev');
    setCurrentPageIndex(prev => Math.max(0, prev - step));
  };

  // Determine pages for spread view
  const getSpreadPages = () => {
    if (!activeFlipbook) return { left: null, right: null };
    if (!isDoublePage || currentPageIndex === 0) {
      return { left: activeFlipbook.pages[currentPageIndex], right: null };
    }
    const leftIdx = currentPageIndex % 2 === 1 ? currentPageIndex : currentPageIndex - 1;
    const rightIdx = leftIdx + 1;
    return {
      left: activeFlipbook.pages[leftIdx] || null,
      right: activeFlipbook.pages[rightIdx] || null
    };
  };

  const currentSpread = getSpreadPages();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white relative">
      
      {/* DOWNLOAD TOAST */}
      {downloadSuccessMsg && (
        <div className="fixed top-6 right-6 z-[100] bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-400/50 animate-bounce">
          <CheckCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-black tracking-wide">{downloadSuccessMsg}</span>
        </div>
      )}

      {/* PURE PAGE CINEMA VIEWER (ONLY CATALOGUE PAGES DISPLAYED - NO EXTRA DISTRACTIONS) */}
      {activeFlipbook ? (
        <div 
          ref={viewerContainerRef}
          className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-0 text-white overflow-hidden select-none"
        >
          
          {/* FLOATING TOP DISCREET CONTROLS (AUTO-HIDEABLE) */}
          <div className={`absolute top-4 inset-x-4 z-50 flex items-center justify-between transition-opacity duration-300 pointer-events-none ${
            hideAllUi ? 'opacity-0 hover:opacity-100' : 'opacity-100'
          }`}>
            
            {/* Left Brand Badge */}
            <div className="pointer-events-auto flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-2xl">
              <img src="/images/aksanti-logo.png" alt="AK Logo" className="h-6 w-auto object-contain" />
              <span className="text-xs font-black text-white uppercase tracking-wider">
                {activeFlipbook.brandTag}
              </span>
            </div>

            {/* Right Control Actions */}
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                onClick={() => setHideAllUi(!hideAllUi)}
                className="px-3.5 py-2 rounded-2xl bg-black/80 hover:bg-slate-800 text-white border border-white/20 text-xs font-black uppercase tracking-wider backdrop-blur-md transition flex items-center gap-1.5 shadow-2xl"
                title="Toggle UI Controls"
              >
                {hideAllUi ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-amber-400" />}
                <span>{hideAllUi ? 'SHOW UI' : 'HIDE UI'}</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2.5 rounded-2xl bg-black/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md transition shadow-2xl"
                title="Toggle Fullscreen Mode"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleDownloadPdf(activeFlipbook)}
                className="p-2.5 rounded-2xl bg-black/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md transition shadow-2xl"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveFlipbook(null)}
                className="p-2.5 rounded-2xl bg-black/80 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md transition shadow-2xl"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* PURE IMAGE CANVAS (ONLY THE PAGE PICTURE DISPLAYED FULLSCREEN) */}
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden select-none bg-black">
            
            {/* Left Page Flip Touch Hotspot */}
            <button
              disabled={currentPageIndex === 0}
              onClick={goPrevPage}
              className={`absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-40 flex items-center justify-start pl-4 group transition-opacity ${
                currentPageIndex === 0 ? 'opacity-0 cursor-default' : 'opacity-100'
              }`}
              title="Previous Page"
            >
              <div className="p-4 rounded-full bg-black/70 group-hover:bg-red-600 text-white backdrop-blur-md transition border border-white/20 shadow-2xl group-hover:scale-110">
                <ChevronLeft className="w-8 h-8" />
              </div>
            </button>

            {/* THE CATALOGUE PAGE IMAGE (PURE FULLSCREEN DISPLAY) */}
            <div 
              className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${
                flipDirection === 'next' ? 'animate-flip-next' : flipDirection === 'prev' ? 'animate-flip-prev' : ''
              }`}
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {isDoublePage && currentSpread.right !== null && currentSpread.left ? (
                /* 2-Page Spread View */
                <div className="flex items-center justify-center h-full w-full max-w-7xl relative shadow-2xl">
                  <div className="relative h-full w-1/2 flex items-center justify-end overflow-hidden">
                    <img
                      src={currentSpread.left}
                      alt="Left Page"
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="relative h-full w-1/2 flex items-center justify-start overflow-hidden">
                    <img
                      src={currentSpread.right}
                      alt="Right Page"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ) : (
                /* PURE SINGLE PAGE DISPLAY (ONLY PAGE PICTURE VISIBLE) */
                <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={currentSpread.right || currentSpread.left || activeFlipbook.coverImage}
                    alt={`Page ${currentPageIndex + 1}`}
                    className="max-h-full max-w-full w-auto h-auto object-contain shadow-[0_0_100px_rgba(0,0,0,0.9)] rounded-lg transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = activeFlipbook.coverImage;
                    }}
                  />

                  {/* CLEAN ORIGINAL CATALOGUE PAGE DISPLAY (NO ARTIFICIAL OVERLAY LOGOS) */}
                </div>
              )}
            </div>

            {/* Right Page Flip Touch Hotspot */}
            <button
              disabled={currentPageIndex >= totalPages - 1}
              onClick={goNextPage}
              className={`absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-40 flex items-center justify-end pr-4 group transition-opacity ${
                currentPageIndex >= totalPages - 1 ? 'opacity-0 cursor-default' : 'opacity-100'
              }`}
              title="Next Page"
            >
              <div className="p-4 rounded-full bg-black/70 group-hover:bg-red-600 text-white backdrop-blur-md transition border border-white/20 shadow-2xl group-hover:scale-110">
                <ChevronRight className="w-8 h-8" />
              </div>
            </button>

          </div>

          {/* FLOATING BOTTOM DISCREET PAGE BADGE & TOOLBAR */}
          <div className={`absolute bottom-4 inset-x-0 z-50 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
            hideAllUi ? 'opacity-0 hover:opacity-100' : 'opacity-100'
          }`}>
            <div className="pointer-events-auto flex items-center gap-3 bg-black/85 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full shadow-2xl">
              
              <button
                disabled={currentPageIndex === 0}
                onClick={goPrevPage}
                className="text-slate-300 hover:text-white disabled:opacity-30 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-black text-white tracking-widest uppercase">
                PAGE <span className="text-red-500">{currentPageIndex + 1}</span> / {totalPages}
              </span>

              <button
                disabled={currentPageIndex >= totalPages - 1}
                onClick={goNextPage}
                className="text-slate-300 hover:text-white disabled:opacity-30 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-slate-700 mx-1" />

              <button
                onClick={() => setIsDoublePage(!isDoublePage)}
                className={`p-1.5 rounded-lg text-xs font-bold transition ${
                  isDoublePage ? 'text-red-400' : 'text-slate-400 hover:text-white'
                }`}
                title="Toggle 2-Page Spread"
              >
                <Layers className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-slate-400 hover:text-emerald-400 transition"
                title="Toggle Sound"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              </button>

              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`p-1.5 rounded-lg transition ${
                  isAutoplay ? 'text-emerald-400 animate-pulse' : 'text-slate-400 hover:text-white'
                }`}
                title="Toggle Autoplay"
              >
                {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setZoomLevel(prev => (prev >= 1.75 ? 1 : prev + 0.25))}
                className="text-slate-400 hover:text-white transition text-xs font-bold flex items-center gap-1"
                title="Zoom Page"
              >
                <ZoomIn className="w-4 h-4" />
                <span>{Math.round(zoomLevel * 100)}%</span>
              </button>

            </div>
          </div>

        </div>
      ) : (
        /* GALLERY VIEW WHEN VIEWER IS MINIMIZED */
        <div className="pb-16">
          
          {/* Header Banner */}
          <div className="bg-white border-b border-slate-200/80 py-8 px-4 sm:px-6 lg:px-8 text-center space-y-3 shadow-xs">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B2545] tracking-wide uppercase">
              SELECT A BRAND <span className="text-red-600">CATALOGUE</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium max-w-md mx-auto">
              Explore our official digital catalog publications with interactive page navigation.
            </p>

            <button
              onClick={() => handleOpenFlipbook(CATALOGUES_DATA[0], 7)}
              className="px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-red-600 text-white font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 mx-auto transition"
            >
              <BookOpen className="w-4 h-4" />
              OPEN KOOSHTY CATALOGUE (PURE PAGE VIEW)
            </button>
          </div>

          {/* Grid of Catalogues */}
          <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCatalogues.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleOpenFlipbook(cat)}
                  className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-red-500 hover:shadow-xl transition cursor-pointer group shadow-sm"
                >
                  <div className="relative h-80 sm:h-96 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={cat.coverImage}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-4 flex items-center justify-between bg-white">
                    <div>
                      <h3 className="font-bold text-[#0B2545] text-xs group-hover:text-red-600 transition">{cat.title}</h3>
                      <span className="text-[10px] text-red-600 font-semibold tracking-wider uppercase">{cat.brandTag}</span>
                    </div>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#0B2545] group-hover:bg-red-600 text-white font-semibold text-[10px] uppercase transition shadow-sm">
                      READ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
