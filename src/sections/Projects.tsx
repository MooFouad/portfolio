import gtsImage from "@/assets/images/gts.png";
import shopperEcommerceImage from "@/assets/images/shopperEcommerceImage.png";
import adminDashboardImage from "@/assets/images/adminDashboardImage.png";
import cryptoTrackerImage from "@/assets/images/cryptoTrackerImage.png";
import disneyCloneImage from "@/assets/images/disneyCloneImage.png";
import youtubeCloneImage from "@/assets/images/youtubeCloneImage.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "GTS",
    title: "GTS Compliance Dashboard",
    link: "https://dashboard-sys-d.vercel.app/",
    image: gtsImage,
    results: [
      { title: "Full-stack compliance system for vehicle tracking, GOSI, rentals & utilities (MERN Stack)" },
      { title: "Integrated Saudi Absher government API for real-time vehicle registration data" },
      { title: "Role-based auth + Web Push API for automated document expiry alerts" },
      { title: "Excel bulk import/export and email-to-form automation workflows" },
    ],
  },
  {
    company: "GTS",
    title: "GTS AI Chatbot",
    link: "https://dashboard-sys-d.vercel.app/",
    image: gtsImage,
    results: [
      { title: "AI-powered chatbot serving 200+ employees for company policies and FAQs" },
      { title: "Connected to company database for real-time data: leave balances, HR policies" },
      { title: "Built with React.js, Node.js, and MongoDB — internal enterprise tool" },
    ],
  },
  {
    company: "ShopEase",
    title: "Shopper Ecommerce",
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
    <section id='projects' className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects"
          title="Featured Projects"
          description="See how I transformed concepts into enganing details experiences"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 md:px-10 pt-8 pb-0 md:pt-12 lg:px-20 lg:pt-16 sticky"
              style={{
                top : `calc(64px + ${projectIndex*40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16 relative">
                  <div className="font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-sm">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white text-gray-950 h-12 w-full rounded-xl font-semibold flex items-center justify-center gap-2 mt-8 px-6 md:w-auto text-center py-3 z-50"
                  >
                    Visit Live Site
                    <ArrowUpRightIcon className="size-4 md:size-5 ml-2" />
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:max-w-none lg:w-auto pointer-events-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
