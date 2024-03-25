
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='bg-dark-theme text-gray-300 flex justify-center items-center py-8'>
            <div className=" hover:cursor-pointer flex gap-10">
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
        </footer>
    )
}

export default Footer