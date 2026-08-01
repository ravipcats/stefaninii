import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos'
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { initializeJobs } from "./utils/storage";

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
import FeaturedCompany from './components/Topaz/topaz';
import IndustrialGoods from './components/Industries/IndustrialGoods';
import ConsumerServices from './components/Industries/ConsumerServices';
import ConsumerGoods from './components/Industries/ConsumerGoods';
import NaturalResources from './components/Industries/NaturalResources';
import FinancialServices from './components/Industries/FinancialServices';
import Operations from "./components/Solutions/Operations";
import DataAnalytics from "./components/Solutions/data-analytics-2";
import Manufacturing2 from "./components/Solutions/manufacturing-2";
import Marketing2 from "./components/Solutions/marketing-2";
import CyberSecurity2 from "./components/Solutions/cybersecurity-2";
import Stefanini from "./components/Stefanini/stefanini"
import LetsmakeItshappen from "./components/Stefanini/lets-make-it-happen"
import Telecom from './components/Industries/Telecom';
import HealthAndLifeSciences from './components/Industries/HealthAndLifeSciences';
import PublicAndSocialSector from './components/Industries/PublicAndSocialSector';
import RetailIndustry from './components/Industries/RetailIndustry';

import Careers from "./pages/Careers/Careers";
import CareerDetails from "./pages/Careers/CareerDetails";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";

import Newsroom from './components/Insights/NewsRoom/Newsroom';
import One from './components/Insights/NewsRoom/Articles/One';
import Two from './components/Insights/NewsRoom/Articles/Two';
import Three from './components/Insights/NewsRoom/Articles/Three';


import CaseStudies from './pages/CaseStudies/CaseStudies';
import CaseStudyDetails from './pages/CaseStudies/CaseStudyDetails';

import CaseOne from "./components/CaseStudyDetails/CaseStudy/One";
import CaseTwo from "./components/CaseStudyDetails/CaseStudy/Two";
import CaseThree from "./components/CaseStudyDetails/CaseStudy/Three";

import CaseFour from "./components/CaseStudyDetails/CaseStudy/Four";
import CaseFive from "./components/CaseStudyDetails/CaseStudy/Five";
import CaseSix from "./components/CaseStudyDetails/CaseStudy/Six";

import CaseSeven from "./components/CaseStudyDetails/CaseStudy/Seven";
import CaseEight from "./components/CaseStudyDetails/CaseStudy/Eight";
import CaseNine from "./components/CaseStudyDetails/CaseStudy/Nine";

import ArtificialIntelligenceSolutions from "./components/Solutions/artificial-intelligence-2";
import ConsultingServicesSolutions from "./components/Solutions/consulting-services-2";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const isPathChange = prevPath !== pathname;
    initializeJobs();
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
          <Route path="/solutions/marketing-2" element={<Marketing2 />} />
          <Route path="/solutions/cybersecurity-2" element={<CyberSecurity2 />} />
          <Route path="/solutions/topaz-2" element={<FeaturedCompany />} />
          <Route path="/Stefanini/stefanini" element={<Stefanini />} />
          <Route path="/Stefanini/lets-make-it-happen" element={<LetsmakeItshappen />} />
          <Route path="/industries/telecom" element={<Telecom />} />
          <Route path="/industries/healthandlifesciences" element={<HealthAndLifeSciences />} />
          <Route path="/industries/publicandsocialsector" element={<PublicAndSocialSector />} />
          <Route path="/industries/retailindustry" element={<RetailIndustry />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetails />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/news/one" element={<One />} />
          <Route path="/news/Two" element={<Two />} />
          <Route path="/news/Three" element={<Three />} />

          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetails />} />

          <Route path="/case-study/one" element={<CaseOne />} />
          <Route path="/case-study/two" element={<CaseTwo />} />
          <Route path="/case-study/three" element={<CaseThree />} />

          <Route path="/case-study/four" element={<CaseFour />} />
          <Route path="/case-study/five" element={<CaseFive />} />
          <Route path="/case-study/six" element={<CaseSix />} />

          <Route path="/case-study/seven" element={<CaseSeven />} />
          <Route path="/case-study/eight" element={<CaseEight />} />
          <Route path="/case-study/nine" element={<CaseNine />} />
          <Route path="/Solutions/artificial-intelligence-2" element={<ArtificialIntelligenceSolutions />} />
          <Route path="/Solutions/consulting-services-2" element=
          {<ConsultingServicesSolutions />} />

        </Routes>
      </AnimatePresence>
      <ToastContainer position="top-right" autoClose={2500} />
    </Router>
  );
}

export default App;