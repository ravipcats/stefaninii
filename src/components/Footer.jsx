import React from 'react'
import { FaClock, FaEnvelope, FaFacebook, FaIndustry, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    const socialLinks = [
        { icon: <FaFacebook className='text-lg' />, label: "Facebook" },
        { icon: <FaTwitter className='text-lg' />, label: "Twitter" },
        { icon: <FaInstagram className='text-lg' />, label: "Instagram" },
        { icon: <FaLinkedinIn className='text-lg' />, label: "LinkedIn" },
        { icon: <FaYoutube className='text-lg' />, label: "Youtube" },
    ];
    const quickLinks = [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Our Services", href: "#services" },
        { text: "Our Products", href: "#products" },
        { text: "Contact Us", href: "#contact" },
    ];
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
            content: <span className='text-gray-400 hover:text-blue-500 transition'>
                D-31, Bhuneshwari Green Estate, Near Radhika Garden. P.C. 831008, Jamshedpur, Jharkhand, India
            </span>
        },
        {
            icon: <FaPhoneAlt className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
            content: <span className='text-gray-400 hover:text-blue-500 transition'>
                91-9304824637, 0657-2346622
            </span>
        },
        {
            icon: <FaEnvelope className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
            content: <span className='text-gray-400 hover:text-blue-500 transition'>
                contact@pcats.co.in
            </span>
        },
        {
            icon: <FaClock className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
            content: <span className='text-gray-400 hover:text-blue-500 transition'>
                Monday - Saturday : 09:00 AM - 06:00 PM
                Sunday: Closed
            </span>
        },
    ];
    return (
        <footer className='bg-gray-900 text-white pt-16 pb-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
                    <section className='lg:col-span-2'>
                        <header className='flex items-center mb-6'>
                            <img src="/favicon.png" alt="Logo" className='w-24 h-10 mr-4' aria-hidden='true' />
                            {/* <h2 className='text-2xl font-bold'>VMCPLT</h2> */}

                        </header>
                        <nav aria-label='Social media links'>
                            <ul className='flex space-x-4'>
                                {socialLinks.map((obj, index) => {
                                    return (
                                        <li key={index}>
                                            <a href='#' className='bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center trasition'
                                                aria-label={obj.label}>
                                                {obj.icon}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
                            Quick Links
                        </h3>
                        <nav aria-label='Quick Links'>
                            <ul className='space-y-3'>
                                {quickLinks.map((obj, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={obj.href} className='text-gray-400 hover:text-blue-500 transition'>
                                                {obj.text}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </section>
                    <address>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
                            Contact Us
                        </h3>
                        <ul className='space-y-4'>
                            {contactInfo.map((obj, index) => {
                                return (
                                    <li key={index} className='flex items-start'>
                                        {obj.icon}
                                        {obj.content}
                                    </li>
                                );
                            })}
                        </ul>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer