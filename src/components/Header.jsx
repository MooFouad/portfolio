import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div
        className="bg-dark-theme w-[100vw] min-h-[100vh] truncate justify-center items-center p-10 text-white flex flex-col max-md:text-wrap pt-[100px] gap-6">
        <div className="flex justify-center items-center">
            <img src="/images/profile.jpg" alt="profile img" className="rounded-full min-w-[150px] max-w-[180px] " />
        </div>
        <motion.div
        whileInView={{
            opacity:[0, 1],
            x:[-100, 0]
        }}
        transition={{
            duration:1,
        }}
        className="mb-[50px]">
            <p className="bold text-gray-200 text-3xl max-md:text-xl">
            Hey, I&#39;m Mohamed Fouad
            </p>
            <h1 className="text-6xl bold text-blue mb-4 max-md:text-3xl">
            Front End{" "}
            <span className=" bold  text-gray-300 mb-6 text-6xl max-md:text-3xl">Developer</span>
            </h1>
            <p className="text-wrap text-gray-400 max-w-[500px] mb-4 text-2xl">
            A skilled and motivated front-end Developer with experience in ReactJS
            and TypeScript. fundamental understanding of mobile-first design
            Concepts, cross-browser deployment, API implementation and search
            engine optimization (SEO)
            </p>
            <button
            className="bg-blue text-white bold px-8 py-2 rounded  md:text-lg
                    hover:cursor-pointer bold hover:text-blue hover:bg-white duration-300 ease-in-out"
            >
                <MdDownload className="inline mr-2"/>
                <a href="Mohamed Fouad Resume.pdf" download='Mohamed Fouad Resume.pdf'>Download Resume</a>
            </button>
        </motion.div>
        </div>
    );
};

export default Header;
