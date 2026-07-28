import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout Components
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from './components/Footer';
import ScrollShowcase from './components/ScrollShowcase';
import Services from './components/Services';
import ApplicationsSolutions from "./components/Solutions/ApplicationsSolutions";
import ClientStories from './components/ClientStories';
import MultiStepForm from './components/MultiStepForm';
import Companies from './components/Companies/Companies';
import FeaturedCompany from './components/FeaturedCompany/FeaturedCompany';
import IndustrialGoods from './components/Industries/IndustrialGoods';
import ConsumerServices from './components/Industries/ConsumerServices';
import ConsumerGoods from './components/Industries/ConsumerGoods';
import NaturalResources from './components/Industries/NaturalResources';
import FinancialServices from './components/Industries/FinancialServices';

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

      <Home />
      <FeaturedCompany />
      <Companies />
      <Services />
      <ScrollShowcase />
      <ClientStories />
      <MultiStepForm />
      <Footer />
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
          <Route path="/solutions/applicationssolutions" element={<ApplicationsSolutions />} />
          <Route path="/industries/industrialgoods" element={<IndustrialGoods />} />
          <Route path="/industries/consumerservices" element={<ConsumerServices />} />
          <Route path="/industries/consumergoods" element={<ConsumerGoods />} />
          <Route path="/industries/naturalresources" element={<NaturalResources />} />
          <Route path="/industries/financialservices" element={<FinancialServices />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;