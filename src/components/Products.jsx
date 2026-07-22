import {
  FaDoorOpen,
  FaSms,
  FaTachometerAlt,
  FaCamera,
  FaDesktop,
  FaSatelliteDish,
  FaDatabase,
  FaWater
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

function Products() {
  const navigate = useNavigate();

  const products = [
    { id: 'smart-access-control', icon: <FaDoorOpen />, title: 'Smart Access Control', desc: 'RFID, biometrics, PIN & app-based access with secure real-time monitoring.' },
    { id: 'sms-alert-system', icon: <FaSms />, title: 'SMS Alert System', desc: 'Instant SMS alerts from fire, access control & security systems.' },
    { id: 'speed-monitoring-systems', icon: <FaTachometerAlt />, title: 'Speed Monitoring', desc: 'Radar-based speed detection with LED displays for safer zones.' },
    { id: 'image-process-report-system', icon: <FaCamera />, title: 'Image Processing', desc: 'AI-driven ANPR, motion detection & visual analytics.' },
    { id: 'device-management-system', icon: <FaDesktop />, title: 'Device Management', desc: 'Remote device control with accurate DI/DO status.' },
    { id: 'vehicle-tracking-system', icon: <FaSatelliteDish />, title: 'Vehicle Tracking', desc: 'Live GPS tracking with geo-fencing & smart alerts.' },
    { id: 'online-data-logger', icon: <FaDatabase />, title: 'Online Data Logger', desc: 'Cloud-based monitoring of temperature, flow & fuel.' },
    { id: 'liquid-level-monitoring-system', icon: <FaWater />, title: 'Liquid Level Monitoring', desc: 'IoT-based liquid level detection with analytics.' }
  ];

  return (
    <section id="products" className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Premium automation & IoT solutions crafted for performance,
            reliability, and intelligent operations.
          </p>
        </motion.header>

        {/* Grid */}
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
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
                onClick={() => navigate(`/product/${item.id}`)}
                className="
                  cursor-pointer h-full rounded-2xl
                  bg-white/80 backdrop-blur-xl
                  border border-slate-200
                  p-8 shadow-sm
                  hover:shadow-xl hover:border-blue-300
                  transition-colors
                "
              >
                {/* Icon */}
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
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  Explore Products
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

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-800">
            Designed clean. Built smart. Delivered premium.
          </h3>
        </motion.footer>

      </div>
    </section>
  );
}

export default Products;
