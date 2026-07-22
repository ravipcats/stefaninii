import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaVideo, FaTv, FaMicrochip, FaProjectDiagram, 
  FaNetworkWired, FaCogs, FaBrain, FaLaptopCode 
} from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function Services() {
  const navigate = useNavigate();

  const services = [
    { id: 'cctv-surveillance', icon: <FaVideo />, title: "CCTV Surveillance", desc: "Professional monitoring solutions to safeguard your business with seamless installation." },
    { id: 'led-display-boards', icon: <FaTv />, title: "LED Display Boards", desc: "High-quality assembling and maintenance for reliable, high-impact visual performance." },
    { id: 'pcb-designing-development', icon: <FaMicrochip />, title: "PCB Development", desc: "End-to-end circuit design and prototyping for high-performance electronic solutions." },
    { id: 'microcontroller-services', icon: <FaProjectDiagram />, title: "Microcontrollers", desc: "Complete programming and integration for intelligent and efficient electronic systems." },
    { id: 'wired-wireless-networking', icon: <FaNetworkWired />, title: "Networking Solutions", desc: "Secure setup and management of industrial-grade wired and wireless connectivity." },
    { id: 'custom-automation-solutions', icon: <FaCogs />, title: "Custom Automation", desc: "IoT and PLC-driven solutions designed for intelligent control in smart buildings." },
    { id: 'ai-based-system-development', icon: <FaBrain />, title: "AI System Development", desc: "Intelligent solutions for automation and smart decision-making to optimize operations." },
    { id: 'software-web-development', icon: <FaLaptopCode />, title: "Software & Web", desc: "Scalable custom software and web platforms built for long-term operational efficiency." }
  ];

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header - Identical to Products */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Expert technical services delivering innovation, automation, and 
            efficiency to empower your business infrastructure.
          </p>
        </motion.header>

        {/* Grid - Identical to Products */}
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.li
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.article
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={() => navigate(`/service/${item.id}`)}
                className="
                  cursor-pointer h-full rounded-2xl
                  bg-white/80 backdrop-blur-xl
                  border border-slate-200
                  p-8 shadow-sm
                  hover:shadow-xl hover:border-blue-300
                  transition-colors
                "
              >
                {/* Icon - Identical Styling */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="
                    mb-6 flex h-14 w-14 items-center justify-center
                    rounded-xl bg-blue-50 text-blue-600 text-2xl
                  "
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                {/* CTA - Identical Styling */}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  Explore Service
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.article>
            </motion.li>
          ))}
        </ul>

        {/* Footer - Identical to Products */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-800">
            Empower your business with <span className="text-blue-600">smart solutions.</span>
          </h3>
        </motion.footer>

      </div>
    </section>
  );
}

export default Services;