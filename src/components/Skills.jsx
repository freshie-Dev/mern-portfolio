import React from "react";

import cssPng from "../assets/css.png";
import githubPng from "../assets/github.png";
import htmlPng from "../assets/html.png";
import jsPng from "../assets/javascript.png";
import mongoPng from "../assets/mongo.png";
import nodeJs from "../assets/node.png";
import reactPng from "../assets/react.png";
import tailwindPng from "../assets/tailwind.png";

export default function Skills() {
  return (
    <div name="skills" className=" h-screen w-[full] max-w-full flex justify-center items-center px-[7%]">
      <div className="text-gray-800 font-bold flex flex-col w-full aboutContainer p-4  rounded-md backdrop-blur-md  bg-gray-900 bg-opacity-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold  border-[#d69745] border-b-[5px] rounded-b pb-3 text-[#deb176]">
            Skills
          </h1>
          <p className="mt-3 text-[19px] text-blue-900 font-semibold">
            Technologies i have worked with.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 gap-10 text-[#deb176]">
          <div className="text-center ">
            <img
              className="mx-auto  w-[70px] sm:w-[100px] shadow-lg  backdrop-blur-sm"
              src={reactPng}
              alt=""
            />
            <p className="mt-4">REACT</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px]  shadow-lg  backdrop-blur-sm"
              src={jsPng}
              alt=""
            />
            <p className="mt-4">JAVASCRIPT</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px] shadow-lg  backdrop-blur-sm"
              src={nodeJs}
              alt=""
            />
            <p className="mt-4">NODE JS</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px] shadow-lg  backdrop-blur-sm"
              src={mongoPng}
              alt=""
            />
            <p className="mt-4">MONGO</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px]  shadow-lg  backdrop-blur-sm"
              src={tailwindPng}
              alt=""
            />
            <p className="mt-4">TAILWIND</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px] shadow-lg  backdrop-blur-sm"
              src={githubPng}
              alt=""
            />
            <p className="mt-4">GITHUB</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px] shadow-lg  backdrop-blur-sm"
              src={htmlPng}
              alt=""
            />
            <p className="mt-4">HTML</p>
          </div>
          <div className="text-center ">
            <img
              className="mx-auto w-[70px] sm:w-[100px]  shadow-lg  backdrop-blur-sm"
              src={cssPng}
              alt=""
            />
            <p className="mt-4">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
