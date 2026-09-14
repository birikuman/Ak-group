import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';

const BRAND_NEEDS = [
  { id: 'apparel', title: 'Corporate Apparel', desc: 'Polo shirts, jackets, caps & workwear uniforms.' },
  { id: 'gifts', title: 'Promotional Gifts', desc: 'Thermal mugs, notebooks, executive gift boxes.' },
  { id: 'office', title: 'Office Branding', desc: '3D acrylic wall signs, directional graphics.' },
  { id: 'event', title: 'Event Branding', desc: 'Pop-up canopy tents, backdrops & lanyards.' },
  { id: 'vehicle', title: 'Vehicle Fleet Wrapping', desc: 'Full/partial cast vinyl wraps for vans & cars.' },
  { id: 'campaign', title: 'Full Marketing Campaign', desc: 'Complete multi-product corporate promotional rollout.' },
];

export const BuildYourBrand: React.FC = () => {
  const { submitQuoteRequest, setActiveTab } = useApp();

  const [step, setStep] = useState(1);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(['apparel']);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(['prod-polo-01', 'prod-flask-02']);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'prod-polo-01': 100,
    'prod-flask-02': 100,
  });
  
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Rwanda',
    city: 'Kigali',
    requiredDate: '2026-10-01',
    deliveryLocation: 'Kigali Free Zone, Rwanda',
    brandingMethod: 'embroidery',
    message: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const toggleNeed = (id: string) => {
    setSelectedNeeds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleProduct = (id: string) => {
    setSelectedProductIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });

    if (!quantities[id]) {
      setQuantities(prev => ({ ...prev, [id]: 100 }));
    }
  };

  const handleQtyChange = (id: string, val: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(10, val) }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          setLogoPreview(evt.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.email) {
      alert('Please fill in your name, company, and email address.');
      return;
    }

    const items = selectedProductIds.map(pId => {
      const p = PRODUCTS.find(prod => prod.id === pId);
      return {
        productId: pId,
        productName: p ? p.name : pId,
        quantity: quantities[pId] || 100,
        brandingMethod: formData.brandingMethod,
      };
    });

    const newReq = submitQuoteRequest({
      customerName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      requiredDate: formData.requiredDate,
      deliveryLocation: formData.deliveryLocation,
      preferredBrandingMethod: formData.brandingMethod,
      message: `[PROJECT WIZARD] Requirements: ${selectedNeeds.join(', ')}. ${formData.message}`,
      logoFileUrl: logoPreview || undefined,
      items,
    });

    setSubmittedRef(newReq.referenceNumber);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
            PROJECT CONFIGURATOR
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
            BUILD YOUR <span className="text-gradient-red">BRAND</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto font-medium">
            Select your customized promotional items, upload your artwork, and request an official corporate quotation.
          </p>
        </div>

        {/* Step Indicator Bar */}
        {!submittedRef && (
          <div className="white-card-thick p-3 rounded-xl mb-6 flex justify-between items-center text-xs font-bold text-slate-600 overflow-x-auto gap-2">
            {[
              { num: 1, label: '1. Requirements' },
              { num: 2, label: '2. Products' },
              { num: 3, label: '3. Artwork' },
              { num: 4, label: '4. Project Details' },
              { num: 5, label: '5. Submit Inquiry' },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => s.num < step && setStep(s.num)}
                className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 shrink-0 ${
                  step === s.num
                    ? 'bg-red-600 text-white shadow font-black'
                    : step > s.num
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold'
                      : 'bg-slate-100 text-slate-500 font-medium'
                }`}
              >
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* SUCCESS CONFIRMATION STATE */}
        {submittedRef ? (
          <div className="white-card-thick p-8 sm:p-10 rounded-2xl text-center space-y-5 shadow-xl bg-white">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300 font-black text-lg">
              OK
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest block font-bold">
                Project Inquiry Submitted
              </span>
              <h2 className="text-2xl font-black text-[#0B2545] mt-1">
                Reference ID: <span className="text-red-600 font-mono">{submittedRef}</span>
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
              Thank you, <strong className="text-[#0B2545]">{formData.fullName}</strong>. Your customized project inquiry for <strong className="text-[#0B2545]">{formData.companyName}</strong> has been received by our teams in Kigali & Centurion.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700 font-medium">
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span>Delivery Location:</span>
                <span className="font-bold text-[#0B2545]">{formData.deliveryLocation}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span>Selected Items:</span>
                <span className="font-bold text-red-600">{selectedProductIds.length} items</span>
              </div>
              <div className="flex justify-between">
                <span>Target Deadline:</span>
                <span className="font-bold text-[#0B2545]">{formData.requiredDate}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSubmittedRef(null);
                  setStep(1);
                }}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2545] font-bold text-xs border border-slate-300 transition uppercase tracking-wider"
              >
                Create Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <div className="white-card-thick p-5 sm:p-8 rounded-2xl shadow-xl bg-white">
            
            {/* STEP 1: WHAT DO YOU NEED? */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-black text-[#0B2545]">Step 1: What do you need?</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Select one or multiple branding requirements for your company.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {BRAND_NEEDS.map((need) => {
                    const selected = selectedNeeds.includes(need.id);
                    return (
                      <div
                        key={need.id}
                        onClick={() => toggleNeed(need.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between space-y-2 ${
                          selected
                            ? 'bg-red-50 border-red-600 shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase text-red-600">Requirement</span>
                          {selected && <span className="text-xs font-black text-red-600">SELECTED</span>}
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-[#0B2545]">{need.title}</h4>
                          <p className="text-[11px] text-slate-600 mt-0.5 font-medium">{need.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-3">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow uppercase tracking-wider"
                  >
                    Next: Select Products
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT PRODUCTS */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-black text-[#0B2545]">Step 2: Select Products</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Pick products and enter target quantity per item.</p>
                </div>

                <div className="space-y-2.5 max-h-[45vh] overflow-y-auto pr-1">
                  {PRODUCTS.map((prod) => {
                    const isSelected = selectedProductIds.includes(prod.id);
                    return (
                      <div
                        key={prod.id}
                        className={`p-3 rounded-xl border-2 transition flex flex-col sm:flex-row items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-slate-50 border-red-600 shadow-sm'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 w-full sm:w-auto">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleProduct(prod.id)}
                            className="w-4 h-4 accent-red-600 cursor-pointer"
                          />
                          <img src={prod.image} alt={prod.name} className="w-12 h-12 object-cover rounded-lg border border-slate-200" />
                          <div>
                            <h4 className="text-xs font-extrabold text-[#0B2545]">{prod.name}</h4>
                            <p className="text-[10px] text-slate-500 capitalize font-medium">{prod.categoryId.replace('-', ' ')}</p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 border-slate-200 pt-2 sm:pt-0">
                            <span className="text-[11px] text-slate-600 font-bold">Target Qty:</span>
                            <input
                              type="number"
                              value={quantities[prod.id] || 100}
                              onChange={(e) => handleQtyChange(prod.id, parseInt(e.target.value) || 50)}
                              className="w-20 p-1.5 bg-white border border-slate-300 rounded-lg text-center text-[#0B2545] text-xs font-black font-mono focus:border-red-600"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-200">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-[#0B2545] font-bold text-xs border border-slate-300 uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow uppercase tracking-wider"
                  >
                    Next: Upload Artwork
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: UPLOAD LOGO ARTWORK */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-black text-[#0B2545]">Step 3: Upload Logo & Artwork</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Upload high-resolution vector or PNG logo file (PNG, SVG, JPG, PDF).</p>
                </div>

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 hover:border-red-600 rounded-2xl p-6 text-center cursor-pointer transition bg-slate-50 hover:bg-red-50/40 space-y-2"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*,.pdf,.svg"
                    className="hidden"
                  />
                  
                  {logoPreview ? (
                    <div className="space-y-2">
                      <img src={logoPreview} alt="Uploaded Artwork" className="max-h-32 mx-auto rounded-lg object-contain bg-white p-2 border border-slate-300 shadow" />
                      <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                        Logo file uploaded successfully! Click to replace file.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-black text-[#0B2545]">DRAG & DROP YOUR LOGO HERE</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Supports PNG, JPG, PDF, SVG (Max 25MB)</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-200">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-[#0B2545] font-bold text-xs border border-slate-300 uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow uppercase tracking-wider"
                  >
                    Next: Project Details
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: PROJECT DETAILS */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-black text-[#0B2545]">Step 4: Contact & Delivery Specification</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Tell us where to deliver and who to send the quotation to.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Jean-Claude Mutabazi"
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Pan-African Logistics Ltd"
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jean@company.com"
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+250 788 123 456"
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Delivery Country *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-bold"
                    >
                      <option value="Rwanda">Rwanda (Kigali HQ)</option>
                      <option value="South Africa">South Africa (Centurion HQ)</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Uganda">Uganda</option>
                      <option value="DR Congo">DR Congo</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Other Africa">Other African Country</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Target Delivery Deadline</label>
                    <input
                      type="date"
                      value={formData.requiredDate}
                      onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#0B2545] uppercase tracking-wider mb-1">Special Project Instructions</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on Pantone branding colors, packaging, split delivery locations..."
                    className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                  />
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-200">
                  <button
                    onClick={() => setStep(3)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-[#0B2545] font-bold text-xs border border-slate-300 uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(5)}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow uppercase tracking-wider"
                  >
                    Review & Submit
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW & SUBMIT */}
            {step === 5 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-lg font-black text-[#0B2545]">Step 5: Review & Submit Quotation</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Confirm your branding summary before final submission.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 space-y-3 text-xs font-medium">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-700">
                    <span>Contact Person:</span>
                    <strong className="text-[#0B2545] font-black">{formData.fullName} ({formData.companyName})</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-700">
                    <span>Contact Info:</span>
                    <strong className="text-[#0B2545] font-black">{formData.email} • {formData.phone}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-700">
                    <span>Delivery Location:</span>
                    <strong className="text-red-600 font-black">{formData.country} ({formData.deliveryLocation})</strong>
                  </div>

                  <div>
                    <span className="text-slate-600 font-bold block mb-1.5">Selected Products Summary:</span>
                    <div className="space-y-1">
                      {selectedProductIds.map(pId => {
                        const p = PRODUCTS.find(prod => prod.id === pId);
                        return (
                          <div key={pId} className="flex justify-between bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
                            <span className="text-[#0B2545] font-bold">{p?.name || pId}</span>
                            <span className="text-red-600 font-mono font-black">{quantities[pId] || 100} units</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-[#0B2545] font-bold text-xs border border-slate-300 uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs shadow-lg shadow-red-600/30 transition uppercase tracking-wider"
                  >
                    SUBMIT PROJECT INQUIRY
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

