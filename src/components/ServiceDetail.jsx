import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FaVideo, FaTv, FaMicrochip, FaProjectDiagram, FaNetworkWired, FaCogs, FaBrain, FaLaptopCode
} from 'react-icons/fa';
import {
  FaShieldAlt, FaTools, FaClock, FaCheckCircle
} from "react-icons/fa";
import {
  FaCamera, FaMobileAlt, FaBell, FaHdd, FaHeadset,
} from "react-icons/fa";
import { motion } from 'framer-motion';
import AOS from 'aos';

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const VISIBLE_THUMBS = 4;




  const services = [
    {
      id: 'cctv-surveillance',
      icon: <FaVideo className='text-6xl text-blue-600' />,
      title: "CCTV Surveillance",
      desc: "Professional CCTV surveillance solutions to safeguard your business, ensuring seamless monitoring, installation, and maintenance while helping you implement a secure and efficient surveillance system.",
      fullDescription: `Our CCTV surveillance solutions provide reliable monitoring and robust protection for your facilities. Designed to safeguard people, assets, and daily operations, our systems deliver clear visibility and enhanced security across residential, commercial, and industrial environments.

From expert system design and professional installation to intelligent monitoring features such as HD cameras, night vision, and motion detection, we ensure accurate, real-time surveillance you can trust.

With proactive maintenance, secure remote access, and responsive technical support, we ensure smooth system operation and long-term reliability—giving you confidence, control, and complete peace of mind.`,


      images: [
        "/images/services/cctv/1.png",
        "/images/services/cctv/2.png",
        "/images/services/cctv/3.png",
        "/images/services/cctv/4.png",
        "/images/services/cctv/5.png",
        "/images/services/cctv/6.png",
        "/images/services/cctv/7.png",
        "/images/services/cctv/8.png"
      ],
      features: [
        "HD Camera Installation",
        "24/7 Monitoring",
        "AI + Night Vision Technology",
        "Remote Access & Mobile Apps",
        "Motion Detection & Alerts",
        "Video Storage & Backup",
        "Professional Installation",
        "Maintenance & Support"
      ],
      highlights: [
        { icon: "shield", text: "High Security" },
        { icon: "camera", text: "HD Monitoring" },
        { icon: "clock", text: "24/7 Surveillance" },
        { icon: "check", text: "Trusted Solution" }
      ]
      ,
      benefits: [
        {
          title: "Enhanced Security",
          desc: "Protect your premises with advanced surveillance systems designed to monitor and secure critical areas around the clock."
        },
        {
          title: "Crime Deterrence",
          desc: "Visible CCTV cameras act as a strong deterrent against theft, vandalism, and unauthorized access."
        },
        {
          title: "Real-time Monitoring",
          desc: "Monitor activities live from anywhere using secure remote access on mobile and desktop devices."
        },
        {
          title: "Evidence Collection",
          desc: "High-quality video recordings provide reliable evidence for investigations and dispute resolution."
        },
        {
          title: "Peace of Mind",
          desc: "Stay confident knowing your property, staff, and assets are continuously monitored and protected."
        },
        {
          title: "Reduced Losses",
          desc: "Minimize financial losses by preventing incidents and responding quickly to security threats."
        }
      ]

    },
    {
      id: 'led-display-boards',
      icon: <FaTv className='text-6xl text-blue-600' />,
      title: "LED Display Boards",
      desc: "Comprehensive solutions for LED display boards, including assembling, installation, maintenance, and repairs, ensuring high-quality, reliable, and uninterrupted display performance.",
      fullDescription: `Our LED display board solutions deliver high-impact visual communication for indoor and outdoor environments. Designed for clarity, brightness, and durability, our displays ensure your message stands out in all lighting and weather conditions.

We handle the complete lifecycle—from custom design and professional assembly to precise installation and seamless content integration. Our LED systems are energy-efficient, reliable, and built to operate continuously with minimal downtime.

With regular maintenance, quick repair services, and technical support, we ensure long-lasting performance and uninterrupted operation—helping you engage audiences, enhance branding, and communicate effectively.`
      , features: [
        "Custom LED Design",
        "Professional Assembly",
        "Expert Installation",
        "Real-time Content Management",
        "Energy-efficient Solutions",
        "Weather-resistant Designs",
        "Regular Maintenance",
        "Prompt Repairs & Support"
      ],
      images: [
        "/images/services/led/1.png",
        "/images/services/led/2.png",
        "/images/services/led/3.png",
        "/images/services/led/4.png",
        "/images/services/led/5.png",
        "/images/services/led/6.png",
        "/images/services/led/7.png",
        "/images/services/led/8.png"
      ],
      highlights: [
        { icon: "tv", text: "High Brightness" },
        { icon: "tools", text: "Professional Installation" },
        { icon: "check", text: "Long Lifespan" },
        { icon: "support", text: "Maintenance Support" }
      ]
      ,
      benefits: [
        {
          title: "High Visibility",
          desc: "Bright, clear displays ensure your message remains visible even in daylight and outdoor environments."
        },
        {
          title: "Reliable Performance",
          desc: "Professionally assembled systems deliver consistent performance with minimal downtime."
        },
        {
          title: "Extended Lifespan",
          desc: "High-quality components and proper installation increase durability and operational life."
        },
        {
          title: "Cost-effective Operation",
          desc: "Energy-efficient LED technology reduces power consumption and maintenance costs."
        },
        {
          title: "Professional Appearance",
          desc: "Modern LED displays enhance brand image and attract customer attention."
        },
        {
          title: "Maximum Uptime",
          desc: "Regular maintenance and prompt repairs ensure uninterrupted display operation."
        }
      ]

    },
    {
      id: 'pcb-designing-development',
      icon: <FaMicrochip className='text-6xl text-blue-600' />,
      title: "PCB Designing & Development",
      desc: "Comprehensive PCB designing and development services, including circuit design, layout planning, prototyping, and assembly, ensuring high-performance, reliable, and efficient electronic solutions for your projects.",
      fullDescription: `Our PCB designing and development services transform your ideas into reliable, high-performance electronic circuits. We focus on precision engineering, optimized layouts, and component selection to ensure electrical stability and efficiency.

From schematic design and simulation to prototyping and assembly, we follow industry best practices to deliver robust and scalable PCB solutions for industrial, commercial, and custom applications.

With thorough testing, quality assurance, and expert technical support, we ensure dependable performance, reduced production risks, and faster time-to-market for your electronic products.`
      , features: [
        "Circuit Design & Analysis",
        "Schematic Layout",
        "PCB Layout Planning",
        "Simulation & Testing",
        "Prototyping Services",
        "Component Selection",
        "Assembly Services",
        "Quality Assurance"
      ],
      images: [
        "/images/services/pcb/1.png",
        "/images/services/pcb/2.png",
        "/images/services/pcb/3.png",
        "/images/services/pcb/4.png",
        "/images/services/pcb/5.png",
        "/images/services/pcb/6.png",
        "/images/services/pcb/7.png",
        "/images/services/pcb/8.png"
      ],
      highlights: [
        { icon: "chip", text: "Precision Design" },
        { icon: "tools", text: "Expert Engineering" },
        { icon: "check", text: "Quality Assured" },
        { icon: "support", text: "Technical Support" }
      ]
      ,
      benefits
        : [
          {
            title: "Custom Solutions",
            desc: "PCB designs tailored specifically to your functional, size, and performance requirements."
          },
          {
            title: "Optimized Performance",
            desc: "Efficient layouts and component selection ensure reliable electrical performance."
          },
          {
            title: "Faster Time-to-market",
            desc: "Streamlined design and prototyping reduce development cycles."
          },
          {
            title: "Cost-effective Design",
            desc: "Optimized component usage minimizes manufacturing and production costs."
          },
          {
            title: "High Reliability",
            desc: "Thorough testing and quality checks ensure long-term operational stability."
          },
          {
            title: "Expert Guidance",
            desc: "Professional engineering support throughout design, testing, and deployment."
          }
        ]

    },
    {
      id: 'microcontroller-services',
      icon: <FaProjectDiagram className='text-6xl text-blue-600' />,
      title: "Microcontroller Services",
      desc: "Complete microcontroller solutions, including programming, integration, and testing, to develop efficient, reliable, and intelligent electronic systems for your applications.",
      fullDescription: `Our microcontroller services provide intelligent control at the heart of your electronic systems. We develop efficient firmware and embedded software tailored to your specific functional and performance requirements.

From programming and system integration to real-time testing and optimization, we ensure stable operation and seamless communication between sensors, actuators, and external devices.

With structured debugging, documentation, and ongoing technical support, we deliver reliable microcontroller-based solutions that enhance automation, responsiveness, and long-term system reliability.`
      , features: [
        "Microcontroller Programming",
        "Firmware Development",
        "System Integration",
        "Embedded Software Design",
        "Real-time Testing",
        "Performance Optimization",
        "Debugging & Troubleshooting",
        "Technical Support"
      ],
      images: [
        "/images/services/micro/1.png",
        "/images/services/micro/2.png",
        "/images/services/micro/3.png",
        "/images/services/micro/4.png",
        "/images/services/micro/5.png",
        "/images/services/micro/6.png",
        "/images/services/micro/7.png",
        "/images/services/micro/8.png"
      ],
      highlights: [
        { icon: "chip", text: "Embedded Systems" },
        { icon: "code", text: "Firmware Development" },
        { icon: "check", text: "Reliable Performance" },
        { icon: "support", text: "Ongoing Support" }
      ]
      ,
      benefits: [
        {
          title: "Intelligent Systems",
          desc: "Smart microcontroller-based solutions enable automation and intelligent decision-making."
        },
        {
          title: "Reliable Operation",
          desc: "Stable firmware and robust integration ensure consistent system performance."
        },
        {
          title: "Custom Functionality",
          desc: "Firmware developed to match your exact application requirements."
        },
        {
          title: "Optimized Performance",
          desc: "Efficient code and hardware utilization improve speed and reliability."
        },
        {
          title: "Quick Integration",
          desc: "Seamless integration with sensors, displays, and external systems."
        },
        {
          title: "Ongoing Support",
          desc: "Continuous technical assistance for updates, debugging, and enhancements."
        }
      ]

    },
    {
      id: 'wired-wireless-networking',
      icon: <FaNetworkWired className='text-6xl text-blue-600' />,
      title: "Wired and Wireless Networking",
      desc: "End-to-end network management including setup, configuration, monitoring, and troubleshooting to maintain reliable and secure connectivity.",
      fullDescription: `Our wired and wireless networking solutions ensure fast, secure, and reliable connectivity across your organization. We design and deploy network infrastructures that support smooth data flow, scalability, and uninterrupted communication.

From structured cabling and Wi-Fi configuration to network security and performance optimization, we deliver end-to-end solutions tailored to your operational needs.

With proactive monitoring, troubleshooting, and technical support, we minimize downtime and ensure your network remains stable, secure, and ready to support growing business demands.`
      , features: [
        "Network Design & Planning",
        "Wired Infrastructure Setup",
        "WiFi/Wireless Configuration",
        "Network Security",
        "Continuous Monitoring",
        "Performance Optimization",
        "Troubleshooting & Support",
        "Backup & Redundancy"
      ],
      images: [
        "/images/services/wire/1.png",
        "/images/services/wire/2.png",
        "/images/services/wire/3.png",
        "/images/services/wire/4.png",
        "/images/services/wire/5.png",
        "/images/services/wire/6.png",
        "/images/services/wire/7.png",
        "/images/services/wire/8.png"
      ],
      highlights: [
        { icon: "network", text: "Stable Connectivity" },
        { icon: "shield", text: "Network Security" },
        { icon: "clock", text: "24/7 Monitoring" },
        { icon: "check", text: "Scalable Networks" }
      ]
      ,
      benefits: [
        {
          title: "Reliable Connectivity",
          desc: "Stable and secure networks ensure uninterrupted data communication."
        },
        {
          title: "Enhanced Security",
          desc: "Network security measures protect against unauthorized access and threats."
        },
        {
          title: "Reduced Downtime",
          desc: "Proactive monitoring helps identify and resolve issues quickly."
        },
        {
          title: "Scalable Infrastructure",
          desc: "Network designs grow easily with your business needs."
        },
        {
          title: "Improved Performance",
          desc: "Optimized configurations deliver faster and more reliable connections."
        },
        {
          title: "24/7 Support",
          desc: "Technical support ensures network availability at all times."
        }
      ]

    },
    {
      id: 'custom-automation-solutions',
      icon: <FaCogs className='text-6xl text-blue-600' />,
      title: "Custom Automation Solutions",
      desc: "P-CATS delivers custom automation solutions with IoT, PLCs, and sensors. Designed for industries, utilities, and smart buildings, our systems reduce manual effort and enable real-time, intelligent control.",
      fullDescription: `Our custom automation solutions combine IoT, PLCs, and smart sensors to streamline operations and reduce manual intervention. We design systems that deliver real-time control, monitoring, and intelligent decision-making.

From concept design and system integration to dashboards and analytics, our automation solutions improve efficiency, accuracy, and operational visibility across industries and smart infrastructure.

With scalable architecture and long-term support, we ensure your automation systems adapt seamlessly as your operational needs evolve.`
      , features: [
        "IoT Integration",
        "PLC Programming",
        "Sensor Integration",
        "Real-time Monitoring",
        "Automated Control Systems",
        "Data Analytics",
        "Custom Dashboards",
        "Scalable Architecture"
      ],
      images: [
        "/images/services/auto/1.png",
        "/images/services/auto/2.png",
        "/images/services/auto/3.png",
        "/images/services/auto/4.png",
        "/images/services/auto/5.png",
        "/images/services/auto/6.png",
        "/images/services/auto/7.png",
        "/images/services/auto/8.png"
      ],
      highlights: [
        { icon: "cogs", text: "Smart Automation" },
        { icon: "chart", text: "Real-time Control" },
        { icon: "check", text: "Cost Efficient" },
        { icon: "support", text: "Custom Support" }
      ]
      ,
      benefits: [
        {
          title: "Reduced Manual Work",
          desc: "Automation minimizes repetitive tasks and human intervention."
        },
        {
          title: "Increased Efficiency",
          desc: "Streamlined processes improve productivity and operational accuracy."
        },
        {
          title: "Real-time Intelligence",
          desc: "Live data monitoring enables faster and smarter decisions."
        },
        {
          title: "Cost Savings",
          desc: "Lower labor and operational costs through intelligent automation."
        },
        {
          title: "Improved Control",
          desc: "Centralized dashboards provide full system visibility and control."
        },
        {
          title: "Scalability",
          desc: "Automation systems can expand as operational demands grow."
        }
      ]

    },
    {
      id: 'ai-based-system-development',
      icon: <FaBrain className='text-6xl text-blue-600' />,
      title: "AI-Based System Development",
      desc: "Our AI-based system development, creating intelligent solutions for automation, data analysis, and smart decision-making, enabling businesses to optimize operations and gain a competitive edge.",
      fullDescription: `Our AI-based system development services deliver intelligent solutions that automate processes, analyze complex data, and enable predictive decision-making. We design AI models tailored to your business goals and operational challenges.

From machine learning and computer vision to analytics and automation, our systems convert raw data into actionable insights that improve efficiency and competitiveness.

With continuous optimization, integration support, and scalable architecture, our AI solutions evolve with your business—delivering long-term value and innovation.`
      , features: [
        "Machine Learning Models",
        "Data Analysis & Insights",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Automated Decision Systems",
        "Integration Services",
        "Continuous Learning"
      ],
      images: [
        "/images/services/ai/1.png",
        "/images/services/ai/2.png",
        "/images/services/ai/3.png",
        "/images/services/ai/4.png",
        "/images/services/ai/5.png",
        "/images/services/ai/6.png",
        "/images/services/ai/7.png",
        "/images/services/ai/8.png"
      ],
      highlights: [
        { icon: "brain", text: "Intelligent AI" },
        { icon: "chart", text: "Data Insights" },
        { icon: "cogs", text: "Process Automation" },
        { icon: "check", text: "Future Ready" }
      ]
      ,
      benefits: [
        {
          title: "Intelligent Automation",
          desc: "AI-driven systems automate complex processes with precision."
        },
        {
          title: "Data-driven Insights",
          desc: "Advanced analytics convert raw data into actionable insights."
        },
        {
          title: "Competitive Edge",
          desc: "Smart AI solutions help businesses stay ahead in the market."
        },
        {
          title: "Improved Efficiency",
          desc: "Automation and prediction reduce delays and inefficiencies."
        },
        {
          title: "Predictive Capabilities",
          desc: "AI models forecast trends and potential issues before they occur."
        },
        {
          title: "Smart Solutions",
          desc: "Adaptive systems learn and improve over time."
        }
      ]

    },
    {
      id: 'software-web-development',
      icon: <FaLaptopCode className='text-6xl text-blue-600' />,
      title: "Software Development & Web Designing",
      desc: "We delivers custom software for web, desktop, and automation. Secure, scalable, and integrated solutions that streamline operations and ensure efficiency, flexibility, and long-term performance.",
      fullDescription: `Our software development and web designing services deliver secure, scalable, and high-performance digital solutions tailored to your business workflows. We design systems that are intuitive, reliable, and future-ready.

From web platforms and desktop applications to APIs and database architecture, we ensure seamless integration and efficient operation across environments.

With secure coding practices, ongoing maintenance, and performance optimization, we provide long-term software solutions that support growth, adaptability, and operational excellence.`
      , features: [
        "Web Development",
        "Desktop Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "Security Implementation",
        "Cloud Integration",
        "Maintenance & Updates"
      ],
      images: [
        "/images/services/soft/1.png",
        "/images/services/soft/2.png",
        "/images/services/soft/3.png",
        "/images/services/soft/4.png",
        "/images/services/soft/5.png",
        "/images/services/soft/6.png",
        "/images/services/soft/7.png",
        "/images/services/soft/8.png"
      ],
      highlights: [
        { icon: "code", text: "Custom Software" },
        { icon: "laptop", text: "Modern UI/UX" },
        { icon: "shield", text: "Secure Systems" },
        { icon: "support", text: "Long-term Support" }
      ]
      ,
      benefits: [
        {
          title: "Custom Solutions",
          desc: "Software designed specifically to match your business workflows."
        },
        {
          title: "Scalable Architecture",
          desc: "Systems built to grow with increasing users and data."
        },
        {
          title: "Enhanced Security",
          desc: "Secure coding practices protect data and system integrity."
        },
        {
          title: "Improved Operations",
          desc: "Automation and integration streamline business processes."
        },
        {
          title: "Long-term Support",
          desc: "Ongoing maintenance ensures reliability and performance."
        },
        {
          title: "Future-proof Design",
          desc: "Modern technologies ensure compatibility with future upgrades."
        }
      ]

    }
  ];



  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    if (service?.images?.length) {
      setCurrentIndex(0);
      setActiveImage(service.images[0]);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Service Not Found</h1>
      </div>
    );
  }
  const nextImage = () => {
    const next = (currentIndex + 1) % service.images.length;
    setCurrentIndex(next);
    setActiveImage(service.images[next]);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + service.images.length) % service.images.length;
    setCurrentIndex(prev);
    setActiveImage(service.images[prev]);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
    setActiveImage(service.images[index]);
  };


  const featureIcons = {
    // CCTV
    "HD Camera Installation": FaCamera,
    "24/7 Monitoring": FaClock,
    "AI + Night Vision Technology": FaBrain,
    "Remote Access & Mobile Apps": FaMobileAlt,
    "Motion Detection & Alerts": FaBell,
    "Video Storage & Backup": FaHdd,
    "Professional Installation": FaTools,
    "Maintenance & Support": FaHeadset,

    // LED Display
    "Custom LED Design": FaTv,
    "Professional Assembly": FaTools,
    "Expert Installation": FaTools,
    "Real-time Content Management": FaLaptopCode,
    "Energy-efficient Solutions": FaCheckCircle,
    "Weather-resistant Designs": FaShieldAlt,
    "Regular Maintenance": FaHeadset,
    "Prompt Repairs & Support": FaTools,

    // PCB
    "Circuit Design & Analysis": FaMicrochip,
    "Schematic Layout": FaProjectDiagram,
    "PCB Layout Planning": FaMicrochip,
    "Simulation & Testing": FaCheckCircle,
    "Prototyping Services": FaCogs,
    "Component Selection": FaMicrochip,
    "Assembly Services": FaTools,
    "Quality Assurance": FaShieldAlt,

    // Microcontroller
    "Microcontroller Programming": FaMicrochip,
    "Firmware Development": FaLaptopCode,
    "System Integration": FaProjectDiagram,
    "Embedded Software Design": FaLaptopCode,
    "Real-time Testing": FaCheckCircle,
    "Performance Optimization": FaCogs,
    "Debugging & Troubleshooting": FaTools,
    "Technical Support": FaHeadset,

    // Networking
    "Network Design & Planning": FaNetworkWired,
    "Wired Infrastructure Setup": FaNetworkWired,
    "WiFi/Wireless Configuration": FaNetworkWired,
    "Network Security": FaShieldAlt,
    "Continuous Monitoring": FaClock,
    "Network Optimization": FaCogs,
    "Troubleshooting & Support": FaTools,
    "Backup & Redundancy": FaHdd,

    // Automation
    "IoT Integration": FaCogs,
    "PLC Programming": FaMicrochip,
    "Sensor Integration": FaMicrochip,
    "Real-time Monitoring": FaClock,
    "Automated Control Systems": FaCogs,
    "Data Analytics": FaBrain,
    "Custom Dashboards": FaLaptopCode,
    "Scalable Architecture": FaProjectDiagram,

    // AI
    "Machine Learning Models": FaBrain,
    "Data Analysis & Insights": FaBrain,
    "Predictive Analytics": FaBrain,
    "Natural Language Processing": FaBrain,
    "Computer Vision Solutions": FaCamera,
    "Automated Decision Systems": FaCogs,
    "Integration Services": FaProjectDiagram,
    "Continuous Learning": FaBrain,

    // Software
    "Web Development": FaLaptopCode,
    "Desktop Applications": FaLaptopCode,
    "Mobile Apps": FaMobileAlt,
    "API Development": FaProjectDiagram,
    "Database Design": FaHdd,
    "Security Implementation": FaShieldAlt,
    "Cloud Integration": FaNetworkWired,
    "Maintenance & Updates": FaHeadset
  };

  const highlightIcons = {
    shield: FaShieldAlt,
    camera: FaCamera,
    clock: FaClock,
    check: FaCheckCircle,
    tools: FaTools,
    support: FaHeadset,
    chip: FaMicrochip,
    code: FaLaptopCode,
    brain: FaBrain,
    cogs: FaCogs,
    chart: FaProjectDiagram,
    network: FaNetworkWired,
    tv: FaTv,
    laptop: FaLaptopCode
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">

      {/* HEADER */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 font-semibold hover:bg-blue-50 px-3 py-1 rounded transition"
          >
            ← Back to Services
          </button>
          <img src="/favicon.png" alt="Logo" className="h-8" />
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">

        {/* IMAGE + DETAILS */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 mb-16 items-start">

          {/* IMAGE GALLERY */}
          <div>

            {/* MAIN IMAGE WITH BOTTOM ARROWS */}
            <div className="relative">

              {/* IMAGE BOX */}
              <div
                onClick={() => setShowModal(true)}
                className="bg-white rounded-2xl shadow-lg
               h-[300px] md:h-[420px]
               flex items-center justify-center
               cursor-zoom-in p-6"
              >
                <img
                  src={activeImage}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain
                 transition-all duration-300"
                />
              </div>
              {/* BOTTOM ARROWS */}
              <div className="absolute left-0 right-0 -bottom-6
                flex justify-between px-10 pointer-events-none">

                {/* PREV */}
                <button
                  onClick={prevImage}
                  className="pointer-events-auto
               w-12 h-12
               flex items-center justify-center
               rounded-full
               bg-blue-500 text-white
               shadow-lg shadow-blue-500/30
               hover:bg-blue-700
               hover:scale-105
               transition-all duration-200"
                >
                  ‹
                </button>

                {/* NEXT */}
                <button
                  onClick={nextImage}
                  className="pointer-events-auto
               w-12 h-12
               flex items-center justify-center
               rounded-full
               bg-blue-500 text-white
               shadow-lg shadow-blue-500/30
               hover:bg-blue-700
               hover:scale-105
               transition-all duration-200"
                >
                  ›
                </button>

              </div>
            </div>


            {/* THUMBNAILS WITH LIMIT = 4 */}
            <div className="flex items-center justify-center gap-3 mt-10">

              {/* THUMB LEFT */}
              <button
                onClick={() =>
                  setCurrentIndex(Math.max(currentIndex - 1, 0))
                }
                disabled={currentIndex === 0}
                className="p-2 text-xl text-blue-600 hover:bg-blue-50 rounded transition"
              >
                ‹
              </button>

              {/* THUMB STRIP */}
              <div className="flex gap-3 overflow-hidden">
                {service.images
                  .slice(
                    Math.floor(currentIndex / VISIBLE_THUMBS) * VISIBLE_THUMBS,
                    Math.floor(currentIndex / VISIBLE_THUMBS) * VISIBLE_THUMBS + VISIBLE_THUMBS
                  )
                  .map((img, idx) => {
                    const realIndex =
                      Math.floor(currentIndex / VISIBLE_THUMBS) * VISIBLE_THUMBS + idx;

                    return (
                      <button
                        key={realIndex}
                        onClick={() => selectImage(realIndex)}
                        className={`border rounded-lg p-2 transition ${realIndex === currentIndex
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
                    );
                  })}
              </div>

              {/* THUMB RIGHT */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    Math.min(currentIndex + 1, service.images.length - 1)
                  )
                }
                disabled={currentIndex === service.images.length - 1}
                className="p-2 text-xl disabled:opacity-30"
              >
                ›
              </button>
            </div>
          </div>

          <div >

            {/* SERVICE TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line mb-8 ">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {service.highlights.map((item, index) => {
                const Icon = highlightIcons[item.icon] || FaCheckCircle;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2
                   text-blue-600 font-medium
                   bg-blue-50 px-4 py-2
                   rounded-full
                   shadow-sm"
                  >
                    <Icon className="text-sm" />
                    {item.text}
                  </div>
                );
              })}
            </div>


            {/* DESCRIPTION */}

            {/* CTA */}
            <button
              onClick={() => navigate('/#contact')}
              className="px-8 py-4 bg-blue-600 text-white
               rounded-full font-semibold
               hover:bg-blue-700 transition shadow-lg"
            >
              Enquiry
            </button>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, i) => {
              const Icon = featureIcons[feature] || FaCheckCircle;

              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow
                 hover:shadow-lg transition
                 flex items-center gap-4"
                >
                  <div className="text-blue-600 text-2xl">
                    <Icon />
                  </div>

                  <p className="font-semibold text-gray-700">
                    {feature}
                  </p>
                </div>
              );
            })}

          </div>
        </div>


        {/* BENEFITS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Why Choose This Service?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow
                   hover:shadow-lg transition"
              >
                <h3 className="font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600
                      rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
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
          className="fixed inset-0 bg-black/80 z-50
                   flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <img
            src={activeImage}
            alt="zoom"
            className="max-w-[90%] max-h-[90%]
                     rounded-xl shadow-2xl"
          />
        </div>
      )}
    </motion.div>
  );


}

export default ServiceDetail;
