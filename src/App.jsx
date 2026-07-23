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

import ClientStories from './components/ClientStories';
import MultiStepForm from './components/MultiStepForm';


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
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App;