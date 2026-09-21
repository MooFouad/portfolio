import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaNodeJs, FaGithub, FaDocker, FaKey } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoIosGitBranch } from "react-icons/io";
import { TbApi, TbBrandRedux } from "react-icons/tb";
import {
  SiTypescript,
  SiReactquery,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const stack = [
  {
    group: "Languages",
    items: [
      { title: "JavaScript", icon: <IoLogoJavascript /> },
      { title: "TypeScript", icon: <SiTypescript /> },
      { title: "HTML5", icon: <FaHtml5 /> },
      { title: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    group: "Frontend",
    items: [
      { title: "React", icon: <FaReact /> },
      { title: "Next.js", icon: <RiNextjsLine /> },
      { title: "Redux Toolkit", icon: <TbBrandRedux /> },
      { title: "React Query", icon: <SiReactquery /> },
      { title: "Tailwind CSS", icon: <SiTailwindcss /> },
      { title: "Material UI", icon: <SiMui /> },
      { title: "SASS", icon: <FaSass /> },
    ],
  },
  {
    group: "Backend",
    items: [
      { title: "Node.js", icon: <FaNodeJs /> },
      { title: "Express.js", icon: <SiExpress /> },
      { title: "REST APIs", icon: <TbApi /> },
      { title: "JWT Auth", icon: <FaKey /> },
    ],
  },
  {
    group: "Data & Tools",
    items: [
      { title: "PostgreSQL", icon: <SiPostgresql /> },
      { title: "MongoDB", icon: <SiMongodb /> },
      { title: "SQL Server", icon: <DiMsqlServer /> },
      { title: "Docker", icon: <FaDocker /> },
      { title: "Git", icon: <IoIosGitBranch /> },
      { title: "GitHub", icon: <FaGithub /> },
      { title: "Postman", icon: <SiPostman /> },
    ],
  },
];

const focus = [
  "System design and architecture",
  "AI and LLM integration",
  "Web performance engineering",
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28 section-anchor">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Skills & Toolkit"
          description="What I reach for when I build, and where I am pushing my depth next."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="p-6 md:p-8 lg:col-span-2">
            <h3 className="font-serif text-2xl">Technical Toolkit</h3>
            <p className="text-white/50 text-sm mt-2">
              The technologies I use day to day to design, build, and ship production systems.
            </p>
            <div className="mt-6 space-y-6">
              {stack.map((row) => (
                <div key={row.group}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{row.group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <span
                        key={item.title}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                      >
                        <span className="text-lg text-emerald-300" aria-hidden="true">
                          {item.icon}
                        </span>
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col gap-8">
            <Card className="p-6 md:p-8">
              <h3 className="font-serif text-2xl">How I Work</h3>
              <p className="text-white/70 text-sm mt-4 leading-relaxed">
                I start from the workflow, not the framework. I sit with the people who will use the system, map what
                they do by hand today, and replace it with something they open every morning — then I stay on it in
                production and keep changing it as the work changes.
              </p>
            </Card>

            <Card className="p-6 md:p-8">
              <h3 className="font-serif text-2xl">Going Deeper In</h3>
              <ul className="mt-4 space-y-3">
                {focus.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
