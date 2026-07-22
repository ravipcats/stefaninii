import { FaAward, FaUserAlt, FaCogs, FaBox, FaQuoteLeft, FaRocket, FaLightbulb } from 'react-icons/fa';
import about from '../assets/automation.jpg';

function About() {
    const achievements = [
        { value: '25+', title: 'Years Experience', icon: <FaAward className='text-blue-500 text-2xl' /> },
        { value: '100+', title: 'Clients', icon: <FaUserAlt className='text-blue-500 text-2xl' /> },
        { value: '70+', title: 'Services', icon: <FaCogs className='text-blue-500 text-2xl' /> },
        { value: '20+', title: 'Products', icon: <FaBox className='text-blue-500 text-2xl' /> }
    ];

    return (
        <section id='about' className='py-24 bg-slate-50 relative overflow-hidden'>
            {/* Background Glows to match Home */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px]"></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* PART 1: The Story */}
                <article className='flex flex-col lg:flex-row items-center gap-16 mb-32'>
                    <figure data-aos="zoom-in" className="lg:w-1/2 relative">
                        <div className="relative z-10 p-4">
                            {/* Premium Image Frame */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-[2.5rem] opacity-20 blur-2xl animate-pulse"></div>
                            <img
                                src={about}
                                className="relative z-20 object-cover rounded-[2rem] shadow-2xl border-8 border-white w-full h-auto"
                                alt="P-CATS Automation"
                                loading="lazy"
                            />
                            {/* Floating Experience Badge */}
                            <aside className='absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white z-30 animate-float'>
                                <strong className='block text-4xl font-black text-blue-600 leading-none'>25+</strong>
                                <small className='text-[10px] font-bold uppercase tracking-widest text-slate-500'>Years of Mastery</small>
                            </aside>
                        </div>
                    </figure>

                    <div className='lg:w-1/2' data-aos="fade-left">
                        <header className="mb-10">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-lg border border-blue-100">
                                Legacy of Excellence
                            </span>
                            <h2 className='text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8'>
                                About <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>us</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                                <p>
                                    <span className="text-slate-900 font-bold underline decoration-blue-200 decoration-4 underline-offset-4">Pranava Computers and Total Solutions (P-CATS)</span>, established in 2007,
                                    represents over 25 years of mastery in delivering high-stakes technology.
                                </p>
                                <p>
                                    From GPS tracking and RFID security to pioneering AI-based automation, we bridge the gap between complex innovation and practical, future-ready business tools.
                                </p>
                            </div>
                        </header>

                        {/* Achievements Bento Grid */}
                        <div className='grid grid-cols-2 gap-4'>
                            {achievements.map((obj, index) => (
                                <div key={index} className='bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all group'>
                                    <div className="mb-3 transform group-hover:scale-110 transition-transform">
                                        {obj.icon}
                                    </div>
                                    <strong className='text-2xl font-black text-slate-900 block'>{obj.value}</strong>
                                    <p className='text-xs font-bold text-slate-400 uppercase tracking-widest'>{obj.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                {/* PART 2: Mission & Vision (The "Core" Section) */}
                <div className="grid lg:grid-cols-2 gap-8 mb-32">
                    {[
                        {
                            title: "Our Mission",
                            text: "To deliver seamless, technology-driven services and high-quality products that empower businesses to grow sustainably.",
                            color: "blue",
                            icon: <FaRocket /> // Add this
                        },
                        {
                            title: "Our Vision",
                            text: "To become a global leader trusted for efficiency and innovation, forming the core of every smart business operation.",
                            color: "purple",
                            icon: <FaLightbulb /> // Add this
                        }
                    ].map((item, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="relative group p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${item.color}-50 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>

                            {/* ICON CONTAINER */}
                            <div className={`relative z-10 w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
                ${item.color === 'blue' ? 'bg-blue-600 shadow-blue-200' : 'bg-purple-600 shadow-purple-200'} shadow-lg text-white`}>
                                {item.icon}
                            </div>

                            <FaQuoteLeft className={`text-${item.color}-200 text-5xl mb-6 relative z-10 opacity-50`} />
                            <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">{item.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed relative z-10 font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                {/* PART 3: Leadership - The Premium Glass Edition */}
                <div data-aos="fade-up" className="relative mt-24 py-20 px-8 bg-white/40 backdrop-blur-md rounded-[3.5rem] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-blue-100/40 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-purple-100/40 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative z-10">
                        <header className="text-center mb-16">
                            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-3 block">
                                Executive Board
                            </span>

                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                                The Visionaries
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-serif">
                                    {" "}Behind P-CATS
                                </span>
                            </h3>

                            <div className="mt-6 flex justify-center gap-1">
                                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                                <div className="w-2 h-1 bg-blue-200 rounded-full"></div>
                            </div>
                        </header>

                        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
                            {[
                                {
                                    src: "/directorImage/KPSingh-Sir.jpg",
                                    name: "Mr. K.P. Singh",
                                    role: "Director & Founder",
                                    quote: "Vision is not just about seeing the future, it's about creating it."
                                },
                                {
                                    src: "/directorImage/Rajesh-Sir.jpg",
                                    name: "Mr. Rajesh Singh",
                                    role: "Director & Founder",
                                    quote: "Innovation drives growth, and growth builds lasting impact."
                                },
                                {
                                    src: "/directorImage/Nilu-Mam.jpg",
                                    name: "Mrs. Nilu Singh",
                                    role: "Director & Founder",
                                    quote: "Strong leadership is built on trust, vision, and consistency."
                                }
                            ].map((leader) => (
                                <div key={leader.name} className="flex flex-col items-center group max-w-[260px]">

                                    {/* IMAGE */}
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-2xl opacity-60"></div>

                                        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-white shadow-lg z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                            <img
                                                className="rounded-full w-full h-full object-cover transition-all duration-400 border-1 border-slate-50"
                                                src={leader.src}
                                                alt={leader.name}
                                            />

                                            {/* <div className="absolute -bottom-2 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
                                                ✔
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <cite className="font-black text-slate-800 text-xl block group-hover:text-blue-600 transition-colors">
                                            {leader.name}
                                        </cite>

                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 group-hover:text-blue-400">
                                            {leader.role}
                                        </p>
                                    </div>

                                    <div className="mt-4 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white shadow-sm text-center transition-all duration-300 group-hover:shadow-md">

                                        <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed group-hover:text-blue-500">
                                            “{leader.quote}”
                                        </p>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

export default About;