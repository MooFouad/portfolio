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
import { motion } from "framer-motion"

const About = () => {
    return (
        // container
        <div id="about" 
        className="bg-dark-theme pt-[50px] text-white px-10 flex justify-evenly items-center  max-md:flex-col max-md:justify-center max-md:items-start">
        {/* edu info */}
        <motion.div 
        whileInView={{
            opacity:[0, 1],
            x:[-100, 0]
        }}
        transition={{
            duration:.8,
        }}
        className="flex flex-col justify-center items-start gap-2 bold mb-8">
            <h1 className="text-[30px] text-blue uppercase">Education</h1>
            <p className="text-gray-500">2018 - 2022</p>
            <p className="text-gray-300">BACHELOR, COMPUTER SCIENCE</p>
            <p className="text-gray-300">COMPUTER AND INFORMATION UNIVERSITY</p>
        </motion.div>
        {/* skills info */}
        <motion.div 
        whileInView={{
            opacity:[0, 1],
            x:[ -100, 0]
        }}
        transition={{
            duration:.8,
        }}
        className="flex flex-col justify-center items-start gap-4 max-w-[680px]">
            <h1 className="text-blue uppercase bold text-[30px]">Skills</h1>
            {/* skills wraper */}
            <div className="flex flex-wrap gap-10 justify-start items-center bold text-gray-300 mb-[50px]">
                <div className="flex flex-col justify-center items-center gap-2">
                    <FaHtml5 className="text-[40px] text-blue"/>
                    <p>HTML</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <FaCss3Alt className="text-[40px] text-blue"/>
                    <p>CSS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <FaSass className="text-[40px] text-blue"/>
                    <p>SASS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <IoLogoJavascript className="text-[40px] text-blue"/>
                    <p>JS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <FaReact className="text-[40px] text-blue"/>
                    <p>React</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <SiTypescript className="text-[40px] text-blue"/>
                    <p>Typescript</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <TbBrandRedux className="text-[40px] text-blue"/>
                    <p>ReduxToolkit</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <SiReactquery className="text-[40px] text-blue"/>
                    <p>React Query</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <IoLogoFirebase className="text-[40px] text-blue"/>
                    <p>Firebase</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <SiTailwindcss className="text-[40px] text-blue"/>
                    <p>TailwindCSS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <SiMui className="text-[40px] text-blue"/>
                    <p>Material UI</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <SiStyledcomponents className="text-[40px] text-blue"/>
                    <p>Styled Components</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <IoIosGitBranch className="text-[40px] text-blue"/>
                    <p>Git</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <FaGithub className="text-[40px] text-blue"/>
                    <p>Github</p>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default About;
