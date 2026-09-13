import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pb-24 text-slate-900">
      
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black bg-red-100 text-red-700 border border-red-200 uppercase tracking-wider">
          CUSTOMER SUPPORT
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B2545] tracking-tight">
          GET IN <span className="text-gradient-red">TOUCH</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-medium">
          Reach out to our team for sales inquiries, custom branding advice, and promotional project assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Send Us A Message Form - Thick White Card */}
        <div className="white-card-thick p-8 sm:p-12 rounded-3xl max-w-3xl mx-auto shadow-2xl bg-white border border-slate-200">
          <h3 className="text-2xl font-black text-[#0B2545] text-center mb-6">
            SEND US A MESSAGE
          </h3>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <h4 className="text-lg font-bold text-[#0B2545]">Message Sent Successfully</h4>
              <p className="text-xs text-slate-600 font-medium">Thank you for reaching out to AK GROUP. We will reply within 4 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 bg-slate-100 text-[#0B2545] font-bold text-xs rounded-xl border border-slate-300 uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-medium">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.com"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone number"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Inquiry / Branding Request"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#0B2545] uppercase tracking-wider mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist your business today?"
                  className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-lg shadow-red-600/30 flex items-center justify-center uppercase tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

