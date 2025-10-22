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
                <h3 className="font-semibold text-xl">Full Stack Developer</h3>
                <p className="text-emerald-300 text-sm font-medium mt-1">GTS • Jan 2025 - Present</p>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Architecting and developing scalable full-stack web applications using the MERN stack.
                  Implementing responsive, cross-browser compatible interfaces with React.js, Next.js, and TypeScript.
                  Integrating RESTful APIs and optimizing application performance while maintaining high code quality standards
                  through comprehensive code reviews and best practices.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">React.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-emerald-300/10 text-emerald-300 rounded">MongoDB</span>
                </div>
              </div>

              <div className="border-l-4 border-sky-400 pl-4 hover:border-l-8 transition-all duration-300">
                <h3 className="font-semibold text-xl">Frontend Developer</h3>
                <p className="text-sky-400 text-sm font-medium mt-1">Relvecrop • Oct 2023 - Dec 2024</p>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  Spearheaded the development of an engaging football cards game platform using Next.js,
                  focusing on delivering a seamless and immersive user experience. Implemented responsive,
                  mobile-first interfaces and collaborated with cross-functional teams to integrate dynamic
                  content and APIs. Conducted thorough code reviews and optimized performance to ensure
                  technical excellence and maintainability.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">React.js</span>
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-sky-400/10 text-sky-400 rounded">API Integration</span>
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
