import React from "react";

export default function Form() {
  return (
    <div className="px-[7%]   max-w-full">
        <div className="rounded-md backdrop-blur-md p-4 bg-gray-900 bg-opacity-10 aboutContainer h-[60%]  w-max-[700px]">

            <h1 className="text-3xl sm:text-4xl font-bold  border-[#deb176] border-b-[5px] rounded-b pb-3 text-[#d69745]">Leave a message.</h1>
                <div>
                    <form method="POST" action="https://getform.io/f/5f42384a-af79-42d6-b943-4961b6ff2c20" className="flex flex-col justify-center items-center text-blue-200">
                        <div className="flex flex-col sm:flex-row justify-center items-center p-5 ">
                            <input type="name" placeholder="Name" className="h-[50px] rounded-lg px-2 my-1 sm:mx-1  md:w-[] w-max-[30%] border-[1px] border-gray-500 bg-[#1e3747] bg-opacity-40 w-full focus:bg-transparent duration-300 "/>
                            <input type="email" placeholder="Email" className="h-[50px] rounded-lg px-2 my-1 sm:mx-1  md:w-[] w-max-[30%] border-[1px] border-gray-500 bg-[#1e3747] bg-opacity-40 w-full focus:bg-transparent duration-300 "/>
                        </div>
                        <div className=" flex justify-center w-[80%]">
                            <textarea name="message" id=""  placeholder="Message" className="rounded-t-lg w-full h-[300px] p-4 border-[1px] border-gray-500 border-b-0 bg-[#1e3747] bg-opacity-40 focus:bg-transparent duration-300 "></textarea>
                        </div>
                        <div className=" group cursor-pointer mb-4 flex w-[80%] justify-center items-center h-[40px] rounded-b-lg border-[1px] border-gray-500 border-t-0">
                            <button className="w-full h-full"  >Submit</button>
                        </div>
                        
                    </form>
                </div>
        </div>
    </div>
  );
}
