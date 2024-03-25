import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    const [toggle, setToggel] = useState(true);
    return (
        <nav className="z-10 fixed bg-dark-theme w-[100vw] drop-shadow-xl text-white justify-between items-center  flex max-md:flex-wrap py-2 truncate">
            {/* logo */}
        <div className="logo-container bold text-blue flex items-center justify-between max-md:w-full px-10">
            <div className="logo text-3xl py-2">
                <a href="#">MoFouad</a>
            </div>
            {/* icons  */}
            <div className="md:hidden text-white py-2 text-[30px]">
                {toggle && <FiMenu onClick={()=>setToggel(!toggle)}/>}
                {!toggle && <IoMdClose onClick={()=>setToggel(!toggle)}/>}
            </div>
        </div>
        {/* Features */}
        {toggle ? (
            // before click the menu icon do this
            <div className="md:flex max-md:hidden">
                <ul className="md:flex md:items-center gap-4">
                    <li className="mx-4">
                        <a href="#" className="text-xl hover:text-blue duration-300">
                        Home
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#about" className="text-xl hover:text-blue duration-300">
                        About
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#portfolio" className="text-xl hover:text-blue duration-300">
                        Portfolio
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="#contact" className="text-xl hover:text-blue duration-300">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        ):(
            // after click menu icon
            <div className="max-md:block mb-2">
                <ul className="max-md:flex flex-col gap-4 mt-4 my-0 py-0 box-border w-[100vw] text-center">
                    <li className="mx-4">
                        <a onClick={()=>setToggel(!toggle)} href="#" className="text-xl hover:text-blue duration-300">
                        Home
                        </a>
                    </li>
                    <li className="mx-4">
                        <a onClick={()=>setToggel(!toggle)} href="#about" className="text-xl hover:text-blue duration-300">
                        About
                        </a>
                    </li>
                    <li className="mx-4">
                        <a onClick={()=>setToggel(!toggle)} href="portfolio" className="text-xl hover:text-blue duration-300">
                        Portfolio
                        </a>
                    </li>
                    <li className="mx-4">
                        <a onClick={()=>setToggel(!toggle)} href="#contact" className="text-xl hover:text-blue duration-300">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        )}
        {/* social links */}
        {
            toggle ? (
                // before toggle
                <div className="links hover:cursor-pointer md:flex gap-8 max-md:hidden px-10">
            <a className="hover:text-blue duration-200"  href="https://github.com/MooFouad" target="_blank">
                <FaGithub className="text-2xl"/>
            </a>
            <a className="hover:text-blue duration-200"  href="https://www.linkedin.com/in/mohamed-fouad-6426231a5/" target="_blank">
                    <FaLinkedin className="text-2xl"/>
                </a>
            <a className="hover:text-blue duration-200"  href="https://www.instagram.com/m0hammed_fouad/" target="_blank">
                    <FaInstagram className="text-2xl"/>
                </a>
            
        </div>
            ):(
                // after toggle
                <div className="links max-md:flex  gap-4 mt-4 my-0 py-0 box-border w-[100vw] justify-center items-center
                hover:cursor-pointer ">
                <a className="hover:text-blue duration-200" href="https://github.com/MooFouad" target="_blank">
                    <FaGithub className="text-2xl"/>
                </a>
                <a className="hover:text-blue duration-200"  href="https://www.linkedin.com/in/mohamed-fouad-6426231a5/" target="_blank">
                    <FaLinkedin className="text-2xl"/>
                </a>
                <a className="hover:text-blue duration-200"  href="https://www.instagram.com/m0hammed_fouad/" target="_blank">
                    <FaInstagram className="text-2xl"/>
                </a>
            
        </div>
            )
        }
        </nav>
    );
};

export default Navbar;
