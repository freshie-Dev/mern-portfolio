import React, {useState, useEffect} from "react";
import '../customStyles.css'

import { Link } from "react-scroll";

import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineCodeSandbox } from "react-icons/ai";

// use this BsFillPersonLinesFill, CgMoreVerticalO, CgCloseO, ImGithub form react-icons
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMoreVerticalO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";


export default function ToggleNavbar() {
  const [navButton, setNavButton] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  setInterval(() => {
    setWidth(window.innerWidth);
  }, 100);

  useEffect(() => {
    console.log(width);
    if (width > 768) {
      setNavButton(false);
      console.log(navButton);
    } else {
      console.log(navButton);
    }
  }, [width]);

  const handleNav = () => {
    setNavButton(!navButton);
  };

  return (
    <>
      {/* hamburger */}
      <div className="block md:hidden pr-4 cursor-pointer " onClick={handleNav}>
        {navButton ? (
          <CgCloseO size={32} onClick={handleNav} />
        ) : (
          <CgMoreVerticalO size={30} onClick={handleNav} />
          
        )}
      </div>
      
      {/* sidebar */}
      <div 
        className={`
          ${navButton
            ? " z-50 duration-100 fixed top-0 left-0 block w-[60%] p-4 h-full border-r border-gray-500 backdrop-blur-md bg-gray-900 bg-opacity-10"
            : "fixed hidden duration-0"}
        `}
      >
        {/* <BsFillPersonLinesFill className="text-4xl my-5 mx-4" /> */}
        {/* <img src={icon} alt="icon" /> */}
        <h1 className=" w-full text-3xl font-bold mb-5" style={{fontFamily: "'Cinzel Decorative', cursive "}}>Portfolio</h1>
        <ul className="uppercase font-semibold">
          <li className="p-4 border-b border-gray-600 "><Link className="cursor-pointer" to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="p-4 border-b border-gray-600 "><Link className="cursor-pointer" to="about" smooth={true} duration={500}>About</Link></li>
          <li className="p-4 border-b border-gray-600 "><Link className="cursor-pointer" to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className="p-4 border-b border-gray-600 "><Link className="cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <ul className="my-[50px] flex justify-evenly">
          <li className=" flex items-center">
            <a href="https://github.com/freshie-Dev" className="flex   p-1 rounded-full  bg-gray-800 text-white duration-300"><ImGithub size={35} />{" "}</a>
          </li>
          <li className=" flex  items-center">
              <a href="https://www.facebook.com/profile.php?id=100004357007777"  className="flex   p-1 rounded-full  bg-[#1D3C69] text-white duration-300"><FaFacebook size={35} />{" "}</a>
          </li>
          <li className=" flex  items-center">
              <a href="https://codesandbox.io/dashboard/drafts?workspace=ae3a8693-fec5-4e7b-be52-9bb0c5f10cd8" className="flex   p-1 rounded-full  bg-green-500 duration-300"><AiOutlineCodeSandbox size={35} />{" "}</a>
          </li>
          <li className=" flex  items-center">
              <Link to="contact" smooth = {true} duration = {500}className=" cursor-pointer flex  p-1 rounded-full  bg-red-500 duration-300 text-white"><BiLogoGmail size={35}/>{" "}</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
