"use client";
import { motion } from "framer-motion";
import daftaarImage from "@/assets/images/daftaarImage.png";
import intranetImage from "@/assets/images/intranetPreview.png";
import trackingImage from "@/assets/images/trackingPreview.png";
import flsImage from "@/assets/images/flsPreview.png";
import aiAssistantImage from "@/assets/images/aiAssistantPreview.png";
import gtsImage from "@/assets/images/gts.png";
import shopperEcommerceImage from "@/assets/images/shopperEcommerceImage.png";
import adminDashboardImage from "@/assets/images/adminDashboardImage.png";
import cryptoTrackerImage from "@/assets/images/cryptoTrackerImage.png";
import disneyCloneImage from "@/assets/images/disneyCloneImage.png";
import youtubeCloneImage from "@/assets/images/youtubeCloneImage.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Own SaaS Product",
    title: "Daftaar — Sales & Installments",
    description:
      "An Arabic-first SaaS for door-to-door cash and installment sales. Customers, inventory, sales representatives, installment schedules, payments, and collections in one system — built, deployed, and operated by me as a live commercial product.",
    link: "https://www.daftaar.app",
    image: daftaarImage,
    results: [
      { title: "Live commercial product serving small businesses" },
      { title: "Installment schedules generated automatically with payment and collection tracking" },
      { title: "Arabic-first interface designed for daily field use by sales reps" },
      { title: "Full ownership: product, development, deployment, and support" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Enterprise Intranet Platform",
    description:
      "The internal platform used by staff across the organisation. I worked on the employee requests workflow, an OTP verification step for sensitive actions, and integrations with Saudi government services.",
    image: intranetImage,
    results: [
      { title: "Employee requests move through submission, routing, and approval without paper" },
      { title: "OTP verification step protects sensitive actions" },
      { title: "Integrated with the Saudi TAMM and GOSI services to pull records in directly" },
      { title: "Removed routine follow-up from managers and HR" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Project Progress Tracking",
    description:
      "A site-progress platform for electro-mechanical construction projects. The consultant's Revit/IFC model is imported to generate the project structure and zone geometry automatically.",
    image: trackingImage,
    results: [
      { title: "Buildings, levels, and zones generated automatically from the BIM model" },
      { title: "Foremen report progress from a phone on site; managers approve the work" },
      { title: "Completion per building tracked live instead of estimated in meetings" },
      { title: "Replaced WhatsApp reporting, with every update kept as an audit trail" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Fire & Life Safety Pricing",
    description:
      "A self-service pricing platform for technical departments. Each department maintains its own product catalogue, builds quotations from it, and applies percentage rates on top of material cost.",
    image: flsImage,
    results: [
      { title: "Each department owns its product catalogue with full item details" },
      { title: "Installation, fitting, and accessory rates applied on top of material cost" },
      { title: "Quotations issued as branded PDFs with VAT applied automatically" },
      { title: "Replaced the Excel workbooks each department kept separately" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Internal AI Assistant",
    description:
      "A chatbot connected to company databases that answers employees on policies, leave balances, and increment rules, with an email-to-form workflow that routes staff requests straight to HR.",
    image: aiAssistantImage,
    results: [
      { title: "Answers 200+ employees on policies, leave balances, and increment rules" },
      { title: "Connected directly to company databases for real-time answers" },
      { title: "Email-to-form workflow routes staff requests straight to HR" },
    ],
  },
  {
    company: "GTS",
    title: "GTS Dashboard",
    description:
      "An internal operations platform managing vehicles, GOSI registrations, rentals, and utilities for a Saudi company — integrated with government services.",
    link: "https://dashboard-sys-d.vercel.app/",
    image: gtsImage,
    results: [
      { title: "Full-stack system for vehicle tracking, GOSI, rentals, and utilities" },
      { title: "Integrated with Saudi government services for real-time registration data" },
      { title: "Role-based access and automated document expiry alerts" },
      { title: "Excel bulk import/export and email-to-form automation" },
    ],
  },
  {
    company: "ShopEase",
    title: "Shopper Ecommerce",
    description:
      "A full e-commerce experience with product browsing, cart management, and checkout flow built with React and Tailwind CSS.",
    link: "https://shopper-ecommerce-two.vercel.app/",
    image: shopperEcommerceImage,
    results: [
      { title: "Built with React and TailwindCSS" },
      { title: "Used useContext for global state management" },
      { title: "Implemented React Router for navigation" },
    ],
  },
  {
    company: "DataSync",
    title: "Admin Dashboard",
    description:
      "A data management interface featuring interactive charts, analytics panels, and product/order administration powered by Syncfusion components.",
    link: "https://dashboard-one-teal.vercel.app/",
    image: adminDashboardImage,
    results: [
      { title: "Developed with React and Syncfusion" },
      { title: "Used useContext for state management" },
      { title: "Styled with TailwindCSS" },
    ],
  },
  {
    company: "CryptoWatch",
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency tracker with live price feeds, interactive market charts, and coin detail pages via public crypto APIs.",
    link: "https://beautiful-muffin-45a42f.netlify.app/",
    image: cryptoTrackerImage,
    results: [
      { title: "Built with React and MUI" },
      { title: "Used useContext for state management" },
      { title: "Implemented React Router for navigation" },
    ],
  },
  {
    company: "StreamFlix",
    title: "Disney Clone",
    description:
      "A streaming platform UI clone with content browsing, Firebase authentication, and user watchlists modelled on the Disney+ experience.",
    link: "https://effortless-melomakarona-828453.netlify.app/",
    image: disneyCloneImage,
    results: [
      { title: "Built using React and Firebase" },
      { title: "Implemented Redux Toolkit for state management" },
      { title: "Used React Router for navigation" },
    ],
  },
  {
    company: "VidStream",
    title: "YouTube Clone",
    description:
      "A video platform interface with RapidAPI-powered search, video playback, channel pages, and a fully responsive layout.",
    link: "https://classy-griffin-bde964.netlify.app/",
    image: youtubeCloneImage,
    results: [
      { title: "Built using React and RapidAPI" },
      { title: "Implemented Axios for API calls" },
      { title: "Styled with MUI" },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 section-anchor">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects"
          title="Featured Projects"
          description="Production systems in daily use, a commercial SaaS I run, and the projects I built along the way."
        />
        <div className="flex flex-col mt-10 gap-10 md:mt-20 md:gap-14">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="px-6 py-8 md:px-10 md:py-12 lg:pl-16 lg:pr-0 lg:py-14">
                <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:items-center">
                  <div className="relative lg:pr-0">
                    <div className="font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-sm">
                      <span>{project.company}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-4 md:text-4xl">{project.title}</h3>
                    <p className="text-white/60 text-sm md:text-base mt-3 md:mt-4">{project.description}</p>
                  </div>
                  <div className="relative mt-8 lg:mt-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-black/40 pointer-events-none lg:rounded-r-none lg:border-r-0"
                    />
                  </div>
                </div>

                <div className="lg:pr-16">
                  <hr className="border-t-2 border-white/10 mt-8 md:mt-10" />
                  <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-x-10">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} (opens in a new tab)`}
                      className="relative bg-white text-gray-950 h-12 w-full rounded-xl font-semibold flex items-center justify-center gap-2 mt-8 px-6 md:w-auto md:inline-flex text-center py-3 z-10 hover:bg-white/90 transition-colors"
                    >
                      Visit Live Site
                      <ArrowUpRightIcon className="size-4 md:size-5 ml-2" />
                    </a>
                  ) : (
                    <p className="border border-white/15 text-white/50 h-12 w-full rounded-xl font-medium text-sm flex items-center justify-center gap-2 mt-8 px-6 md:w-auto md:inline-flex text-center">
                      <span className="size-1.5 rounded-full bg-emerald-300 flex-shrink-0" aria-hidden="true" />
                      Internal system — access is private
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
