import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  {
    title: "Software Engineer",
    org: "GTS — Riyadh, Saudi Arabia",
    period: "Aug 2025 – Present",
    summary:
      "Build internal web applications end to end for departments across the company, and support them in production.",
    accent: "border-emerald-300",
    periodColor: "text-emerald-300",
  },
  {
    title: "Front-End Developer",
    org: "Relevance Research & Development Corporation — Remote",
    period: "Jan 2024 – Jun 2025",
    summary:
      "Built an interactive game platform with Next.js and cut bundle size by 30% through code splitting and lazy loading.",
    accent: "border-sky-400",
    periodColor: "text-sky-400",
  },
  {
    title: "Founder & Developer",
    org: "Daftaar — own SaaS product",
    period: "Side product",
    summary: "Build and operate a commercial Arabic-first SaaS for cash and installment sales.",
    accent: "border-white/25",
    periodColor: "text-white/50",
  },
];

export const ExperienceSection = () => {
  return (
    <div id="experience" className="py-20 lg:py-28 section-anchor">
      <div className="container">
        <SectionHeader
          eyebrow="Career Journey"
          title="Experience & Education"
          description="2+ years of building software that people use every day."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          <Card className="p-6 md:p-8 md:col-span-3">
            <h3 className="font-serif text-2xl">Experience</h3>
            <div className="mt-6 space-y-6">
              {roles.map((role) => (
                <div key={role.title} className={`border-l-4 ${role.accent} pl-4`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="font-semibold text-lg">{role.title}</h4>
                    <span className={`text-xs font-medium ${role.periodColor}`}>{role.period}</span>
                  </div>
                  <p className="text-white/50 text-sm mt-0.5">{role.org}</p>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{role.summary}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8 md:col-span-2">
            <h3 className="font-serif text-2xl">Education</h3>
            <div className="mt-6 border-l-4 border-emerald-300 pl-4">
              <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
              <p className="text-emerald-300 text-xs font-medium mt-0.5">2018 – 2022</p>
              <p className="text-white/50 text-sm mt-0.5">Menoufia University, Egypt</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-semibold text-lg">Languages</h4>
              <p className="text-white/60 text-sm mt-2">Arabic — native</p>
              <p className="text-white/60 text-sm">English — professional working proficiency</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-semibold text-lg">Based in</h4>
              <p className="text-white/60 text-sm mt-2">Riyadh, Saudi Arabia</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
