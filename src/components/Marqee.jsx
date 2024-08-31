
import { motion } from 'framer-motion'
import React from 'react'


function Marqee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white bg-[#004D43]  '>
        <div className='text border-b-2 border-t-2 overflow-hidden border-zinc-300 flex   whitespace-nowrap  '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}} className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] pt-10 -mb-[1vw] font-semibold uppercase pr-10 '>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}} className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] pt-10 -mb-[1vw] font-semibold uppercase pr-10 '>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marqee