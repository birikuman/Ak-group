import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';

export const RequestQuote: React.FC = () => {
  const { quoteBasket, submitQuoteRequest, clearQuoteBasket, setActiveTab } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Rwanda',
    city: 'Kigali',
    requiredDate: '2026-10-01',
    deliveryLocation: 'Kigali, Rwanda',
    preferredBrandingMethod: 'embroidery',
    message: '',
  });

  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          setUploadedLogo(evt.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.email) {
      alert('Please fill out your Name, Company, and Email address.');
      return;
    }

    const items = quoteBasket.length > 0 
      ? quoteBasket.map(b => ({
          productId: b.product.id,
          productName: b.product.name,
          quantity: b.quantity,
          color: b.selectedColor,
          brandingMethod: b.selectedBrandingMethod,
        }))
      : [{
          productId: 'prod-polo-01',
          productName: 'General Quotation Request',
          quantity: 100,
          brandingMethod: formData.preferredBrandingMethod,
        }];

    const req = submitQuoteRequest({
      customerName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      requiredDate: formData.requiredDate,
      deliveryLocation: formData.deliveryLocation,
      preferredBrandingMethod: formData.preferredBrandingMethod,
      message: formData.message,
      logoFileUrl: uploadedLogo || undefined,
      items,
    });

    clearQuoteBasket();
    setSubmittedRef(req.referenceNumber);
  };

  return (
    <div className="min-h-screen bg-white pb-24 text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black bg-red-100 text-red-700 border border-red-200 uppercase tracking-wider">
          FAST 24-HOUR QUOTATION TURNAROUND
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B2545] tracking-tight">
          REQUEST A <span className="text-gradient-red">QUOTE</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-medium">
          Fill out your corporate details and project specifications below. Our branding teams in Kigali and Centurion will prepare an official written quotation.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {submittedRef ? (
          <div className="white-card-thick p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl bg-white">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300 font-black text-xl">
              OK
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest block font-black">
                Quotation Request Received
              </span>
              <h2 className="text-3xl font-black text-[#0B2545] mt-1">
                Reference Code: <span className="text-red-600 font-mono">{submittedRef}</span>
              </h2>
            </div>

            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
              Thank you. Your quotation request has been received. Our team will review your requirements and contact you via email or phone within 24 hours.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setSubmittedRef(null)}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2545] font-bold text-sm border border-slate-300 transition uppercase tracking-wider"
              >
                Submit Another Request
              </button>
              <button
                onClick={() => setActiveTab('showroom')}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-lg shadow-red-600/30 transition uppercase tracking-wider"
              >
                Return to Showroom
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="white-card-thick p-6 sm:p-10 rounded-3xl space-y-8 shadow-2xl bg-white">
            
            {/* Basket Items Preview */}
            {quoteBasket.length > 0 && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-300 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-red-600 uppercase tracking-wider">
                    Selected Quotation Basket Items ({quoteBasket.length})
                  </h4>
                  <button
                    type="button"
                    onClick={() => setActiveTab('showroom')}
                    className="text-[11px] text-slate-600 hover:text-red-600 underline font-bold"
                  >
                    Add More Items
                  </button>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {quoteBasket.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-slate-200 text-xs shadow-sm font-medium">
                      <span className="font-bold text-[#0B2545] truncate max-w-xs">{item.product.name}</span>
                      <span className="text-red-600 font-mono font-black">{item.quantity} units</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personal / Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-[#0B2545] border-b border-slate-200 pb-2">
                1. Personal & Company Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jean-Paul Kagame"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Enterprise Group Ltd"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@company.com"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+250 788 000 111 or +27 12 345 6789"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Country *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-bold"
                  >
                    <option value="Rwanda">Rwanda (Kigali)</option>
                    <option value="South Africa">South Africa (Centurion)</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="DR Congo">DR Congo</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Other Africa">Other African Country</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Kigali / Centurion / Nairobi"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-[#0B2545] border-b border-slate-200 pb-2">
                2. Project & Branding Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Preferred Branding Method</label>
                  <select
                    value={formData.preferredBrandingMethod}
                    onChange={(e) => setFormData({ ...formData, preferredBrandingMethod: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-bold"
                  >
                    <option value="embroidery">Embroidery</option>
                    <option value="screen-printing">Screen Printing</option>
                    <option value="heat-transfer">Heat Transfer</option>
                    <option value="laser-engraving">Laser Engraving</option>
                    <option value="embossing">Embossing</option>
                    <option value="full-custom">Full Vehicle / Custom Wrap</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Required Delivery Date</label>
                  <input
                    type="date"
                    value={formData.requiredDate}
                    onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Specific Delivery Address</label>
                <input
                  type="text"
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  placeholder="Street address, building name, or port hub"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                />
              </div>

              {/* Upload Files */}
              <div>
                <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-2">
                  Upload Logo / Design Artwork / Specifications (PNG, SVG, PDF)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*,.pdf,.svg"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3.5 px-4 bg-slate-50 hover:bg-red-50 text-slate-700 border-2 border-dashed border-slate-300 hover:border-red-600 rounded-2xl text-xs font-bold transition uppercase tracking-wider"
                >
                  {uploadedLogo ? 'Artwork File Uploaded! Click to Replace' : 'Click to Upload Company Logo / Artwork File'}
                </button>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Message / Project Details</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements, quantities, Pantone colors, or custom preferences..."
                  className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 placeholder-slate-400 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-base shadow-xl shadow-red-600/30 flex items-center justify-center uppercase tracking-wider"
            >
              SUBMIT QUOTATION REQUEST
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

