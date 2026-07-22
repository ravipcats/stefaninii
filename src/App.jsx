import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout Components
import Header from "./components/Header2"
import Home from "./components/Home2"
import Services from './components/Services';
import Products from './components/Products';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer2 from './components/Footer2';
import ScrollShowcase from './components/ScrollShowcase';
// Detail Pages
import ProductDetail from './components/ProductDetail';
import ServiceDetail from './components/ServiceDetail'; // <--- 1. ADD THIS IMPORT
import ClientStories from './components/ClientStories';
import MultiStepForm from './components/MultiStepForm'; // <--- 1. ADD THIS IMPORT

// Scroll to top and handle hash navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const isPathChange = prevPath !== pathname;

    if (pathname === '/' && isPathChange) {
      // initial load or route change into home: always top and clear fragment
      window.history.replaceState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (hash) {
      // In-page navigation, allowed to scroll to section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    prevPathRef.current = pathname;
  }, [pathname, hash]);

  return null;
}

import ChatBotWidget from "./components/ChatBotWidget";

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Services />
      <ScrollShowcase />
      <ClientStories />
      <MultiStepForm />
      <Footer2 />
      <ChatBotWidget />
      {/* <ClientStories /> */}

      {/* <Products />
      <Clients />
      <About />
      <Contact />
      <Footer />
      <ToastContainer />  */}
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <--- 2. ADD THIS TO FIX SCROLLING */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/product/:productId" element={<ProductDetail />} />

          {/* 3. ADD THIS ROUTE FOR SERVICES */}
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App;