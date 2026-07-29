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
import CloudSolutions from "./components/Solutions/cloud";
import DigitalWorkplaceSolutions from "./components/Solutions/digital-workplace-2";
import EnterprisePlatformsSolutions from "./components/Solutions/enterprise-platforms-2";
import HybridInfrastructureSolutions from "./components/Solutions/hybrid-infrastructure";
import ClientStories from './components/ClientStories';
import MultiStepForm from './components/MultiStepForm';
import Companies from './components/Companies/Companies';
import FeaturedCompany from './components/FeaturedCompany/FeaturedCompany';
import IndustrialGoods from './components/Industries/IndustrialGoods';
import ConsumerServices from './components/Industries/ConsumerServices';
import ConsumerGoods from './components/Industries/ConsumerGoods';
import NaturalResources from './components/Industries/NaturalResources';
import FinancialServices from './components/Industries/FinancialServices';
import Operations from "./components/Solutions/Operations";
import DataAnalytics from "./components/Solutions/data-analytics-2";
import Manufacturing2 from "./components/Solutions/manufacturing-2";

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

          <Route
            path="/solutions/applicationssolutions"
            element={<ApplicationsSolutions />}
          />
          <Route
    path="/solutions/cloud"
    element={<CloudSolutions />}
/>

<Route
    path="/solutions/digital-workplace-2"
    element={<DigitalWorkplaceSolutions />}
/>

<Route
    path="/solutions/enterprise-platforms-2"
    element={<EnterprisePlatformsSolutions />}
/>

<Route
    path="/solutions/hybrid-infrastructure"
    element={<HybridInfrastructureSolutions />}
/>
          <Route path="/solutions/applicationssolutions" element={<ApplicationsSolutions />} />
          <Route path="/industries/industrialgoods" element={<IndustrialGoods />} />
          <Route path="/industries/consumerservices" element={<ConsumerServices />} />
          <Route path="/industries/consumergoods" element={<ConsumerGoods />} />
          <Route path="/industries/naturalresources" element={<NaturalResources />} />
          <Route path="/industries/financialservices" element={<FinancialServices />} />
          <Route path="/solutions/operations" element={<Operations />} />
          <Route path="/solutions/data-analytics-2" element={<DataAnalytics />} />
          <Route path="/solutions/manufacturing-2" element={<Manufacturing2 />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;