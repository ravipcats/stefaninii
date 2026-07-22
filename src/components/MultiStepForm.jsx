import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
    const [step, setStep] = useState(1); // 1: Info, 2: Details, 3: Success
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        country: "India",
        name: "",
        phoneCode: "IN",
        phone: "",
        company: "",
        message: "",
    });

    const countries = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Brazil",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (step === 1) {
            if (!formData.email) return;
            setStep(2);
        } else if (step === 2) {
            handleSubmitForm();
        }
    };

    const handleSubmitForm = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: "3029ad11-0c2d-4184-bac3-ab29d73e6b2b",
                    subject: "You have received a new enquiry from your website.",
                }),
            }).then((res) => res.json());

            if (response.success) {
                toast.success("Message has been sent.");
                setStep(3);
            } else {
                toast.error("Message did not send.");
            }
        } catch (error) {
            toast.error("An error occurred while submitting.");
        }
        setLoading(false);
    };

    return (
        <section id="contact" className="py-16 lg:py-24 bg-white border-t border-gray-100 min-h-[85vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    
                    {/* Left Side Text Content */}
                    <div className="lg:w-1/2 text-left space-y-4">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            Take the <span className="text-blue-600">next step</span> into the future.
                        </h2>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Talk to our team and find out how we can elevate your business.
                        </p>
                    </div>

                    {/* Right Side Multi-Step Form */}
                    <div className="lg:w-1/2 w-full">
                        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            
                            {/* Top Progress Bar */}
                            <div className="w-full bg-gray-100 h-1.5">
                                <div
                                    className="bg-blue-600 h-1.5 transition-all duration-300"
                                    style={{ width: step === 1 ? "50%" : step === 2 ? "100%" : "100%" }}
                                ></div>
                            </div>

                            <div className="p-8 sm:p-10">
                                {/* STEP 1: INITIAL INFORMATION */}
                                {step === 1 && (
                                    <form onSubmit={handleNext} className="space-y-6">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                We will guide you in the right direction!
                                            </h2>
                                            <p className="text-gray-500 text-sm mt-1">
                                                We just need some information.
                                            </p>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Email*
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Country*
                                                </label>
                                                <select
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-800 cursor-pointer"
                                                >
                                                    {countries.map((c, idx) => (
                                                        <option key={idx} value={c}>
                                                            {c}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-colors text-base"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* STEP 2: USER DETAILS & MESSAGE */}
                                {step === 2 && (
                                    <form onSubmit={handleNext} className="space-y-5">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                We want to get to know you
                                            </h2>
                                            <p className="text-gray-500 text-sm mt-1">
                                                Tell us who you are and what you are looking for
                                            </p>
                                        </div>

                                        <div className="space-y-4 pt-1">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Name"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone number
                                                </label>
                                                <div className="flex gap-2">
                                                    <select
                                                        name="phoneCode"
                                                        value={formData.phoneCode}
                                                        onChange={handleChange}
                                                        className="w-24 px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none text-gray-800 cursor-pointer text-sm font-medium"
                                                    >
                                                        <option value="IN">IN</option>
                                                        <option value="US">US</option>
                                                        <option value="UK">UK</option>
                                                        <option value="CA">CA</option>
                                                    </select>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91"
                                                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none text-gray-800 placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Company name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    required
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Company"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Message"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-2">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="w-1/2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-colors text-base"
                                            >
                                                Previous
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-1/2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-colors text-base flex items-center justify-center gap-2"
                                            >
                                                {loading ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* STEP 3: SUCCESS CONFIRMATION */}
                                {step === 3 && (
                                    <div className="text-center py-10 space-y-4">
                                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                                            <CheckCircle2 size={36} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Thank you for reaching out!
                                        </h2>
                                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                                            Our team of specialists will contact you within a business day to discuss your needs and plan your next step.
                                        </p>
                                        <div className="pt-4">
                                            <button
                                                onClick={() => {
                                                    setStep(1);
                                                    setFormData({ email: "", country: "India", name: "", phoneCode: "IN", phone: "", company: "", message: "" });
                                                }}
                                                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl text-sm transition-colors"
                                            >
                                                Send Another Request
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}