import React from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/mockData';
import { ProductDetailModal } from './ProductDetailModal';

export const Showroom: React.FC = () => {
  const { 
    products, 
    filters, 
    setFilters, 
    resetFilters, 
    selectedProduct, 
    setSelectedProduct,
    setPreviewImageUrl
  } = useApp();

  const filteredProducts = products.filter(product => {
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchMat = product.material.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchMat) return false;
    }

    if (filters.categoryId !== 'all' && product.categoryId !== filters.categoryId) {
      return false;
    }

    if (filters.customization === 'customizable' && !product.isCustomizable) return false;
    if (filters.customization === 'ready-made' && product.isCustomizable) return false;

    if (filters.useCase !== 'all' && !product.useCases.includes(filters.useCase as any)) {
      return false;
    }

    if (filters.brandingMethod !== 'all' && !product.brandingMethods.includes(filters.brandingMethod as any)) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-white pb-20 text-slate-900">
      
      {/* Showroom Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 uppercase tracking-wider">
            CORPORATE BRANDING SHOWROOM
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
            OUR BRANDING <span className="text-gradient-red">SHOWROOM</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-600 text-xs sm:text-sm font-medium">
            Explore our collection of customizable corporate branding and promotional solutions. Select any product to view technical specs and request a quote.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                placeholder="Search polo shirts, drinkware, pens, gift sets, vehicle wraps..."
                className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 shadow-sm text-xs font-medium"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-500 hover:text-red-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Category Cards Grid - Clean Text Only */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
              Browse Categories
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs text-red-600 hover:underline font-bold"
            >
              Show All ({products.length})
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            <button
              onClick={() => setFilters(prev => ({ ...prev, categoryId: 'all' }))}
              className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                filters.categoryId === 'all'
                  ? 'bg-red-600 border-red-600 text-white shadow'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-red-600 hover:text-[#0B2545]'
              }`}
            >
              <span className="text-xs font-black">All Items</span>
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = filters.categoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilters(prev => ({ ...prev, categoryId: cat.id }))}
                  className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-red-600 border-red-600 text-white shadow'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-red-600 hover:text-[#0B2545]'
                  }`}
                >
                  <span className="text-[11px] font-bold leading-tight">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Filters + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar Filters - Icon Free */}
          <div className="lg:col-span-3 space-y-4">
            <div className="white-card-thick p-4 rounded-2xl sticky top-20 space-y-4 bg-white border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-black text-[#0B2545] text-xs tracking-wider uppercase">
                  FILTER CATALOG
                </span>
                <button
                  onClick={resetFilters}
                  className="text-[10px] font-bold text-slate-500 hover:text-red-600 underline"
                >
                  Reset
                </button>
              </div>

              {/* Filter 1: Customization */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  Customization
                </label>
                <div className="space-y-1 text-[11px] font-semibold">
                  {[
                    { id: 'all', label: 'All Products' },
                    { id: 'customizable', label: 'Custom Logo Placement' },
                    { id: 'ready-made', label: 'Ready-made Standard' },
                  ].map((item) => (
                    <label key={item.id} className="flex items-center gap-2 text-slate-700 cursor-pointer hover:text-red-600">
                      <input
                        type="radio"
                        name="customization"
                        checked={filters.customization === item.id}
                        onChange={() => setFilters(prev => ({ ...prev, customization: item.id as any }))}
                        className="accent-red-600"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 2: Use Case */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  Use Case
                </label>
                <select
                  value={filters.useCase}
                  onChange={(e) => setFilters(prev => ({ ...prev, useCase: e.target.value as any }))}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-[#0B2545] focus:outline-none focus:border-red-600"
                >
                  <option value="all">All Use Cases</option>
                  <option value="corporate">Corporate Uniforms & Staff</option>
                  <option value="events">Events & Activations</option>
                  <option value="marketing">Marketing & Campaigns</option>
                  <option value="gifts">Executive Gifts</option>
                </select>
              </div>

              {/* Filter 3: Branding Method */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  Branding Method
                </label>
                <select
                  value={filters.brandingMethod}
                  onChange={(e) => setFilters(prev => ({ ...prev, brandingMethod: e.target.value as any }))}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-[#0B2545] focus:outline-none focus:border-red-600"
                >
                  <option value="all">All Printing & Engraving Methods</option>
                  <option value="embroidery">Embroidery</option>
                  <option value="screen-printing">Screen Printing</option>
                  <option value="heat-transfer">Heat Transfer</option>
                  <option value="laser-engraving">Laser Engraving</option>
                  <option value="embossing">Embossing</option>
                  <option value="full-custom">Full Vehicle / Custom Wrap</option>
                </select>
              </div>

              <div className="bg-red-50 p-2.5 rounded-lg border border-red-200 text-[10px] text-red-900 space-y-0.5">
                <p className="font-extrabold uppercase tracking-wider">Pan-African Supply</p>
                <p className="text-slate-700 font-medium">
                  Official written quotation provided upon review of order quantities and artwork specs.
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid Container - Ultra Clean Cards */}
          <div className="lg:col-span-9">
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-600">
                Showing <strong className="text-[#0B2545] font-black">{filteredProducts.length}</strong> product capabilities
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 white-card-thick rounded-2xl">
                <h4 className="text-base font-black text-[#0B2545]">No matching products found</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Try clearing search filters or choosing a different category.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-3 px-3 py-1.5 bg-red-600 text-white font-bold text-xs rounded-lg hover:bg-red-500 shadow"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="white-card-thick rounded-3xl overflow-hidden group hover:border-red-600 transition-all duration-500 flex flex-col justify-between hover:shadow-2xl bg-white border border-slate-200"
                  >
                    <div>
                      {/* Product Image Banner - Vertical Portrait & Hover Scale */}
                      <div 
                        className="relative h-80 sm:h-96 bg-slate-100 overflow-hidden cursor-pointer border-b border-slate-200"
                        onClick={() => setPreviewImageUrl(product.image)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/service-branding.webp';
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                        />
                        
                        {/* AK GROUP LOGO STICKER EMBLEM STUCK ON THE PRODUCT */}
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl border border-slate-200 shadow-lg flex items-center gap-1.5 z-20 group-hover:scale-105 transition">
                          <img 
                            src="/images/aksanti-logo.png" 
                            alt="AK Logo" 
                            className="h-5 w-auto object-contain" 
                          />
                          <span className="text-[9px] font-black text-[#0B2545] tracking-tight uppercase">AK GROUP</span>
                        </div>
                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          {product.featured && (
                            <span className="px-2.5 py-0.5 rounded text-[9px] font-black bg-amber-400 text-slate-950 shadow">
                              FEATURED
                            </span>
                          )}
                          {product.isNew && (
                            <span className="px-2.5 py-0.5 rounded text-[9px] font-black bg-blue-600 text-white shadow">
                              NEW ITEM
                            </span>
                          )}
                        </div>

                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-mono text-[#0B2545] font-black border border-slate-200 shadow-md">
                          MOQ: {product.minimumQuantity}
                        </div>
                      </div>

                      {/* Content details - Minimal & Clean */}
                      <div className="p-4 space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="uppercase tracking-wider font-extrabold text-red-600 text-[10px]">
                            {product.categoryId.replace('-', ' ')}
                          </span>
                          <span className="text-[10px] font-mono text-slate-600 font-bold">{product.material.split(' ')[0]}</span>
                        </div>

                        <h3 
                          onClick={() => setSelectedProduct(product)}
                          className="text-base font-extrabold text-[#0B2545] group-hover:text-red-600 transition cursor-pointer truncate"
                        >
                          {product.name}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-1 font-medium">
                          {product.description}
                        </p>

                        {/* Colors swatch teaser */}
                        {product.availableColors && (
                          <div className="flex items-center gap-1 pt-1">
                            <span className="text-[10px] text-slate-500 font-mono font-bold">Colors:</span>
                            {product.availableColors.slice(0, 5).map((c: string, i: number) => (
                              <span key={i} style={{ backgroundColor: c }} className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-sm"></span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Actions - Big Action Button */}
                    <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2 bg-slate-50/50">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        AK GROUP
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-4 py-2 rounded-xl bg-[#0B2545] hover:bg-red-600 text-white font-extrabold text-xs transition shadow-sm uppercase tracking-wider"
                      >
                        View Specs &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Render Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

