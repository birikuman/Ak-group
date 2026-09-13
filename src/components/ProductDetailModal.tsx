import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import type { Product, BrandingMethodId } from '../types';
import { 
  X, 
  Check, 
  Plus, 
  Minus
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { 
    customLogoUrl, 
    setCustomLogoUrl, 
    logoScale, 
    setLogoScale, 
    logoPos, 
    setLogoPos,
    setActiveTab,
    submitQuoteRequest
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0] || '#0B2545');
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes ? product.availableSizes[0] : '');
  const [selectedMethod, setSelectedMethod] = useState<BrandingMethodId>(product.brandingMethods[0] || 'embroidery');
  const [quantity, setQuantity] = useState<number>(product.minimumQuantity || 50);
  const [notes, setNotes] = useState<string>('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const images = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.image];

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCustomLogoUrl(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDirectQuoteRequest = () => {
    submitQuoteRequest({
      customerName: 'Showroom Inquirer',
      companyName: 'Corporate Client',
      email: 'client@company.com',
      phone: 'Pending Details',
      country: 'Rwanda / South Africa',
      city: 'Kigali / Centurion',
      requiredDate: '2026-10-01',
      deliveryLocation: 'Regional Delivery',
      preferredBrandingMethod: selectedMethod,
      message: `Direct inquiry for product: ${product.name}. Selected Color: ${selectedColor}, Size: ${selectedSize || 'N/A'}, Target Qty: ${quantity}. Notes: ${notes}`,
      logoFileUrl: customLogoUrl || undefined,
      items: [{
        productId: product.id,
        productName: product.name,
        quantity,
        color: selectedColor,
        brandingMethod: selectedMethod
      }]
    });

    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      onClose();
      setActiveTab('quote');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden my-6 text-slate-900">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-black bg-red-100 text-red-700 border border-red-200 uppercase tracking-wider">
              {product.categoryId.replace('-', ' ')}
            </span>
            <span className="text-xs text-slate-500 font-mono font-bold">ID: {product.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          
          {/* Left Column: Product Visual & Logo Placement Canvas */}
          <div className="lg:col-span-6 space-y-3">
            
            {/* Main Interactive Product Image Container */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-300 shadow-inner flex items-center justify-center group">
              
              <img
                src={images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition duration-300"
              />

              {/* OVERLAY CUSTOM LOGO PREVIEW */}
              {customLogoUrl && (
                <div 
                  className="absolute pointer-events-none transition-all duration-150 drop-shadow-xl flex items-center justify-center"
                  style={{
                    left: `${logoPos.x}%`,
                    top: `${logoPos.y}%`,
                    transform: `translate(-50%, -50%) scale(${logoScale})`,
                    width: '35%',
                    height: '35%'
                  }}
                >
                  <img
                    src={customLogoUrl}
                    alt="Custom Logo Preview"
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                  />
                </div>
              )}

              {/* DEFAULT AK GROUP LOGO STAMP EMBLEM */}
              {!customLogoUrl && (
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-xl flex items-center gap-2 z-20">
                  <img src="/images/aksanti-logo.png" alt="AK Logo Emblem" className="h-6 w-auto object-contain" />
                  <span className="text-[10px] font-black text-[#0B2545] tracking-tight uppercase">AK GROUP BRANDED</span>
                </div>
              )}

              {/* Live Preview Badge */}
              <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] text-red-600 font-bold shadow-sm uppercase tracking-wider">
                {customLogoUrl ? 'Logo Placement Active' : 'Customization Spec Visualizer'}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition ${
                      activeImageIndex === idx ? 'border-red-600 ring-2 ring-red-600/30' : 'border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* LOGO VISUALIZER CONTROL BOARD */}
            <div className="p-3 rounded-xl border border-slate-200 space-y-2 bg-slate-50">
              <div className="flex items-center justify-between">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-[#0B2545]">
                  Logo Placement Configurator
                </h4>
                {customLogoUrl && (
                  <button
                    onClick={() => setCustomLogoUrl(null)}
                    className="text-[10px] text-red-600 hover:underline font-bold uppercase tracking-wider"
                  >
                    Clear Logo
                  </button>
                )}
              </div>

              {/* Upload Button */}
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleLogoUpload}
                  accept="image/png, image/jpeg, image/svg+xml"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2 px-3 bg-white hover:bg-slate-100 text-[#0B2545] border border-slate-300 rounded-lg text-xs font-bold transition shadow-sm uppercase tracking-wider text-center"
                >
                  {customLogoUrl ? 'Change Uploaded Logo (PNG/SVG)' : 'Upload Company Logo (PNG / SVG / JPG)'}
                </button>
              </div>

              {/* Position & Scale Controls when logo uploaded */}
              {customLogoUrl && (
                <div className="space-y-1.5 pt-1 border-t border-slate-200 text-[11px] font-semibold">
                  <div>
                    <div className="flex justify-between text-slate-700 mb-0.5">
                      <span>Logo Scale:</span>
                      <span className="font-mono text-red-600 font-bold">{(logoScale * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.3"
                      max="1.5"
                      step="0.05"
                      value={logoScale}
                      onChange={(e) => setLogoScale(parseFloat(e.target.value))}
                      className="w-full accent-red-600 cursor-pointer h-1.5"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between text-slate-700 mb-0.5">
                        <span>X Offset:</span>
                        <span className="font-mono text-red-600 font-bold">{logoPos.x}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="80"
                        value={logoPos.x}
                        onChange={(e) => setLogoPos({ ...logoPos, x: parseInt(e.target.value) })}
                        className="w-full accent-red-600 cursor-pointer h-1.5"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-700 mb-0.5">
                        <span>Y Offset:</span>
                        <span className="font-mono text-red-600 font-bold">{logoPos.y}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="80"
                        value={logoPos.y}
                        onChange={(e) => setLogoPos({ ...logoPos, y: parseInt(e.target.value) })}
                        className="w-full accent-red-600 cursor-pointer h-1.5"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Product Specs & Direct Inquiry */}
          <div className="lg:col-span-6 space-y-4">
            
            <div>
              <span className="text-[11px] text-slate-500 font-semibold block">Pan-African Corporate Quality Standard</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2545] leading-tight">
                {product.name}
              </h2>
              <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 bg-red-50 text-red-700 rounded border border-red-200">
                <span>{product.priceType}</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              {product.longDescription || product.description}
            </p>

            {/* Customization Options */}
            <div className="space-y-3 border-t border-slate-200 pt-3 text-xs">
              
              {/* Branding Method Selection */}
              <div>
                <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1.5">
                  Available Branding Methods
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {product.brandingMethods.map((method) => (
                    <button
                      key={method}
                      onClick={() => setSelectedMethod(method)}
                      className={`p-2 rounded-lg text-xs font-bold border transition text-center capitalize ${
                        selectedMethod === method
                          ? 'bg-red-600 text-white border-red-600 shadow'
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {method.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Swatches */}
              {product.availableColors && product.availableColors.length > 0 && (
                <div>
                  <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1.5">
                    Product Color Swatches
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableColors.map((colorHex, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(colorHex)}
                        style={{ backgroundColor: colorHex }}
                        className={`w-7 h-7 rounded-full border-2 transition transform hover:scale-110 flex items-center justify-center ${
                          selectedColor === colorHex ? 'border-[#0B2545] ring-2 ring-red-400 scale-110 shadow' : 'border-slate-300'
                        }`}
                        title={colorHex}
                      >
                        {selectedColor === colorHex && (
                          <Check className={`w-3.5 h-3.5 ${colorHex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Options */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div>
                  <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1.5">
                    Available Sizes
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold border transition ${
                          selectedSize === size
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Metric */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-black text-[#0B2545] uppercase tracking-wider">
                    Project Volume (MOQ Minimum: {product.minimumQuantity})
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-slate-100 border border-slate-300 rounded-lg overflow-hidden p-0.5">
                    <button
                      onClick={() => setQuantity(Math.max(product.minimumQuantity, quantity - 10))}
                      className="p-1.5 text-slate-600 hover:text-slate-900 transition hover:bg-slate-200 rounded"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(product.minimumQuantity, parseInt(e.target.value) || product.minimumQuantity))}
                      className="w-16 bg-transparent text-center text-[#0B2545] font-black text-xs focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 10)}
                      className="p-1.5 text-slate-600 hover:text-slate-900 transition hover:bg-slate-200 rounded"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Est. Production: <span className="text-[#0B2545] font-bold">{product.estimatedProductionDays} working days</span>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">
                  Project Notes / Custom Artwork Specs
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention delivery location, Pantone color code, or placement specs..."
                  className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 font-medium"
                />
              </div>

            </div>



          </div>

        </div>

      </div>
    </div>
  );
};

