import React, {useState, useEffect} from "react";
import ToggleNavbar from "./ToggleNavbar";

import { Link } from "react-scroll";

import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineCodeSandbox } from "react-icons/ai";

export default function Navbar() {
  const [verticalScroll, setScrollY] = useState(scrollY);


  useEffect(() => {
    if (verticalScroll === 0) {
      console.log("vertical 0");
    } else {
      console.log("vertical scroll: " + verticalScroll);
    }
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [verticalScroll]);
  
  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollY(scrolled);
  };
  
  
  

  return (
    <div className={`h-20  w-[80%] fixed text-[#1d3c69] rounded-b-lg top ${verticalScroll>100? "navShadow  bg-[#B1D4F2] duration-500": null}`}>
      <div className={` flex items-center justify-between fixed w-[80%] h-20 pl-4 z-10 `}>
        <div>
          <h1 className=" w-full text-3xl font-bold " style={{fontFamily: "'Cinzel Decorative', cursive "}}>Portfolio</h1>
        </div>

          <ul className="font-semibold hidden md:flex">
            <li className="p-4 "><Link className="cursor-pointer" to="home" smooth={true} duration={500}>Home</Link></li>
            <li className="p-4 "><Link className="cursor-pointer" to="about" smooth={true} duration={500}>About</Link></li>
            <li className="p-4 "><Link className="cursor-pointer" to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className="p-4 "><Link className="cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>

        {/* toggle button and sidbar */}
          <ToggleNavbar />
      </div>
    
    

      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-[10px]  ">
        <ul>
          <li className="w-[140px] h-[50px] flex justify-between items-center">
            <a href="https://github.com/freshie-Dev" className="flex justify-between  items-center p-2 rounded-full w-full m-[-95px] text-gray-800 hover:ml-[0px] hover:bg-gray-800 hover:text-white duration-300">Github<ImGithub size={35} />{" "}</a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center">
              <a href="https://www.facebook.com/profile.php?id=100004357007777" className="flex justify-between items-center p-2 rounded-full w-full m-[-95px] text-blue-600 hover:ml-[0px] hover:bg-blue-500 hover:text-white duration-300">Facebook<FaFacebook size={35} />{" "}</a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center">
              <a href="https://codesandbox.io/dashboard/drafts?workspace=ae3a8693-fec5-4e7b-be52-9bb0c5f10cd8" className="flex justify-between items-center p-2 rounded-full w-full m-[-95px] text-green-500 hover:ml-[0px] hover:bg-green-500 hover:text-white duration-300">Sandbox<AiOutlineCodeSandbox size={40} />{" "}</a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center">
              <Link to="contact" smooth = {true} duration={500} className=" cursor-pointer flex justify-between items-center p-2 rounded-full w-full m-[-95px] hover:ml-[0px] text-red-400 hover:bg-red-500 hover:text-white duration-300">Gmail<BiLogoGmail size={35} />{" "}</Link>
          </li>
        </ul>
      </div> 
    </div>
  );
}
