import React, { useState } from 'react';

/**
 * Reusable Contact Form Section Component
 * 
 * @param {string} badgeText - Small uppercase label (e.g., "CONTACT US")
 * @param {string} title - Main headline text (e.g., "Let’s build it together?")
 * @param {string} description - Supporting text explaining what happens next
 * @param {string} submitButtonText - Label for the submit button (e.g., "Enviar")
 * @param {Function} onSubmit - Custom handler function when form is submitted
 */
export default function ContactFormSection({
  badgeText = "CONTACT US",
  title = "Let’s build it together?",
  description = "Tell us about what your business needs. A specialist will be in touch so we can build it together",
  submitButtonText = "Enviar",
  onSubmit = (formData) => console.log("Form Submitted:", formData)
}) {
  const [formData, setFormData] = useState({
    name: '',
    corporateEmail: '',
    company: '',
    message: '',
    agreeCommunications: false,
    agreePrivacyPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editable Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
              {badgeText}
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-100">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Corporate Email Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Corporate email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input 
                    type="email"
                    name="corporateEmail"
                    required
                    value={formData.corporateEmail}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Company<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input 
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Message / Help Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    How can we help you?
                  </label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-y"
                  ></textarea>
                </div>

                {/* Checkbox 1 */}
                <div className="flex items-start space-x-3 pt-2">
                  <input 
                    type="checkbox"
                    name="agreeCommunications"
                    id="agreeCommunications"
                    checked={formData.agreeCommunications}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="agreeCommunications" className="text-xs sm:text-sm text-slate-600 select-none">
                    I agree to receive other communications.
                  </label>
                </div>

                {/* Checkbox 2 (Privacy Policy) */}
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox"
                    name="agreePrivacyPolicy"
                    id="agreePrivacyPolicy"
                    required
                    checked={formData.agreePrivacyPolicy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="agreePrivacyPolicy" className="text-xs sm:text-sm text-slate-600 select-none">
                    I confirm that I have read and accept the <a href="#privacy" className="text-blue-600 underline font-medium hover:text-blue-700">Privacy Policy</a> and give my consent to share my information.<span className="text-red-500 ml-0.5">*</span>
                  </label>
                </div>

                {/* Disclaimer Text */}
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed pt-1">
                  By clicking Submit, you agree that your information may be stored and processed in order to provide you with the requested content.
                </p>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="bg-[#ff7a59] hover:bg-[#ff653c] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all duration-300 text-sm sm:text-base cursor-pointer"
                  >
                    {submitButtonText}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}