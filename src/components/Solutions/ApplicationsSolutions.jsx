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
import ApplicationsSolutions from "./components/Solutions/ApplicationsSolutions";
import Services from './components/Services';
import Products from './components/Products';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer2 from './components/Footer2';
import ScrollShowcase from './components/ScrollShowcase';
// Detail Pages
import ProductDetail from './components/ProductDetail';
import ServiceDetail from './components/ServiceDetail'; 
import ClientStories from './components/ClientStories';
import MultiStepForm from './components/MultiStepForm'; 

// Scroll to top and handle hash navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const isPathChange = prevPath !== pathname;

    if (pathname === '/' && isPathChange) {
      window.history.replaceState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (hash) {
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
      <Solutions />
      <Services />
      <ScrollShowcase />
      <ClientStories />
      <MultiStepForm />
      <Footer2 />
      <ChatBotWidget />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/solutions/applications" element={<ApplicationsSolutions />} />
        </Routes>+
      </AnimatePresence>
    </Router>
  )
}

export default App;