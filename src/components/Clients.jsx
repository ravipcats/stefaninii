import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos'

function Clients() {
    const clients = [
        { src: '/clients/tatasteel.png', title: "Tata Steel", desc: "Tata Steel Limited" },
        { src: '/clients/Indian-Rare-Earths-Ltd.jpg', title: "IREL", desc: "Indian Rare Earths Limited" },
        { src: '/clients/Cummins-Inc.jpg', title: "Cummins", desc: "Cummins India Limited" },
        { src: '/clients/Tata-Motors.jpg', title: "TML", desc: "Tata Motors Limited" },
        { src: '/clients/Balasore.jpg', title: "Balasore", desc: "Balasore Alloys Limited" },
        { src: '/clients/Eastern-Railways.png', title: "Eastern Railways", desc: "Indian Eastern Railways" },
        { src: '/clients/Tata-Blue-Scope.png', title: "BlueScope", desc: "Tata Bluescope Steel Private Limited" },
        { src: '/clients/hitachi.png', title: "Hitachi", desc: "Hitachi India Private Limited" },
        { src: '/clients/jntvti.png', title: "JNTVTI", desc: "JNTVTI" },
        { src: '/clients/power.png', title: "Power", desc: "Tata Power Company Limited" },
        { src: '/clients/rkfl.png', title: "RKFL", desc: "Ramkrishna Forgings Limited" },
        { src: '/clients/sspl.png', title: "SSPL", desc: "Shah Sponge Power Limited" },
        { src: '/clients/timken.png', title: "Timken", desc: "Timken India Limited" }
    ];

    const PrevArrow = ({ onClick }) => (
        <button 
            onClick={onClick} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 -ml-6"
        >
            <FaChevronLeft className="text-blue-600" size={20} />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button 
            onClick={onClick} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 -mr-6"
        >
            <FaChevronRight className="text-blue-600" size={20} />
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        afterChange: () => {
            if (typeof AOS !== 'undefined' && AOS.refresh) {
                AOS.refresh();
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section
            id='clients'
            className='py-24 overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100'
            aria-labelledby='Clients-heading'
        >
            <div className='container mx-auto px-4'>
                {/* Header */}
                <div data-aos='fade-up' className='text-center mb-16'>
                    <span className='inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4'>Our Network</span>
                    <h2 id='Clients-heading' className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                        Trusted by Industry <span className='text-blue-600'>Leaders</span>
                    </h2>
                    <div className='h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6'></div>
                </div>

                {/* Slider */}
                <div className="relative px-4" data-aos="zoom-in" data-aos-delay="200">
                    <Slider {...settings}>
                        {clients.map((client, index) => (
                            <div key={index} className="px-4">
                                <div className="group relative h-full">
                                    {/* Card Container */}
                                    <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                                        
                                        {/* Logo Container */}
                                        <div className="flex items-center justify-center h-32 mb-4 bg-white rounded-xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500 overflow-hidden">
                                            <img
                                                src={client.src}
                                                alt={client.title}
                                                className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                                {client.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                                                {client.desc}
                                            </p>
                                        </div>

                                        {/* Accent Line */}
                                        <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Hover Indicator */}
                                        <div className="flex justify-center gap-2 mt-3">
                                            {[0, 1, 2].map((i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                                        i === 1 
                                                            ? 'bg-blue-600 w-6' 
                                                            : 'bg-gray-300 group-hover:bg-blue-200'
                                                    }`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Bottom Stats */}
                <div data-aos="fade-up" data-aos-delay="400" className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
                        <div className="text-sm text-gray-600">Major Clients</div>
                    </div>
                    <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">480+</div>
                        <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                    <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                        <div className="text-sm text-gray-600">Years Trusted</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clients;
