import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaDoorOpen, FaSms, FaTachometerAlt, FaCamera, FaDesktop, FaSatelliteDish, FaDatabase, FaWater, FaCheckCircle, FaTools, FaClock, FaShieldAlt, FaMobileAlt, FaBell, FaHdd, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const VISIBLE_THUMBS = 4;

  const products = [
    {
      id: 'smart-access-control',
      icon: <FaDoorOpen className='text-6xl text-blue-600' />,
      title: "Smart Access Control",
      desc: "We provides access control with RFID, biometrics, PIN, and app-based systems, offering secure, real-time monitoring for offices, factories, and schools.",
fullDescription: `Our Smart Access Control System delivers advanced security by combining RFID cards, biometric authentication, PIN-based access, and mobile app control into a single intelligent platform.

Designed for offices, factories, schools, and high-security facilities, the system ensures controlled access, real-time monitoring, and complete visibility of entry and exit activities. Detailed audit trails and access logs help administrators track movement and maintain compliance effortlessly.

With scalable architecture, remote management, and seamless integration with existing security infrastructure, our access control solution enhances safety, reduces manual oversight, and provides complete peace of mind.`
,      images: [
        "/images/products/access/1.png",
        "/images/products/access/2.png",
        "/images/products/access/3.png",
        "/images/products/access/4.png"
      ],
      features: [
        "RFID Card Access",
        "Biometric Authentication (Fingerprint, Face Recognition)",
        "PIN Code Entry",
        "Mobile App Control",
        "Real-time Monitoring",
        "Audit Trail & Reports",
        "Multi-level Access Permissions",
        "Emergency Override Options"
      ],
      highlights: [
        { icon: "shield", text: "High Security" },
        { icon: "camera", text: "Biometric Access" },
        { icon: "clock", text: "24/7 Monitoring" },
        { icon: "check", text: "Trusted Solution" }
      ],
      benefits: [
        { title: "Enhanced Security", desc: "Multiple authentication methods provide layered security for your facilities." },
        { title: "Easy User Management", desc: "Simple administration of access permissions and user profiles." },
        { title: "Real-time Access Logs", desc: "Track all access events with detailed audit trails." },
        { title: "Scalable Solution", desc: "System grows with your organization's needs." },
        { title: "Cost-effective", desc: "Reduce costs with automated access control and reduced need for security personnel." },
        { title: "Reduced Manual Oversight", desc: "Minimize human error with automated systems." }
      ]
    },
    {
      id: 'sms-alert-system',
      icon: <FaSms className='text-6xl text-blue-600' />,
      title: "SMS Alert System",
      desc: "We provides a reliable SMS Alert System that delivers instant notifications from fire alarms, access control, and security systems. Ideal for homes, offices, and sensitive sites.",
fullDescription: `Our SMS Alert System ensures instant communication during critical events by delivering real-time notifications directly to mobile phones.

Integrated with fire alarms, access control systems, and security devices, the system immediately notifies responsible personnel about alarms, faults, or unauthorized access attempts—without relying on internet connectivity.

With high delivery reliability, customizable alert messages, and support for multiple recipients, our SMS Alert System enables quick response, minimizes risks, and strengthens overall safety management.`
,      images: [
        "/images/products/sms/1.png",
        "/images/products/sms/2.png",
        "/images/products/sms/3.png",
        "/images/products/sms/4.png"
      ],
      features: [
        "Instant SMS Notifications",
        "Integration with Fire Alarms",
        "Access Control Alerts",
        "Security System Integration",
        "Multiple Recipient Support",
        "Customizable Alert Messages",
        "Delivery Confirmation",
        "24/7 Monitoring"
      ],
      highlights: [
        { icon: "bell", text: "Instant Alerts" },
        { icon: "check", text: "Reliable Delivery" },
        { icon: "shield", text: "High Security" },
        { icon: "clock", text: "24/7 Support" }
      ],
      benefits: [
        { title: "Immediate Response Capability", desc: "Receive alerts instantly on your mobile device." },
        { title: "Works Without Internet", desc: "SMS works even without data connectivity." },
        { title: "Wide Coverage Area", desc: "SMS reaches any mobile phone with cellular coverage." },
        { title: "Reliable Notification Delivery", desc: "High delivery rate ensures critical alerts reach recipients." },
        { title: "Easy Integration", desc: "Simple integration with existing security systems." },
        { title: "Cost-effective Solution", desc: "Low operational costs with minimal infrastructure." }
      ]
    },
    {
      id: 'speed-monitoring-systems',
      icon: <FaTachometerAlt className='text-6xl text-blue-600' />,
      title: "Speed Monitoring Systems",
      desc: "We provides accurate Speed Monitoring Systems with radar sensors and LED displays to track and display vehicle speed. Ideal for roads, school zones, and industrial gates to improve traffic safety with real-time alerts.",
fullDescription: `Our Speed Monitoring Systems use advanced radar technology to accurately detect vehicle speeds and display them in real time through high-visibility LED boards.

Ideal for roads, school zones, industrial premises, and gated communities, the system promotes safe driving behavior by increasing speed awareness and compliance.

With data logging, photo evidence support, and weather-resistant design, the system provides reliable performance, actionable traffic insights, and long-term safety improvements.`
,      images: [
        "/images/products/speed/1.png",
        "/images/products/speed/2.png",
        "/images/products/speed/3.png",
        "/images/products/speed/4.png"
      ],
      features: [
        "Accurate Radar Sensors",
        "LED Display Integration",
        "Real-time Speed Detection",
        "Data Logging",
        "Photo Enforcement",
        "Multi-lane Monitoring",
        "Weather Resistant",
        "Customizable Alerts"
      ],
      highlights: [
        { icon: "check", text: "Accurate Detection" },
        { icon: "camera", text: "Photo Evidence" },
        { icon: "shield", text: "Safety First" },
        { icon: "clock", text: "Real-time Monitoring" }
      ],
      benefits: [
        { title: "Improved Traffic Safety", desc: "Deter speeding and reduce traffic accidents." },
        { title: "Accident Reduction", desc: "Enforce speed limits to create safer road environments." },
        { title: "Speed Compliance", desc: "Monitor compliance and collect enforcement data." },
        { title: "Data Analysis Reports", desc: "Detailed reports for traffic management analysis." },
        { title: "Deterrent Effect", desc: "Visible systems discourage speeding behavior." },
        { title: "Long-range Detection", desc: "Detect speeds from significant distances." }
      ]
    },
    {
      id: 'image-process-report-system',
      icon: <FaCamera className='text-6xl text-blue-600' />,
      title: "Image Process and Report System",
      desc: "We delivers smart Image Processing and Report Systems using AI to analyze visuals for ANPR, motion detection, and surveillance.",
fullDescription: `Our Image Processing and Report System leverages AI-powered algorithms to analyze visual data from surveillance cameras with high accuracy and speed.

Supporting features such as Automatic Number Plate Recognition (ANPR), motion detection, facial recognition, and object tracking, the system converts raw video feeds into meaningful intelligence.

Automated reporting, cloud integration, and scalable architecture make it ideal for security, traffic monitoring, and analytics-driven surveillance environments.`
,      images: [
        "/images/products/iprs/1.png",
        "/images/products/iprs/2.png",
        "/images/products/iprs/3.png",
        "/images/products/iprs/4.png"
      ],
      features: [
        "AI-Powered Analysis",
        "ANPR (Automatic Number Plate Recognition)",
        "Motion Detection",
        "Object Tracking",
        "Facial Recognition",
        "Vehicle Detection",
        "Automated Reporting",
        "Cloud Integration"
      ],
      highlights: [
        { icon: "brain", text: "AI Powered" },
        { icon: "camera", text: "Advanced Vision" },
        { icon: "check", text: "Automated Reports" },
        { icon: "shield", text: "Security Ready" }
      ],
      benefits: [
        { title: "Automated Surveillance", desc: "Intelligent systems monitor 24/7 without human intervention." },
        { title: "Reduced Manual Work", desc: "Automation reduces need for manual monitoring." },
        { title: "High Accuracy Detection", desc: "AI algorithms provide highly accurate detection rates." },
        { title: "Detailed Reports", desc: "Comprehensive automated reports for analysis." },
        { title: "Easy Integration", desc: "Seamless integration with existing camera systems." },
        { title: "Scalable Solution", desc: "Expand system capabilities as your needs grow." }
      ]
    },
    {
      id: 'device-management-system',
      icon: <FaDesktop className='text-6xl text-blue-600' />,
      title: "Device Management System",
      desc: "We provides advanced Device Monitoring Systems for remote device control and real-time feedback. Our DMS enables users to receiving accurate (DI/DO) status updates.",
fullDescription: `Our Device Management System provides centralized monitoring and remote control of multiple devices with real-time DI/DO status updates.

Designed for industrial automation, utilities, and smart infrastructure, the system enables operators to monitor device health, trigger actions remotely, and analyze historical performance data.

With automated scheduling, secure access, and an intuitive dashboard, our DMS improves operational efficiency, reduces downtime, and simplifies device management.`
,      images: [
        "/images/products/dms/1.png",
        "/images/products/dms/2.png",
        "/images/products/dms/3.png",
        "/images/products/dms/4.png"
      ],
      features: [
        "Remote Device Control",
        "Real-time Monitoring",
        "DI/DO Status Updates",
        "Multi-device Support",
        "Centralized Dashboard",
        "Historical Data Logs",
        "Automated Scheduling",
        "Integration Capabilities"
      ],
      highlights: [
        { icon: "check", text: "Remote Control" },
        { icon: "clock", text: "Real-time Updates" },
        { icon: "shield", text: "Secure Access" },
        { icon: "tools", text: "Dashboard Tools" }
      ],
      benefits: [
        { title: "Centralized Control", desc: "Manage all devices from a single dashboard." },
        { title: "Reduced Response Time", desc: "Quick control and monitoring of critical systems." },
        { title: "Better Asset Management", desc: "Track and manage device status efficiently." },
        { title: "Automated Operations", desc: "Set automated schedules and responses." },
        { title: "Cost Savings", desc: "Reduce operational costs through automation." },
        { title: "Improved Efficiency", desc: "Streamline device operations and monitoring." }
      ]
    },
    {
      id: 'vehicle-tracking-system',
      icon: <FaSatelliteDish className='text-6xl text-blue-600' />,
      title: "Vehicle Tracking System",
      desc: "We delivers smart Vehicle Tracking Systems with real-time GPS monitoring, geo-fencing, alerts, and mobile access. Ideal for fleets, school buses, and logistics.",
fullDescription: `Our Vehicle Tracking System delivers real-time GPS-based monitoring to track vehicle location, movement, and behavior with precision.

Ideal for fleet operators, school transportation, logistics companies, and service vehicles, the system offers geo-fencing alerts, route optimization, and historical playback.

By improving visibility, fuel efficiency, and safety compliance, the solution helps organizations optimize fleet operations and protect valuable assets.`
,      images: [
        "/images/products/vts/1.png",
        "/images/products/vts/2.png",
        "/images/products/vts/3.png",
        "/images/products/vts/4.png"
    
      ],
      features: [
        "Real-time GPS Tracking",
        "Geo-fencing Alerts",
        "Route Optimization",
        "Driver Behavior Monitoring",
        "Fuel Efficiency Tracking",
        "Mobile App Access",
        "Historical Route Playback",
        "Multi-vehicle Dashboard"
      ],
      highlights: [
        { icon: "check", text: "Real-time Tracking" },
        { icon: "shield", text: "Security Alerts" },
        { icon: "camera", text: "Journey Recording" },
        { icon: "clock", text: "24/7 Monitoring" }
      ],
      benefits: [
        { title: "Fleet Optimization", desc: "Optimize routes and reduce travel time." },
        { title: "Reduced Fuel Costs", desc: "Monitor fuel consumption and improve efficiency." },
        { title: "Enhanced Safety", desc: "Monitor driver behavior and improve road safety." },
        { title: "Improved Efficiency", desc: "Better planning and resource allocation." },
        { title: "Better Customer Service", desc: "Provide accurate ETA to customers." },
        { title: "Asset Protection", desc: "Prevent theft and unauthorized use." }
      ]
    },
    {
      id: 'online-data-logger',
      icon: <FaDatabase className='text-6xl text-blue-600' />,
      title: "Online Data Logger",
      desc: "We provides smart Online Data Logger Systems for real-time tracking of temperature, flow, fuel, and more. With wireless/cloud access, alerts, and analytics.",
fullDescription: `Our Online Data Logger system enables continuous real-time monitoring of critical parameters such as temperature, flow rate, fuel levels, and more.

With cloud-based storage, automated alerts, and advanced analytics, the system transforms raw sensor data into actionable insights.

Designed for industries, utilities, and infrastructure monitoring, the solution improves decision-making, supports predictive maintenance, and optimizes resource utilization.`
,      images: [
        "/images/products/odl/1.png",
        "/images/products/odl/2.png",
        "/images/products/odl/3.png",
        "/images/products/odl/4.png"

      ],
      features: [
        "Real-time Data Logging",
        "Cloud Storage",
        "Temperature Monitoring",
        "Flow Rate Tracking",
        "Fuel Level Monitoring",
        "Automated Alerts",
        "Data Analytics",
        "Mobile Access"
      ],
      highlights: [
        { icon: "check", text: "Real-time Logging" },
        { icon: "clock", text: "24/7 Monitoring" },
        { icon: "shield", text: "Data Security" },
        { icon: "bell", text: "Smart Alerts" }
      ],
      benefits: [
        { title: "Continuous Monitoring", desc: "Monitor critical parameters round-the-clock." },
        { title: "Instant Alerts", desc: "Get notified of anomalies and threshold breaches." },
        { title: "Data-driven Decisions", desc: "Use analytics to make informed decisions." },
        { title: "Historical Analysis", desc: "Analyze trends and patterns over time." },
        { title: "Predictive Maintenance", desc: "Predict and prevent equipment failures." },
        { title: "Cost Optimization", desc: "Reduce waste and optimize resource usage." }
      ]
    },
    {
      id: 'liquid-level-monitoring-system',
      icon: <FaWater className='text-6xl text-blue-600' />,
      title: "Liquid Level Monitoring System",
      desc: "Our Smart safety platform powered by IoT sensors to detect, monitor, and alert against environmental and operational hazards in real-time.",
fullDescription: `Our Liquid Level Monitoring System uses IoT-enabled sensors to monitor liquid levels in tanks, reservoirs, and storage units in real time.

The system provides instant alerts for overflow, leakage, or critical level thresholds, ensuring safety and operational reliability.

With cloud dashboards, historical data analysis, and remote access, the solution helps organizations maintain compliance, prevent losses, and optimize liquid resource management.`
,      images: [
        "/images/products/llms/1.png",
        "/images/products/llms/2.png",
        "/images/products/llms/3.png",
        "/images/products/llms/4.png"
       
      ],
      features: [
        "Real-time Level Monitoring",
        "IoT Sensor Integration",
        "Instant Alerts",
        "Historical Data Tracking",
        "Overflow Prevention",
        "Multi-tank Support",
        "Cloud Dashboard",
        "Mobile Notifications"
      ],
      highlights: [
        { icon: "check", text: "IoT Integration" },
        { icon: "bell", text: "Smart Alerts" },
        { icon: "shield", text: "Overflow Safety" },
        { icon: "clock", text: "Real-time Monitoring" }
      ],
      benefits: [
        { title: "Prevent Overflow Incidents", desc: "Avoid costly spills and safety incidents." },
        { title: "Resource Optimization", desc: "Monitor and optimize resource usage." },
        { title: "Instant Notifications", desc: "Get alerted immediately for critical levels." },
        { title: "Remote Monitoring", desc: "Monitor from anywhere via cloud dashboard." },
        { title: "Safety Compliance", desc: "Meet regulatory and safety requirements." },
        { title: "Data Analytics", desc: "Analyze consumption patterns and trends." }
      ]
    }
  ];

  const product = products.find(p => p.id === productId);

  useEffect(() => {
    if (product?.images?.length) {
      setCurrentIndex(0);
      setActiveImage(product.images[0]);
    }
  }, [productId]);

  const featureIcons = {
    "RFID Card Access": FaCamera,
    "Biometric Authentication (Fingerprint, Face Recognition)": FaCheckCircle,
    "PIN Code Entry": FaTools,
    "Mobile App Control": FaMobileAlt,
    "Real-time Monitoring": FaClock,
    "Audit Trail & Reports": FaDatabase,
    "Multi-level Access Permissions": FaShieldAlt,
    "Emergency Override Options": FaCheckCircle,
    
    "Instant SMS Notifications": FaBell,
    "Integration with Fire Alarms": FaShieldAlt,
    "Access Control Alerts": FaBell,
    "Security System Integration": FaShieldAlt,
    "Multiple Recipient Support": FaMobileAlt,
    "Customizable Alert Messages": FaTools,
    "Delivery Confirmation": FaCheckCircle,
    "24/7 Monitoring": FaClock,
    
    "Accurate Radar Sensors": FaCamera,
    "LED Display Integration": FaDesktop,
    "Real-time Speed Detection": FaClock,
    "Data Logging": FaDatabase,
    "Photo Enforcement": FaCamera,
    "Multi-lane Monitoring": FaCheckCircle,
    "Weather Resistant": FaShieldAlt,
    "Customizable Alerts": FaBell,
    
    "AI-Powered Analysis": FaCheckCircle,
    "ANPR (Automatic Number Plate Recognition)": FaCamera,
    "Motion Detection": FaClock,
    "Object Tracking": FaCamera,
    "Facial Recognition": FaCamera,
    "Vehicle Detection": FaDesktop,
    "Automated Reporting": FaDatabase,
    "Cloud Integration": FaDesktop,
    
    "Remote Device Control": FaDesktop,
    "DI/DO Status Updates": FaCheckCircle,
    "Multi-device Support": FaDesktop,
    "Centralized Dashboard": FaDesktop,
    "Historical Data Logs": FaDatabase,
    "Automated Scheduling": FaTools,
    "Integration Capabilities": FaCheckCircle,
    
    "Real-time GPS Tracking": FaSatelliteDish,
    "Geo-fencing Alerts": FaBell,
    "Route Optimization": FaCheckCircle,
    "Driver Behavior Monitoring": FaCamera,
    "Fuel Efficiency Tracking": FaDatabase,
    "Mobile App Access": FaMobileAlt,
    "Historical Route Playback": FaDatabase,
    "Multi-vehicle Dashboard": FaDesktop,
    
    "Real-time Data Logging": FaDatabase,
    "Cloud Storage": FaDesktop,
    "Temperature Monitoring": FaClock,
    "Flow Rate Tracking": FaCheckCircle,
    "Fuel Level Monitoring": FaTools,
    "Automated Alerts": FaBell,
    "Data Analytics": FaDatabase,
    "Mobile Access": FaMobileAlt,
    
    "Real-time Level Monitoring": FaClock,
    "IoT Sensor Integration": FaCheckCircle,
    "Instant Alerts": FaBell,
    "Historical Data Tracking": FaDatabase,
    "Overflow Prevention": FaShieldAlt,
    "Multi-tank Support": FaTools,
    "Cloud Dashboard": FaDesktop,
    "Mobile Notifications": FaMobileAlt
  };

  const highlightIcons = {
    shield: FaShieldAlt,
    camera: FaCamera,
    clock: FaClock,
    check: FaCheckCircle,
    tools: FaTools,
    support: FaHeadset,
    bell: FaBell,
    brain: FaCheckCircle
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % product.images.length;
    setCurrentIndex(next);
    setActiveImage(product.images[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + product.images.length) % product.images.length;
    setCurrentIndex(prev);
    setActiveImage(product.images[prev]);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
    setActiveImage(product.images[index]);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Product Not Found</h1>
      </div>
    );
  }

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
            onClick={() => navigate('/#products')}
            className="text-blue-600 font-semibold hover:bg-blue-50 px-3 py-1 rounded transition"
          >
            ← Back to Products
          </button>
          <img src="/favicon.png" alt="Logo" onClick={() => navigate('/')} className="h-8 cursor-pointer hover:scale-105 transition-transform duration-200" />
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
                className="bg-white rounded-2xl shadow-lg h-[300px] md:h-[420px] flex items-center justify-center cursor-zoom-in p-6"
              >
                <img
                  src={activeImage}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>
              {/* BOTTOM ARROWS */}
              <div className="absolute left-0 right-0 -bottom-6 flex justify-between px-10 pointer-events-none">

                {/* PREV */}
                <button
                  onClick={prevImage}
                  className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                >
                  ‹
                </button>

                {/* NEXT */}
                <button
                  onClick={nextImage}
                  className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                >
                  ›
                </button>

              </div>
            </div>


            {/* THUMBNAILS WITH LIMIT = 4 */}
            <div className="flex items-center justify-center gap-3 mt-10">

              {/* THUMB LEFT */}
              <button
                onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
                disabled={currentIndex === 0}
                className="p-2 text-xl text-blue-600 hover:bg-blue-50 rounded transition"
              >
                ‹
              </button>

              {/* THUMB STRIP */}
              <div className="flex gap-3 overflow-hidden">
                {product.images
                  .slice(
                    Math.floor(currentIndex / VISIBLE_THUMBS) * VISIBLE_THUMBS,
                    Math.floor(currentIndex / VISIBLE_THUMBS) * VISIBLE_THUMBS + VISIBLE_THUMBS
                  )
                  .map((img, idx) => {
                    const realIndex = Math.floor(currentIndex / VISIBLE_THUMBS) * VISIBLE_THUMBS + idx;

                    return (
                      <button
                        key={realIndex}
                        onClick={() => selectImage(realIndex)}
                        className={`border rounded-lg p-2 transition ${
                          realIndex === currentIndex
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
                onClick={() => setCurrentIndex(Math.min(currentIndex + 1, product.images.length - 1))}
                disabled={currentIndex === product.images.length - 1}
                className="p-2 text-xl disabled:opacity-30"
              >
                ›
              </button>
            </div>
          </div>

          <div>

            {/* PRODUCT TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line mb-8 ">
              {product.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {product.highlights.map((item, index) => {
                const Icon = highlightIcons[item.icon] || FaCheckCircle;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full shadow-sm"
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
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
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
            {product.features.map((feature, i) => {
              const Icon = featureIcons[feature] || FaCheckCircle;

              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-4"
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
            Why Choose This Product?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="mb-8">
            Contact us today to learn how {product.title} can transform your business.
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
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </motion.div>
  );
}

export default ProductDetail;
