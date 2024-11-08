// import logo from '../assets/Logo.png';
import '../assets/css/Style.css';
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { TbSquareLetterS } from "react-icons/tb";
import { CgMail } from "react-icons/cg";


const Navbar=()=> {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center ms-2'>
            {/* <img src={logo} alt="wait" className='logo-img mx-2 w-10 text-light'/> */}
            <TbSquareLetterS className='text-5xl'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href={"https://www.linkedin.com/in/swamynathan-m-253b461a4/"} target='_blank'><FaLinkedin/></a>
            <FaInstagram/>
            <a href={"https://github.com/swamynathan-repo"} target="_blank"><FaGithub/></a>
            <a href={"mailto:samynathanshams@gmail.com"}> <CgMail className='text-3xl'/></a>
        </div>
    </nav>
  )
}

export default Navbar