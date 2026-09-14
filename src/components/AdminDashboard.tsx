import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { Product, QuoteRequest, CategoryId, BrandingMethodId } from '../types';
import { CATEGORIES } from '../data/mockData';

export const AdminDashboard: React.FC = () => {
  const { 
    products, 
    setProducts, 
    quoteRequests, 
    updateQuoteStatus,
    isAdminAuthenticated,
    setIsAdminAuthenticated 
  } = useApp();

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'quotes' | 'products'>('overview');
  
  const [viewingQuote, setViewingQuote] = useState<QuoteRequest | null>(null);
  
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProd, setNewProd] = useState<Partial<Product>>({
    name: '',
    categoryId: 'corporate-apparel',
    description: 'High durability corporate merchandise item customized for African enterprise operations.',
    image: '/images/service-branding.webp',
    material: '100% Combed Cotton / Alloy Steel',
    brandingMethods: ['embroidery', 'screen-printing'],
    minimumQuantity: 50,
    estimatedProductionDays: 7,
    featured: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    availableColors: ['#0B2545', '#D71920', '#FFFFFF'],
    useCases: ['corporate', 'events'],
    status: 'active'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin' || passwordInput === 'admin123' || passwordInput === 'akgroup' || passwordInput === 'akgrup') {
      setIsAdminAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.image) {
      alert('Please provide product name and image URL.');
      return;
    }

    const createdProduct: Product = {
      id: `prod-custom-${Date.now()}`,
      name: newProd.name,
      categoryId: newProd.categoryId as CategoryId,
      description: newProd.description || '',
      image: newProd.image,
      galleryImages: [newProd.image],
      availableColors: newProd.availableColors || ['#0B2545', '#D71920'],
      availableSizes: ['S', 'M', 'L', 'XL'],
      material: newProd.material || 'Standard Quality Material',
      brandingMethods: newProd.brandingMethods as BrandingMethodId[] || ['embroidery'],
      minimumQuantity: newProd.minimumQuantity || 50,
      estimatedProductionDays: newProd.estimatedProductionDays || 5,
      featured: !!newProd.featured,
      isCustomizable: true,
      priceType: 'Price available on quotation',
      useCases: ['corporate'],
      status: 'active',
      specifications: { Origin: 'AK GROUP Direct Supply' }
    };

    setProducts((prev: Product[]) => [createdProduct, ...prev]);
    setShowAddProductModal(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to remove this product from the catalog?')) {
      setProducts((prev: Product[]) => prev.filter(p => p.id !== id));
    }
  };

  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-slate-900">
        <div className="white-card-thick p-8 sm:p-10 rounded-3xl max-w-md w-full shadow-2xl space-y-6 bg-white">
          <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 border border-red-200 flex items-center justify-center mx-auto font-black text-[#0B2545]">
            AD
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0B2545]">ADMIN PORTAL LOGIN</h2>
            <p className="text-xs text-slate-500 mt-1 font-bold">Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 font-medium">
            <div>
              <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password (e.g. admin)"
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
              />
              {authError && (
                <p className="text-xs text-red-600 mt-1 font-bold">Invalid password. Try "admin".</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-black text-sm rounded-xl shadow-lg shadow-red-600/30 transition uppercase tracking-wider"
            >
              Access Dashboard
            </button>
          </form>

          <p className="text-[11px] text-center text-slate-500 font-mono font-bold">
            Demo Credentials: password = <span className="text-red-600">admin</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24 text-slate-900">
      
      {/* Top Admin Navigation Header */}
      <div className="bg-[#0B2545] border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black flex items-center justify-center">
              AD
            </div>
            <div>
              <h1 className="text-xl font-black text-white">ADMIN DASHBOARD</h1>
              <p className="text-xs text-slate-300">AK GROUP Enterprise Corporate Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveAdminTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeAdminTab === 'overview' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveAdminTab('quotes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeAdminTab === 'quotes' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Quotes <span className="px-1.5 py-0.2 text-[10px] bg-red-950 text-red-100 rounded font-mono font-bold">{quoteRequests.length}</span>
            </button>
            <button
              onClick={() => setActiveAdminTab('products')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeAdminTab === 'products' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Products Catalog
            </button>
            <button
              onClick={() => setIsAdminAuthenticated(false)}
              className="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-700 text-xs font-bold uppercase tracking-wider"
              title="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div className="white-card-thick p-5 rounded-2xl bg-white shadow-md">
            <div className="text-slate-500 mb-2 font-bold text-xs uppercase tracking-wider">
              Products
            </div>
            <div className="text-3xl font-black text-[#0B2545]">{products.length}</div>
            <span className="text-[10px] text-emerald-700 font-mono font-bold mt-1 block">Active in Showroom</span>
          </div>

          <div className="white-card-thick p-5 rounded-2xl bg-white shadow-md">
            <div className="text-slate-500 mb-2 font-bold text-xs uppercase tracking-wider">
              Categories
            </div>
            <div className="text-3xl font-black text-[#0B2545]">{CATEGORIES.length}</div>
            <span className="text-[10px] text-slate-500 font-mono font-bold mt-1 block">Brochure & Additions</span>
          </div>

          <div className="white-card-thick p-5 rounded-2xl bg-white shadow-md">
            <div className="text-slate-500 mb-2 font-bold text-xs uppercase tracking-wider">
              Quotes
            </div>
            <div className="text-3xl font-black text-[#0B2545]">{quoteRequests.length}</div>
            <span className="text-[10px] text-red-600 font-mono font-bold mt-1 block">
              {quoteRequests.filter(q => q.status === 'NEW').length} New Requests
            </span>
          </div>

          <div className="white-card-thick p-5 rounded-2xl bg-white shadow-md">
            <div className="text-slate-500 mb-2 font-bold text-xs uppercase tracking-wider">
              Customers
            </div>
            <div className="text-3xl font-black text-[#0B2545]">124</div>
            <span className="text-[10px] text-slate-500 font-mono font-bold mt-1 block">Verified Pan-African</span>
          </div>

          <div className="white-card-thick p-5 rounded-2xl bg-white shadow-md">
            <div className="text-slate-500 mb-2 font-bold text-xs uppercase tracking-wider">
              Projects
            </div>
            <div className="text-3xl font-black text-[#0B2545]">52</div>
            <span className="text-[10px] text-emerald-700 font-mono font-bold mt-1 block">Completed Campaigns</span>
          </div>

        </div>

        {/* QUOTES MANAGEMENT TAB */}
        {(activeAdminTab === 'overview' || activeAdminTab === 'quotes') && (
          <div className="white-card-thick p-6 rounded-3xl space-y-4 shadow-xl bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl font-black text-[#0B2545]">QUOTE REQUESTS MANAGEMENT</h3>
                <p className="text-xs text-slate-500 font-medium">Review incoming customer quotation submissions & update status.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-[#0B2545] uppercase font-black text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="p-3">Ref ID</th>
                    <th className="p-3">Customer / Company</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Requested Items</th>
                    <th className="p-3">Date Needed</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  {quoteRequests.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-mono font-black text-red-600">{q.referenceNumber}</td>
                      <td className="p-3">
                        <div className="font-bold text-[#0B2545]">{q.customerName}</div>
                        <div className="text-[11px] text-slate-500">{q.companyName}</div>
                      </td>
                      <td className="p-3">{q.country} ({q.city})</td>
                      <td className="p-3 font-bold text-[#0B2545]">
                        {q.items.length} product(s)
                      </td>
                      <td className="p-3 font-mono">{q.requiredDate}</td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase border ${
                          q.status === 'NEW' ? 'bg-red-100 text-red-700 border-red-200' :
                          q.status === 'UNDER REVIEW' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                          q.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                          'bg-slate-100 text-slate-700 border-slate-300'
                        }`}>
                          {q.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => setViewingQuote(q)}
                          className="px-3 py-1.5 bg-[#0B2545] hover:bg-red-600 text-white rounded-lg font-bold transition shadow-sm uppercase tracking-wider text-[11px]"
                        >
                          View & Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PRODUCTS MANAGEMENT CATALOG TAB */}
        {(activeAdminTab === 'overview' || activeAdminTab === 'products') && (
          <div className="white-card-thick p-6 rounded-3xl space-y-4 shadow-xl bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl font-black text-[#0B2545]">PRODUCT CATALOG MANAGEMENT</h3>
                <p className="text-xs text-slate-500 font-medium">Add, edit, or remove products displayed in the Showroom.</p>
              </div>
              <button
                onClick={() => setShowAddProductModal(true)}
                className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow-md shadow-red-600/30 uppercase tracking-wider"
              >
                ADD NEW PRODUCT
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p) => (
                <div key={p.id} className="white-card p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 bg-white">
                  <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded-xl border border-slate-200 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-black text-[#0B2545] truncate">{p.name}</h4>
                    <p className="text-xs text-slate-500 capitalize font-medium">{p.categoryId.replace('-', ' ')}</p>
                    <div className="flex items-center gap-2 text-[10px] text-red-600 font-bold mt-0.5">
                      <span>MOQ: {p.minimumQuantity}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-mono">STATUS: {p.status}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteProduct(p.id)}
                    className="px-2 py-1 bg-slate-100 hover:bg-red-600 hover:text-white text-slate-600 text-[10px] font-bold rounded-lg transition uppercase"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* VIEW / UPDATE QUOTE DETAIL MODAL */}
      {viewingQuote && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-slate-300 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-mono text-red-600 font-black">{viewingQuote.referenceNumber}</span>
                <h3 className="text-xl font-black text-[#0B2545]">Quotation Request Details</h3>
              </div>
              <button onClick={() => setViewingQuote(null)} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg uppercase">
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-700 font-medium">
              <div>
                <span className="text-slate-500 block">Customer Name:</span>
                <strong className="text-[#0B2545] text-sm font-black">{viewingQuote.customerName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Company:</span>
                <strong className="text-[#0B2545] text-sm font-black">{viewingQuote.companyName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Email:</span>
                <span className="font-mono text-[#0B2545] font-bold">{viewingQuote.email}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Phone:</span>
                <span className="font-mono text-[#0B2545] font-bold">{viewingQuote.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Delivery Location:</span>
                <span className="text-[#0B2545] font-bold">{viewingQuote.country} ({viewingQuote.deliveryLocation})</span>
              </div>
              <div>
                <span className="text-slate-500 block">Required Date:</span>
                <span className="font-mono text-red-600 font-bold">{viewingQuote.requiredDate}</span>
              </div>
            </div>

            {/* Requested Items */}
            <div>
              <h4 className="text-xs font-black text-[#0B2545] uppercase tracking-wider mb-2">Requested Products List</h4>
              <div className="space-y-2">
                {viewingQuote.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-medium">
                    <span className="text-[#0B2545] font-bold">{item.productName}</span>
                    <span className="text-red-600 font-mono font-black">{item.quantity} units ({item.brandingMethod})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Selector */}
            <div className="space-y-2 border-t border-slate-200 pt-4">
              <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider">Update Quote Status</label>
              <select
                value={viewingQuote.status}
                onChange={(e) => {
                  const newStatus = e.target.value as QuoteRequest['status'];
                  updateQuoteStatus(viewingQuote.id, newStatus);
                  setViewingQuote({ ...viewingQuote, status: newStatus });
                }}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-[#0B2545] font-black"
              >
                <option value="NEW">NEW</option>
                <option value="UNDER REVIEW">UNDER REVIEW</option>
                <option value="QUOTATION SENT">QUOTATION SENT</option>
                <option value="NEGOTIATING">NEGOTIATING</option>
                <option value="APPROVED">APPROVED</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setViewingQuote(null)}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD NEW PRODUCT MODAL */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleSaveProduct} className="relative w-full max-w-xl bg-white rounded-3xl border-2 border-slate-300 shadow-2xl p-6 sm:p-8 space-y-4 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-black text-[#0B2545]">ADD NEW PRODUCT TO SHOWROOM</h3>
              <button type="button" onClick={() => setShowAddProductModal(false)} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg uppercase">
                Close
              </button>
            </div>

            <div>
              <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Product Name *</label>
              <input
                type="text"
                required
                value={newProd.name}
                onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                placeholder="e.g. Executive Leather Travel Portfolio"
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Category *</label>
              <select
                value={newProd.categoryId}
                onChange={(e) => setNewProd({ ...newProd, categoryId: e.target.value as CategoryId })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-[#0B2545] font-bold"
              >
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Image URL *</label>
              <input
                type="url"
                required
                value={newProd.image}
                onChange={(e) => setNewProd({ ...newProd, image: e.target.value })}
                placeholder="/images/your-image.jpg"
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Minimum Order Qty</label>
                <input
                  type="number"
                  value={newProd.minimumQuantity}
                  onChange={(e) => setNewProd({ ...newProd, minimumQuantity: parseInt(e.target.value) || 50 })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Production Est. (Days)</label>
                <input
                  type="number"
                  value={newProd.estimatedProductionDays}
                  onChange={(e) => setNewProd({ ...newProd, estimatedProductionDays: parseInt(e.target.value) || 5 })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-medium"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setShowAddProductModal(false)}
                className="px-4 py-2.5 bg-slate-100 text-[#0B2545] font-bold text-xs rounded-xl border border-slate-300 uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow-md shadow-red-600/30 uppercase tracking-wider"
              >
                SAVE & PUBLISH PRODUCT
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

