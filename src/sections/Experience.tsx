import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";

export const ExperienceSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Career Journey"
          title="Experience & Education"
          description="Where I have worked, what I delivered there, and the academic background behind it."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience Card */}
          <Card className="p-6 md:col-span-1">
            <CardHeader
              title="Professional Experience"
              description="Building software that departments use every day."
            />
            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-emerald-300 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Software Engineer</h3>
                <p className="text-emerald-300 text-sm font-medium mt-1">
                  GTS • Riyadh, Saudi Arabia • Aug 2025 – Present
                </p>
                <ul className="text-white/70 text-sm space-y-2 list-disc list-inside mt-3">
                  <li>
                    Work with department heads across projects, engineering, HR, and purchasing to identify manual
                    processes worth automating, and deliver them as internal web applications end to end — requirements,
                    data model, interface, deployment, and support
                  </li>
                  <li>
                    Delivered three internal systems now in daily use across the company, each replacing spreadsheets,
                    paper, or WhatsApp-based workflows
                  </li>
                  <li>
                    Integrated company systems with Saudi government services including TAMM and GOSI, and added
                    automated notification and approval workflows that removed routine follow-up from managers and HR
                  </li>
                  <li>
                    Support every delivered system in production, handling change requests directly from the departments
                    using them
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">React.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">SQL Server</span>
                </div>
              </div>

              <div className="border-l-4 border-sky-400 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Front-End Developer</h3>
                <p className="text-sky-400 text-sm font-medium mt-1">
                  Relevance Research &amp; Development Corporation • Remote • Jan 2024 – Jun 2025
                </p>
                <ul className="text-white/70 text-sm space-y-2 list-disc list-inside mt-3">
                  <li>Developed an interactive football cards game platform using Next.js with server-side rendering</li>
                  <li>
                    Reduced bundle size by 30% through code splitting and lazy loading, and built responsive interfaces
                    across all devices
                  </li>
                  <li>
                    Collaborated with designers and backend engineers to integrate APIs and validate the technical
                    feasibility of UI/UX designs
                  </li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">React.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">API Integration</span>
                </div>
              </div>

              <div className="border-l-4 border-white/20 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Founder &amp; Developer</h3>
                <p className="text-white/60 text-sm font-medium mt-1">Daftaar (SaaS) • Side product • Present</p>
                <ul className="text-white/70 text-sm space-y-2 list-disc list-inside mt-3">
                  <li>
                    Built and operate a commercial Arabic-first SaaS for cash and installment sales, covering product
                    decisions, development, deployment, and customer support
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Education & Competencies Card */}
          <Card className="p-6 md:col-span-1">
            <CardHeader
              title="Education & Strengths"
              description="Academic foundation and the way I work."
            />
            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-emerald-300 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Bachelor of Computer Science</h3>
                <p className="text-emerald-300 text-sm font-medium mt-1">Menoufia University, Egypt • 2018 – 2022</p>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Computer science fundamentals — data structures, algorithms, software engineering, database
                  management, and web technologies — with a strong base in problem solving built through coursework and
                  hands-on projects.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-lg mb-3">What I Do Well</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-2">Engineering</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Full-stack delivery • REST API design • Relational data modelling • Government &amp; third-party
                      integrations • Performance optimization • Responsive interfaces
                    </p>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-2">Working With Business</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Requirements gathering with non-technical departments • Turning manual workflows into software •
                      Production support and change requests • Technical documentation
                    </p>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-2">Languages</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Arabic (native) • English (professional working proficiency)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
