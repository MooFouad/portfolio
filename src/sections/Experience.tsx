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
          description="A comprehensive overview of my professional experience and academic background in software development."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience Card */}
          <Card className="p-6 md:col-span-1">
            <CardHeader
              title="Professional Experience"
              description="Building innovative solutions and delivering exceptional results."
            />
            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-emerald-300 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Front End Developer</h3>
                <p className="text-emerald-300 text-sm font-medium mt-1">GTS (German Technical Service) • Jan 2025 - Present</p>
                <p className="text-white/70 text-sm mt-3 leading-relaxed mb-3">
                  Developing full-stack MERN applications serving 200+ employees, reducing manual workload by 60%.
                </p>
                <ul className="text-white/70 text-sm space-y-2 list-disc list-inside">
                  <li>Built Vehicle Periodic Inspection Management System with automated email notifications and real-time alerts, preventing 95% of missed renewals</li>
                  <li>Created Integrated Management Platform for social insurance, apartment rentals, and utility bills with MongoDB database architecture</li>
                  <li>Developed AI-powered chatbot using OpenAI API for employee inquiries, reducing HR response time by 70%</li>
                  <li>Implemented responsive interfaces using React.js, Next.js, Node.js, Express.js, and MongoDB</li>
                  <li>Conduct code reviews and optimize application performance following best practices</li>
                  <li>Collaborate with cross-functional teams including HR and operations to deliver tailored solutions</li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">React.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Express.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">MongoDB</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">OpenAI API</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Education & Certifications Card */}
          <Card className="p-6 md:col-span-1">
            <CardHeader
              title="Education & Expertise"
              description="Academic foundation and professional competencies."
            />
            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-emerald-300 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Bachelor of Computer Science</h3>
                <p className="text-emerald-300 text-sm font-medium mt-1">Menofia University • 2018 - 2022</p>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Graduated with comprehensive knowledge in computer science fundamentals, including data structures,
                  algorithms, software engineering principles, database management, and web technologies.
                  Developed a strong foundation in problem-solving and analytical thinking through rigorous
                  coursework and hands-on projects.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-lg mb-3">Core Competencies</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-2">Technical Skills</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Full-Stack Development • RESTful API Design • Database Architecture •
                      Performance Optimization • Mobile-First Design • Cross-Browser Compatibility
                    </p>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-2">Professional Skills</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Code Review & Quality Assurance • Agile Methodologies • Team Collaboration •
                      Technical Documentation • Problem-Solving • Time Management
                    </p>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-2">Specializations</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      SEO Optimization • Web Performance • Accessibility Standards •
                      State Management • Testing & Debugging
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
