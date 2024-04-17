    import { useState } from "react";
    import { motion } from "framer-motion"



    const Projects = () => {
    const arr = [{ name: "react" }, { name: "js" }, { name: "html" }];
    const projects = [
        {
        name: "disney",
        cat: "react",
        url : 'https://effortless-melomakarona-828453.netlify.app/',
        tec : ['React', 'Firebase', 'ReduxToolkit', 'React-Router', 'styled-components'],
        },
        {
        name: "shopper",
        cat: "react",
        url : 'https://shopper-ecommerce-two.vercel.app/',
        tec : ['React', 'useContext', 'React-Router', 'TailwindCSS'],
        },
        
        {
        name: "crypto",
        cat: "react",
        url : 'https://beautiful-muffin-45a42f.netlify.app/',
        tec : ['React', 'useContext', 'ReactRouter', 'MUI'],
        },
        {
        name: "youtube",
        cat: "react",
        url : 'https://classy-griffin-bde964.netlify.app/',
        tec : ['React', 'RapidAPI', 'Axios', 'React-Router', 'MUI'],
        },
        {
        name: "tesla",
        cat: "react",
        url : 'https://marvelous-kleicha-06da96.netlify.app/',
        tec : ['React',  'ReduxToolkit', 'styled-components'],
        },
        {
        name: "todo",
        cat: "js",
        url : 'https://moofouad.github.io/react-todo/'
        },
        {
        name: "tours",
        cat: "js",
        url : 'https://moofouad.github.io/react-tours/'
        },
        {
        name: "taps",
        cat: "js",
        url : 'https://moofouad.github.io/react-taps/'
        },
        {
        name: "slider",
        cat: "js",
        url : 'https://moofouad.github.io/react-slider/'
        },
        {
        name: "review",
        cat: "js",
        url : 'https://moofouad.github.io/react-review/'
        },
        {
        name: "accordion",
        cat: "js",
        url : 'https://moofouad.github.io/react-accordion/'
        },
        {
        name: "coffe",
        cat: "html",
        url : 'https://goofy-banach-66168c.netlify.app/',
        tec : ['HTML', 'CSS']
        },
        {
        name : "gym",
        cat: "html",
        url : 'https://moofouad.github.io/fitnesshouse/',
        tec : ['HTML', 'SCSS']
        },
    ];
    const [category, setCategory] = useState("react");
    return (
        <main id="portfolio" 
        className="bg-dark-theme w-[100vw]  truncate justify-center items-center p-10  text-white flex max-md:flex-col ">
        {/* title & filter bar container */}
        <div className="flex flex-col gap-2 justify-center items-center ">
            <h1 className="bold uppercase text-blue text-3xl mb-6 ">My Projects</h1>
            <div className="flex gap-10 flex-col">
            {/* category filter bar */}
            <div className="flex justify-center items-center gap-10 ">
                {arr.map((item, id) => (
                <button
                    className={`${
                    item.name === category ? "text-white bg-blue rounded py-2 px-4 bold md:text-xl duration-500 " : "text-blue bg-gray-100 rounded py-2 px-4 bold text-xl duration-500"
                    } hover:bg-blue hover:text-white uppercase `}
                    onClick={() => setCategory(item.name)}
                    key={id}
                >
                    {item.name}
                </button>
                ))}
            </div>
                {/* project container */}
            <div className="flex  flex-wrap justify-start items-center max-md:flex-col">
                {projects.map((project, id) => (
                <div className="flex flex-col justify-center items-center" key={id}>
                    {category === project.cat && (
                    <motion.div 
                    whileInView={{
                        opacity:[0, 1],
                        y:[100, 0],
                    }}
                    whileHover={{scale:1.05}}
                    transition={{
                        duration:.5,
                    }}
                    className="flex flex-col   justify-center items-start 
                    border-solid border-2 border-gray-500 p-6 rounded-xl max-md:mb-4 md:m-4
                    ">
                        
                        {/* img div */}
                        <div className="mb-4">
                            <img className="h-full w-[380px]" src={`/images/${project.name}.png`} alt={project.name} />
                        </div>
                        {/* title */}
                        <div className="flex flex-col justify-center items-start w-full  mb-2 ">
                                <h2 className="uppercase bold text-blue text-2xl">{project.name}</h2>
                                {
                                    project.tec ? (
                                        <p className="flex flex-wrap items-center justify-start text-gray-400 max-w-[380px] " >
                                            <span className="text-blue text-xl bold flex flex-wrap">Technologies : </span>{project.tec.map((sec, id)=>(
                                            <p className=" rounded-xl max-w-[350px] text-wrap m-1 p-1 border-solid border-2 border-gray-500" key={id}>
                                                {sec}
                                            </p>
                                        ))}</p>
                                    ) : ''
                                }
                        </div>
                        {/* review */}
                        <div className="w-full">
                            <button className=" bg-blue py-2 px-8 rounded-xl hover:text-blue hover:bg-white duration-500 w-full">
                                <a href={project.url} target="_blank">Live Preview</a>
                            </button>
                        </div>
                    </motion.div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>
        </main>
    );
    };

    export default Projects;
