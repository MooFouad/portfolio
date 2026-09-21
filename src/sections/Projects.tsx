import Image, { type StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

type Project = {
  company: string;
  title: string;
  description: string;
  link?: string;
  image?: StaticImageData;
  modules: string[];
  stack: string[];
  results: { title: string }[];
};

const portfolioProjects: Project[] = [
  {
    company: "Own SaaS Product",
    title: "Daftaar — Sales & Installments SaaS",
    description:
      "An Arabic-first platform for door-to-door cash and installment sales. Customers, inventory, sales representatives, installment schedules, payments, and collections live in one system. I designed, built, deployed, and operate it as a live commercial product.",
    link: "https://www.daftaar.app",
    modules: ["Customers", "Inventory", "Sales Reps", "Installments", "Payments", "Collections", "Reports"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    results: [
      { title: "Live commercial product used by small businesses, not a demo" },
      { title: "Installment schedules generated automatically with payment and collection tracking" },
      { title: "Arabic-first interface designed for daily field use by sales representatives" },
      { title: "I own the full lifecycle: product decisions, development, deployment, and support" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Enterprise Intranet Platform",
    description:
      "The internal platform used by staff across the organisation. I worked on the employee requests workflow — submission, routing, and approval — an OTP verification step for sensitive actions, and integrations with Saudi government services so employee and company records are pulled in directly.",
    modules: ["Employee Requests", "Approval Routing", "OTP Verification", "TAMM Integration", "GOSI Integration"],
    stack: ["React.js", "TypeScript", "REST APIs", "SQL Server"],
    results: [
      { title: "Employee requests move through submission, routing, and approval without paper" },
      { title: "OTP verification step protects sensitive actions" },
      { title: "Integrated with the Saudi TAMM and GOSI services to pull records in directly" },
      { title: "Removed routine follow-up from managers and HR" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Project Progress Tracking System",
    description:
      "A site-progress platform for electro-mechanical construction projects. The consultant's Revit/IFC model is imported to generate the project structure and zone geometry automatically, breaking each project into buildings, levels, and zones. Foremen report progress from a phone on site and managers approve the work.",
    modules: ["IFC / Revit Import", "Buildings & Levels", "Zone Geometry", "Field Reporting", "Approvals", "Audit Trail"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    results: [
      { title: "Project structure and zone geometry generated automatically from the BIM model" },
      { title: "Foremen report progress from a phone on site; managers approve the work" },
      { title: "Completion per building tracked live instead of estimated in meetings" },
      { title: "Replaced WhatsApp-based reporting, with every update kept as an audit trail" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Fire & Life Safety Pricing & Quotation System",
    description:
      "A self-service pricing platform for technical departments. Each department maintains its own product catalogue, builds quotations from it, and applies percentage-based rates for installation, fitting, and accessories on top of material cost.",
    modules: ["Department Catalogues", "Quotation Builder", "Installation & Fitting Rates", "VAT", "Branded PDF Export"],
    stack: ["React.js", "TypeScript", "REST APIs", "SQL Server"],
    results: [
      { title: "Each department owns its product catalogue with full item details" },
      { title: "Percentage rates for installation, fitting, and accessories applied on top of material cost" },
      { title: "Quotations issued as branded PDFs with VAT applied automatically" },
      { title: "Replaced the Excel workbooks each department used to keep separately" },
    ],
  },
  {
    company: "Enterprise System",
    title: "Internal AI Assistant & HR Automation",
    description:
      "A chatbot connected to company databases that answers employees on policies, leave balances, and increment rules, paired with an email-to-form workflow that routes staff requests straight to HR.",
    modules: ["Company Knowledge Base", "Leave Balances", "Policy Answers", "Email-to-Form", "HR Routing"],
    stack: ["React.js", "Node.js", "REST APIs", "MongoDB"],
    results: [
      { title: "Answers 200+ employees on policies, leave balances, and increment rules" },
      { title: "Connected directly to company databases for real-time answers" },
      { title: "Email-to-form workflow routes staff requests straight to HR" },
    ],
  },
];

const ModulePanel = ({ modules }: { modules: string[] }) => (
  <div className="mt-8 lg:mt-0 lg:h-full lg:flex lg:items-center">
    <div className="w-full rounded-2xl border border-white/10 bg-gray-950/60 p-5 md:p-6">
      <div className="flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs uppercase tracking-widest text-white/30">Modules</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {modules.map((module) => (
          <span
            key={module}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 md:text-sm"
          >
            {module}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Production Work"
          title="Featured Projects"
          description="Systems in daily use — a commercial SaaS product I run, and enterprise platforms that replaced spreadsheets, paper, and WhatsApp with software."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 md:px-10 pt-8 pb-8 md:pt-12 lg:px-20 lg:pt-16 lg:pb-16 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="relative">
                  <div className="font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-sm">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <p className="text-white/60 text-sm md:text-base mt-2 md:mt-3">{project.description}</p>
                  <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-emerald-300/10 px-2 py-1 text-xs text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative bg-white text-gray-950 h-12 w-full rounded-xl font-semibold flex items-center justify-center gap-2 mt-8 px-6 md:w-auto text-center py-3 z-50"
                    >
                      Visit Live Site
                      <ArrowUpRightIcon className="size-4 md:size-5 ml-2" />
                    </a>
                  ) : (
                    <p className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 h-11 text-sm text-white/50">
                      <span className="size-1.5 rounded-full bg-emerald-300" />
                      Internal system — source and access are private
                    </p>
                  )}
                </div>
                <div className="relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:max-w-none lg:w-auto pointer-events-none"
                    />
                  ) : (
                    <ModulePanel modules={project.modules} />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
