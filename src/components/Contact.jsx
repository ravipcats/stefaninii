import React, { useState } from 'react';
import { FaClock, FaEnvelope, FaMapMarkedAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import contactImg from '../assets/contact.png';
import { toast } from 'react-toastify';

function Contact() {
    const [loading, setLoading] = useState(false);
    const contact = [
        {
            icon: <FaMapMarkedAlt className='text-white text-2xl' />,
            iconBg: 'from-blue-500 to-cyan-500',
            title: 'Our Location',
            content: (
                <p className='text-gray-700'>
                    D-31, Bhuneshwari Green Estate, Near Radhika Garden. P.C. 831008, Jamshedpur, Jharkhand, India
                </p>
            )
        },
        {
            icon: <FaPhoneAlt className='text-white text-2xl' />,
            iconBg: 'from-green-500 to-emerald-500',
            title: 'Phone Numbers',
            content: (
                <p className='text-gray-700'>
                    <span className='hover:text-blue-600 font-semibold'>91-9304824637, 0657-2346622</span>
                </p>
            )
        },
        {
            icon: <FaEnvelope className='text-white text-2xl' />,
            iconBg: 'from-purple-500 to-pink-500',
            title: 'Email',
            content: (
                <p className='text-gray-700'>
                    <span className='hover:text-blue-600 font-semibold'>contact@pcats.co.in</span>
                </p>
            )
        },
        {
            icon: <FaClock className='text-white text-2xl' />,
            iconBg: 'from-orange-500 to-rose-500',
            title: 'Working Hours',
            content: (
                <p className='text-gray-700'>
                    <span className='font-semibold'>Mon - Sat:</span> 09:00 AM - 06:00 PM<br />
                    <span className='font-semibold'>Sunday:</span> Closed
                </p>
            )
        }
    ];
    const items = [
        { Id: '1', Type: 'S', Description: 'CCTV Installation & Surveillance' },
        { Id: '2', Type: 'S', Description: 'LED Display Boards' },
        { Id: '3', Type: 'S', Description: 'Speed Monitoring System' },
        { Id: '4', Type: 'S', Description: 'PCB Designing & Development' },
        { Id: '5', Type: 'S', Description: 'Microcontroller Services' },
        { Id: '6', Type: 'S', Description: 'Wired and Wireless Networking' },
        { Id: '7', Type: 'S', Description: 'AI-Based System Development' },
        { Id: '8', Type: 'S', Description: 'Custom Automation Solutions' },
        { Id: '9', Type: 'G', Description: 'Software Development & Web Designing' },
        { Id: '10', Type: 'G', Description: 'Device Management System' },
        { Id: '11', Type: 'G', Description: 'Vehicle Tracking System' },
        { Id: '12', Type: 'G', Description: 'Online Data Logger' },
        { Id: '13', Type: 'G', Description: 'Liquid Level Monitoring System' },
        { Id: '14', Type: 'G', Description: 'Image Process and Report System' },
        { Id: '15', Type: 'G', Description: 'Smart Access Control' },
        { Id: '16', Type: 'G', Description: 'SMS Alert System' },
    ];
    const sendMessage = async (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const formData = new FormData(form);
        formData.append("Item", form.querySelector('#Item')?.selectedOptions[0]?.text);
        formData.append("access_key", "3029ad11-0c2d-4184-bac3-ab29d73e6b2b");
        formData.append("subject", "You have received a new enquiry from your website.");
        const obj = Object.fromEntries(formData);
        const json = JSON.stringify(obj);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((response) => response.json());
        if (response.success) {
            toast.success("Message has been sent.");
            form.reset();
        }
        else {
            toast.error("Message did not sent.");
            console.log("Message did not sent.", response);
        }
        setLoading(false);
    };

    return (
        <section id="contact" className='py-20 overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100'>
            <div className='container mx-auto px-4'>
                <header data-aos='fade-up' data-aos-delay='400' className='text-center mb-16'>
                    <div className='inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full'>
                        <span className='text-blue-700 font-semibold text-sm'>📞 Let's Connect</span>
                    </div>
                    <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'>
                        Get In Touch With Us
                    </h1>
                    <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    {/* <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque eos fuga beatae. Inventore necessitatibus nemo quibusdam, maxime deleniti harum alias perspiciatis quis at ipsum in consectetur doloremque consequatur. Impedit.
                    </p> */}

                </header>
                <main className='flex flex-col lg:flex-row gap-12'>
                    <aside data-aos='fade-up' data-aos-delay='500' className='lg:w-2/5'>
                        <div className='space-y-6 h-full'>
                            <figure className='rounded-2xl overflow-hidden shadow-2xl'>
                                <img
                                    src={contactImg}
                                    className='w-full object-cover hover:scale-105 transition-transform duration-500'
                                    loading='lazy'
                                    alt='Contact'
                                ></img>
                            </figure>
                            <address className='space-y-4'>
                                {contact.map((obj, index) => {
                                    return (
                                        <article key={index} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                                            <div className='flex items-start gap-4'>
                                                <figure className={`bg-gradient-to-br ${obj.iconBg} p-3 rounded-full text-white flex-shrink-0`}>
                                                    {obj.icon}
                                                </figure>
                                                <div>
                                                    <h3 className="font-bold text-gray-800 mb-1">{obj.title}</h3>
                                                    <div className="text-gray-600 text-sm leading-relaxed">{obj.content}</div>
                                                </div>
                                            </div>
                                        </article>
                                    )
                                })}
                            </address>
                        </div>
                    </aside>
                    <section data-aos='fade-up' data-aos-delay='600' className='lg:w-3/5'>
                        <div className='bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 h-full border border-blue-200'>
                            <div className='inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full'>
                                <span className='text-blue-700 font-semibold text-sm'>✉️ Message Form</span>
                            </div>
                            <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8'>Send Us a Message</h2>
                            <form className="space-y-6" onSubmit={sendMessage}>
                                <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-gray-700 font-semibold mb-3'>Full Name</label>
                                        <input
                                            type='text'
                                            id='FullName'
                                            name='Name'
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 transition-all'
                                            placeholder='Your Name'
                                            required
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-gray-700 font-semibold mb-3'>Contact No.</label>
                                        <input
                                            type='text'
                                            id='ContactNo'
                                            name='ContactNo'
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 transition-all'
                                            placeholder='+91 XXXXXXXXXX'
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </fieldset>
                                <div>
                                    <label className='block text-gray-700 font-semibold mb-3'>Email Address</label>
                                    <input
                                        type='text'
                                        id='Email'
                                        name='Email'
                                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 transition-all'
                                        placeholder='your@email.com'
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-semibold mb-3'>
                                        Service / Product Interested In
                                    </label>
                                    <select
                                        id='Item'
                                        name='Item'
                                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 transition-all'
                                        required>
                                        <option key={0} value="">Select a service or product...</option>
                                        {items.map((obj, index) => {
                                            return (
                                                <option key={index + 1} value={obj.Id}>{obj.Description}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-semibold mb-3'>Your Message</label>
                                    <textarea
                                        id='Query'
                                        name='Query'
                                        rows='5'
                                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 transition-all resize-none'
                                        placeholder='Tell us about your query...'
                                        required></textarea>
                                </div>
                                <div className='pt-4'>
                                    <button
                                        type='submit'
                                        disabled={loading}
                                        className={`flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full font-semibold text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        aria-label='Submit contact form'
                                    >
                                        {loading ? (
                                            <svg
                                                className="animate-spin h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24">
                                                <circle className="opacity-45" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8z"
                                                />
                                            </svg>
                                        ) : (
                                            <FaPaperPlane className="animate-bounce text-white" />
                                        )}
                                        <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <figure data-aos="fade-up" data-aos-delay='600' className='mt-16 bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.334467520229!2d86.2693249679597!3d22.768783244037657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f60809b5e69f6b%3A0x226faf4e019e9325!2sS-23%2C%20Rd%20Number%202%2C%20Bari%20Nagar%2C%20Jamshedpur%2C%20Jharkhand%20831004!5e0!3m2!1sen!2sin!4v1759307364175!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </div>
        </section>
    )
}
export default Contact