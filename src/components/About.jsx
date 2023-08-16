import React from "react";

export default function About() {
  return (
    <div name = "about" className=" text- flex flex-col justify-center items-center h-screen w-full px-[7%] ">
      <div className="flex flex-col backdrop-blur-md  p-4  h-min md:h-[40%] aboutContainer rounded-lg  bg-gray-900 bg-opacity-10">
        <div className="grid sm:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold pb-3 border-[#d69745] border-b-[5px] rounded-bl pt-3 pl-5 text-[#deb176]  ">
              About
            </h1>
          </div>
          <div className=" border-[#d69745] border-b-0 sm:border-b-[5px] rounded-br"></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 pt-[10px]">
          <div className="sm:text-right my-auto">
            <h1 className="inline text-3xl md:text-4xl  text-blue-800">
              I am a freshie MERN stack developer, nice to meet you.
            </h1>
          </div>
          <div className="text-[17px] text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ullam in aspernatur officiis saepe laudantium asperiores, aliquid
              nam autem nobis repudiandae voluptatem tempore minima magnam!
              Maxime eos doloribus porro quidem corrupti nihil?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
