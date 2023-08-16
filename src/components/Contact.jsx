import React from "react";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import gmail from "../assets/gmail.svg";
import twitter from "../assets/twitter.svg";
import { FaFacebook } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import insta from "../assets/instaIcon.svg"

export default function Contact() {
  return (
    <>
    <div className="flex   h-[100px] sm:h-[150px] w-full  px-[7%] mb-[50px] my-auto">
      <div className="flex w-full justify-center items-center h-full rounded-md backdrop-blur-md  bg-gray-900 bg-opacity-10 aboutContainer">
        <div className="h-min mx-3" >
          <a className="text-blue-700" href="https://www.facebook.com/profile.php?id=100004357007777" >
            <FaFacebook size={30} />
          </a>
        </div>
        {/* <div className="h-min mx-3" >
          <a className="text-red-400" href="">
            <BiLogoGmail size={30} />
          </a>
        </div> */}
        <div className=" h-min mx-3 ">
          <a href="https://www.instagram.com/haye.hi.high/"><img src={insta} width={30} alt=""/></a>
        </div>
        <div className="h-min mx-3" >
          <a className="text-blue-400" href="https://twitter.com/a_4ahmadd">
            <AiOutlineTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
