import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Header";
import Services from "../Services";
import Services2 from "../Services2";
import ScrollShowcase from "../ScrollShowcase";
import ClientStories from "../ClientStories";
import Solutions from "../Solution";
import MultiStepForm from "../MultiStepForm";
import Footer from "../Footer";
import ChatBotWidget from "../ChatBotWidget";
import { Smile, Zap, ShieldAlert } from "lucide-react";

const customServices = [
    {
        title: "Application Security",
        description: "We incorporate security from the very beginning of development, aligning teams and processes to reduce risk, breach costs, and accelerate the entire software lifecycle.",
        icon: Smile,
    },
    {
        title: "Cloud Security",
        description: "A suite of solutions that offer end-to-end visibility, risk management, and threat protection in cloud environments, ensuring governance policies.",
        icon: Zap,
    },
    {
        title: "Cyber OT",
        description: "Our solutions protect industrial networks and control systems against cyberattacks, offering visibility, segmentation, monitoring, and governance.",
        icon: Smile,
    },
    {
        title: "Cybersecurity Advisory",
        description: "Specialized consulting to define security strategies, protect data and infrastructure, ensure governance, risk management, and regulatory compliance.",
        icon: Smile,
    },
    {
        title: "Cybersecurity Managed Services (SOC & MSS)",
        description: "Managed Cybersecurity Services protect digital assets 24/7, combining technology, AI, and expertise to monitor, detect, prevent, and respond to threats in real time.",
        icon: Smile,
    },
    {
        title: "Data Privacy & Security",
        description: "Protection of corporate data with encryption, tokenization, and masking; monitoring and access control, ensuring confidentiality and compliance.",
        icon: Smile,
    },
    {
        title: "Governance, Risk, and Compliance",
        description: "Powered by AI, GRC integrates governance, risk, and compliance, ensuring that security policies, controls, and audits are applied, risks are mitigated, and regulatory standards are met. Cyber Risk Operation Center (CROC) for continuous and automated risk management.",
        icon: Smile,
    },
    {
        title: "IT Infrastructure Security",
        description: "Network: Firewalls, WAF, IDS/IPS, segmentation, ZTNA, SASE, secure SD-WAN.Network Access: NAC, AP, switch.Endpoints/Servers: Antivirus, EDR/XDR, patch management, MDM/UEM.Email: Anti-phishing, anti-spam, sandboxing.Data: DLP.Access/Identity: MFA, PAM, integration with AD/LDAP/Azure AD.",
        icon: Smile,
    },
    {
        title: "Threat Readiness, Mitigation and Recovery",
        description: "Offensive security solutions (pentest), vulnerability management, risk mitigation and cyber resilience.",
        icon: Smile,
    }
    
];

export default function Solution() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Solutions
                    title="Cybersecurity Solutions"
                    subtitle="Cybersecurity Solutions"
                    heroImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-1_640X447-3.jpg"
                    bannerImage="https://stefanini.com/wp-content/uploads/2025/12/BANNER-2_1304X217-3.jpg"
                    description1="Stefanini Cyber offers advanced and customized cybersecurity solutions, combining artificial intelligence, organizational resilience, and cyber"
                    description2="risk mitigation. We act as a one-stop-shop, uniting expertise and technology to optimize customer experience and expand our solutions portfolio."
                    />
      <Services2 
                                                    title="Our services" 
                                                    subtitle="With over 35 years of global expertise, our Cybersecurity services combine artificial intelligence, organizational resilience, and cyber risk mitigation."
                                                    services={customServices}
                                                />
      <ClientStories />
      <MultiStepForm />
      <Footer />
      <ChatBotWidget />
    </>
  );
}