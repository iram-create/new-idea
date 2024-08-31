import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cardss = [useAnimation(), useAnimation];
  const handleHover = (index) => {
    cardss[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cardss[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-8xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10  mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontaionar  w-1/2 relative  h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden z-[9] left-full text-[#adc954] -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter font-["Founders_Grotesk_X-Condensed"]'>
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cardss[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inlineblock"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-400 overflow-hidden rounded-xl ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              ></img>
            </div>
          </motion.div>
          <motion.div
           onHoverStart={() => handleHover(1)}
           onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontaionar relative w-1/2  h-[75vh]">
            <div className=" card w-full h-fulloverflow-hidden rounded-xl">
              <h1 className='absolute z-[9] flex overflow-hidden right-full text-[#adc954] translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter font-["Founders_Grotesk_X-Condensed"]'>
                {"VISE".split("").map((item, index) => (
                  <motion.span 
                  initial={{ y: "100%" }}
                 
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                 
                  >{item}</motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
