import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-white border-t-2  ">
      <div className="textstructure mt-40 px-10">
        {["we create", "eye-opening", "presentation"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className="mr-[1vw] w-[8vw] h-[5.8vw] overflow-hidden rounded-md -top-[1.2vw]">
                    <img className="bg-cover  w-[8vw] h-[5.8vw]   bg-center" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></img>
                  </motion.div>
                )}
                <h1
                  key={index}
                  className=' uppercase text-[7vw] leading-[7vw]  font-bold '
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-500 mt-20 mb-20 flex justify-between items-center py-5 px-20 uppercase">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tighter leading-none">
            {item}
          </p>
        ))}
        <div className="strat flex items-center gap-5 ">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center  justify-center border-[1px] border-zinc-200 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
