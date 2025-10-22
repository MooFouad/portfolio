"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import {useRef} from 'react';


const toolboxItem = [
  {
    title : "HTML5",
    icon : < FaHtml5 />,
  },
  {
    title : "CSS3",
    icon : < FaCss3Alt />,
  },
  {
    title : "JavaScript",
    icon : < IoLogoJavascript />,
  },
  {
    title : "React",
    icon : < FaReact />,
  },
  {
    title : "NextJS",
    icon : < RiNextjsLine />,
  },
  {
    title : "TypeScript",
    icon : < SiTypescript />,
  },
  {
    title : "Redux",
    icon : < TbBrandRedux />,
  },
  {
    title : "ReactQuery",
    icon : < SiReactquery />,
  },
  {
    title : "Tailwind CSS",
    icon : < SiTailwindcss />,
  },
  {
    title : "Mui",
    icon : < SiMui />,
  },
  {
    title : "Styled Components",
    icon : < SiStyledcomponents />,
  },
  {
    title : "Sass",
    icon : < FaSass />,
  },
  {
    title : "Firebase",
    icon : < IoLogoFirebase />,
  },
  {
    title : "Git",
    icon : < IoIosGitBranch />,
  },
  {
    title : "Github",
    icon : < FaGithub />,
  },
]
const hobbies = [
  {
    title : "Fitness",
    emoji : "🏋️",
    left: "5%",
    top: "5%",
  },
  {
    title : "Photography",
    emoji : "📷",
    left: "50%",
    top: "5%",
  },
  {
    title : "Hiking",
    emoji : "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title : "Gaming",
    emoji : "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title : "Music",
    emoji : "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title : "Reading",
    emoji : "📚",
    left: "5%",
    top: "65%",
  },
  {
    title : "Painting",
    emoji : "🎨",
    left: "45%",
    top: "70%",
  },
]
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return <div id="about" className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Passionate MERN Stack Developer with hands-on experience in building responsive, high-performance web applications. Currently working at GTS in Riyadh, Saudi Arabia." />
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader 
            title="My Reads" 
            description="Explore the books shaping my perspective." 
          />       
        <div className="w-40 mx-auto mt-2 md:-mt-0">
          <Image src={bookImage} alt="book image" />
        </div>
        </Card>
        <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
          <CardHeader 
            title="My Toolbox" 
            description="Explore the technologies and tools I used to craft exceptional digital experiences." 
            className="px-6 pt-6"
          />  
        <ToolboxItems items={toolboxItem} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
        <ToolboxItems items={toolboxItem} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:25s]" />
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader 
            title="Beyond the code" 
            description="Explore my interests and hobbies beyond the digital realm." 
            className="p-6"
          />
          <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map( hobby =>(
              <motion.div 
              key={hobby.title} 
              className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute z-50"
              style={{
                left: hobby.left,
                top: hobby.top,
              }}
              drag
              dragConstraints={constraintRef}
              >
                <span className="font-medium text-gray-950">    {hobby.title}
                </span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
          <Image src={mapImage} alt="map image"
            className="w-full h-full object-cover object-left-top"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:rounded-full after:outline-gray-950/30 after:-outline-offset-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image src={smileMemoji} alt="map image"
              className="size-20"
            />
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader
            title="Work Experience"
            description="My professional journey in software development."
          />
          <div className="mt-6 space-y-4">
            <div className="border-l-2 border-emerald-300 pl-4">
              <h3 className="font-semibold text-lg">Front End Developer</h3>
              <p className="text-emerald-300 text-sm">GTS • Jan 2025 - Present</p>
              <p className="text-white/60 text-sm mt-2">Developing and maintaining responsive web applications using React.js, Next.js, and TypeScript. Building cross-browser compatible interfaces and integrating RESTful APIs.</p>
            </div>
            <div className="border-l-2 border-sky-400 pl-4">
              <h3 className="font-semibold text-lg">Front End Developer</h3>
              <p className="text-sky-400 text-sm">Relvecrop • Oct 2023 - Dec 2024</p>
              <p className="text-white/60 text-sm mt-2">Developed a football cards game using Next.js with focus on seamless user experience. Implemented responsive interfaces and conducted code reviews.</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <CardHeader
            title="Education & Skills"
            description="Academic background and core competencies."
          />
          <div className="mt-6">
            <div className="border-l-2 border-emerald-300 pl-4 mb-6">
              <h3 className="font-semibold text-lg">Bachelor of Computer Science</h3>
              <p className="text-emerald-300 text-sm">Menofia University • 2018 - 2022</p>
              <p className="text-white/60 text-sm mt-2">Graduated with comprehensive knowledge in computer science fundamentals, data structures, and software engineering principles.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Core Competencies:</h4>
              <p className="text-white/60 text-sm">SEO Optimization • Cross-browser Compatibility • API Integration • Mobile-first Design • Code Reviews • Performance Optimization • Agile Methodologies</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
  </div>;
};
