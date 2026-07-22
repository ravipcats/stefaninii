
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FaVideo,
  FaTv,
  FaMicrochip,
  FaProjectDiagram,
  FaNetworkWired,
  FaCogs,
  FaBrain,
  FaLaptopCode
} from 'react-icons/fa';
import AOS from 'aos';

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState('');
  const [showModal, setShowModal] = useState(false);




 const services = [
    {
      id: 'cctv-surveillance',
      icon: <FaVideo className='text-6xl text-blue-600' />,
      title: "CCTV Surveillance",
      desc: "Professional CCTV surveillance solutions to safeguard your business, ensuring seamless monitoring, installation, and maintenance while helping you implement a secure and efficient surveillance system.",
      fullDescription: "Our comprehensive CCTV surveillance solutions provide professional monitoring and protection for your facilities. From installation to maintenance, we ensure seamless surveillance system operation.",
      images: [
      "/images/services/cctv/1.png",
      "/images/services/cctv/2.png",
      "/images/services/cctv/3.png",
      "/images/services/cctv/4.png",
      "/images/services/cctv/5.png",
      "/images/services/cctv/6.png",
      "/images/services/cctv/7.png"
      ],
      features: [
        "HD/4K Camera Installation",
        "24/7 Monitoring",
        "Remote Access & Mobile Apps",
        "Motion Detection & Alerts",
        "Video Storage & Backup",
        "Night Vision Technology",
        "Professional Installation",
        "Maintenance & Support"
      ],
      benefits: [
        "Enhanced Security",
        "Crime Deterrence",
        "Real-time Monitoring",
        "Evidence Collection",
        "Peace of Mind",
        "Reduced Losses"
      ]
    },
    {
      id: 'led-display-boards',
      icon: <FaTv className='text-6xl text-blue-600' />,
      title: "LED Display Boards",
      desc: "Comprehensive solutions for LED display boards, including assembling, installation, maintenance, and repairs, ensuring high-quality, reliable, and uninterrupted display performance.",
      fullDescription: "We provide complete LED display board solutions with professional assembly, installation, maintenance, and repair services to ensure optimal performance.",
      features: [
        "Custom LED Design",
        "Professional Assembly",
        "Expert Installation",
        "Real-time Content Management",
        "Energy-efficient Solutions",
        "Weather-resistant Designs",
        "Regular Maintenance",
        "Prompt Repairs & Support"
      ],
      benefits: [
        "High Visibility",
        "Reliable Performance",
        "Extended Lifespan",
        "Cost-effective Operation",
        "Professional Appearance",
        "Maximum Uptime"
      ]
    },
    {
      id: 'pcb-designing-development',
      icon: <FaMicrochip className='text-6xl text-blue-600' />,
      title: "PCB Designing & Development",
      desc: "Comprehensive PCB designing and development services, including circuit design, layout planning, prototyping, and assembly, ensuring high-performance, reliable, and efficient electronic solutions for your projects.",
      fullDescription: "Our expert PCB design and development team creates robust, efficient circuit designs tailored to your specific requirements with complete prototyping and assembly support.",
      features: [
        "Circuit Design & Analysis",
        "Schematic Layout",
        "PCB Layout Planning",
        "Simulation & Testing",
        "Prototyping Services",
        "Component Selection",
        "Assembly Services",
        "Quality Assurance"
      ],
      benefits: [
        "Custom Solutions",
        "Optimized Performance",
        "Faster Time-to-market",
        "Cost-effective Design",
        "High Reliability",
        "Expert Guidance"
      ]
    },
    {
      id: 'microcontroller-services',
      icon: <FaProjectDiagram className='text-6xl text-blue-600' />,
      title: "Microcontroller Services",
      desc: "Complete microcontroller solutions, including programming, integration, and testing, to develop efficient, reliable, and intelligent electronic systems for your applications.",
      fullDescription: "We deliver comprehensive microcontroller solutions with programming, integration, and rigorous testing for intelligent and reliable electronic systems.",
      features: [
        "Microcontroller Programming",
        "Firmware Development",
        "System Integration",
        "Embedded Software Design",
        "Real-time Testing",
        "Performance Optimization",
        "Debugging & Troubleshooting",
        "Technical Support"
      ],
      benefits: [
        "Intelligent Systems",
        "Reliable Operation",
        "Custom Functionality",
        "Optimized Performance",
        "Quick Integration",
        "Ongoing Support"
      ]
    },
    {
      id: 'wired-wireless-networking',
      icon: <FaNetworkWired className='text-6xl text-blue-600' />,
      title: "Wired and Wireless Networking",
      desc: "End-to-end network management including setup, configuration, monitoring, and troubleshooting to maintain reliable and secure connectivity.",
      fullDescription: "Complete networking solutions providing setup, configuration, monitoring, and troubleshooting services for reliable and secure connectivity.",
      features: [
        "Network Design & Planning",
        "Wired Infrastructure Setup",
        "WiFi/Wireless Configuration",
        "Network Security",
        "Continuous Monitoring",
        "Performance Optimizations",
        "Troubleshooting & Support",
        "Backup & Redundancy"
      ],
      benefits: [
        "Reliable Connectivity",
        "Enhanced Security",
        "Reduced Downtime",
        "Scalable Infrastructure",
        "Improved Performance",
        "24/7 Support"
      ]
    },
    {
      id: 'custom-automation-solutions',
      icon: <FaCogs className='text-6xl text-blue-600' />,
      title: "Custom Automation Solutions",
      desc: "P-CATS delivers custom automation solutions with IoT, PLCs, and sensors. Designed for industries, utilities, and smart buildings, our systems reduce manual effort and enable real-time, intelligent control.",
      fullDescription: "Our custom automation solutions leverage IoT, PLCs, and sensors to create intelligent systems that reduce manual effort and enable real-time control.",
      features: [
        "IoT Integration",
        "PLC Programming",
        "Sensor Integration",
        "Real-time Monitoring",
        "Automated Control Systems",
        "Data Analytics",
        "Custom Dashboards",
        "Scalable Architecture"
      ],
      benefits: [
        "Reduced Manual Work",
        "Increased Efficiency",
        "Real-time Intelligence",
        "Cost Savings",
        "Improved Control",
        "Scalability"
      ]
    },
    {
      id: 'ai-based-system-development',
      icon: <FaBrain className='text-6xl text-blue-600' />,
      title: "AI-Based System Development",
      desc: "Our AI-based system development, creating intelligent solutions for automation, data analysis, and smart decision-making, enabling businesses to optimize operations and gain a competitive edge.",
      fullDescription: "We create intelligent AI-based systems for automation, data analysis, and smart decision-making to help businesses optimize operations and gain competitive advantages.",
      features: [
        "Machine Learning Models",
        "Data Analysis & Insights",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Automated Decision Systems",
        "Integration Services",
        "Continuous Learning"
      ],
      benefits: [
        "Intelligent Automation",
        "Data-driven Insights",
        "Competitive Edge",
        "Improved Efficiency",
        "Predictive Capabilities",
        "Smart Solutions"
      ]
    },
    {
      id: 'software-web-development',
      icon: <FaLaptopCode className='text-6xl text-blue-600' />,
      title: "Software Development & Web Designing",
      desc: "We delivers custom software for web, desktop, and automation. Secure, scalable, and integrated solutions that streamline operations and ensure efficiency, flexibility, and long-term performance.",
      fullDescription: "Custom software and web development services delivering secure, scalable solutions for web, desktop, and automation needs with efficiency and long-term performance.",
      features: [
        "Web Development",
        "Desktop Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "Security Implementation",
        "Cloud Integration",
        "Maintenance & Updates"
      ],
      benefits: [
        "Custom Solutions",
        "Scalable Architecture",
        "Enhanced Security",
        "Improved Operations",
        "Long-term Support",
        "Future-proof Design"
      ]
    }
  ];



  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);

    if (service?.images?.length) {
      setActiveImage(service.images[0]);
    }
  }, [serviceId, service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">

      {/* HEADER */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 font-semibold"
          >
            ← Back to Services
          </button>
          <img src="/favicon.png" alt="Logo" className="h-8" />
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">

        {/* IMAGE + DETAILS SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">

          {/* IMAGE GALLERY */}
          <div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg cursor-zoom-in"
              onClick={() => setShowModal(true)}
            >
              <img
                src={activeImage}
                alt={service.title}
                className="w-full max-h-[420px] object-contain mx-auto"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 mt-4 justify-center">
              {service.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`border rounded-lg p-2 transition ${
                    activeImage === img
                      ? "border-blue-600 ring-2 ring-blue-200"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Enquiry
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg"
              >
                <p className="font-semibold text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose This Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <h3 className="font-bold text-gray-800">{b}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">
            Contact us today to learn how {service.title} can transform your business.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold"
          >
            Contact Us Now
          </button>
        </div>

      </section>

      {/* IMAGE MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <img
            src={activeImage}
            alt="zoom"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default ServiceDetail; 
