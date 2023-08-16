import React from "react";
import mongoIcon from "../others/icons/mongo.ico";
import nodeJsIcon from "../others/icons/nodeJs.png";
import { BiSolidRightArrow } from "react-icons/bi";

function Home() {
  return (
    <div
      name="home"
      className="w-full h-[85vh]  px-[7%] flex justify-center items-center"
    >
      <div name= "innerDiv"
        className="rounded-lg aboutContainer flex flex-col md:flex-row justify-center items-center w-full backdrop-blur-md bg-gray-900 bg-opacity-10"
        style={{ minHeight: "50%" }}
      >
        <div className="p-3">
          <p className="ml-4 text-blue-800 font-semibold text-[17px] font-1 tracking-tight">
            Hello, I am
          </p>
          <p
            className="text-4xl sm:text-7xl  font-semibold border-[#d69745] border-b-[5px] rounded-b text-[#deb176] pt-3 pb-1 "
            style={{ fontFamily: "'Cinzel Decorative', cursive" }}
          >
            Ahmad
          </p>
          <div className="flex text-4xl sm:text-5xl font-light text-gray-600 sm:items-start items-center">
            <h2 className="text-blue-800">A MERN stack developer.</h2>
          </div>

          <div>
            <button className=" rounded-md group flex h-[50px] items-center px-3 mt-5 text-[blue-400] border-[1px] border-[#deb176] hover:bg-white hover:backdrop-blur-md hover:opacity-50 hover:text-[#1d3c69] duration-300">
              <span className="mb-[4px] text-[17px] text-blue-300">
                My work
              </span>
              <span className="px-3 group-hover:rotate-90 duration-300 text-blue-300">
                <BiSolidRightArrow />
              </span>
            </button>
          </div>
        </div>
        <div className="p-3">
          <p className=" my-5 text-gray-600 font-normal max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas error
            tempore sed molestias culpa repudiandae. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
