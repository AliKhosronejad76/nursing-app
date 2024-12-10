"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import { IoShieldCheckmarkOutline } from "react-icons/io5";




export default function Support(){
    const {ref , inView} = useInView();
    return(
        <motion.section ref={ref} className="flex flex-col sm:flex-row px-4 py-4  items-center ">
            <motion.div
             initial={{x:'700px',}}
             animate={inView ? {x:0 , } : {}} 
             transition={{duration:.8 ,delay:.8}}
             className="w-full sm:w-[50%] lg:w-[56%] flex flex-wrap justify-between gap-6">
                <Item desc="بشتیبانی حرفه ای در کم ترین زمان" />
                <Item desc="یک تماس در رفع مشکل" />
                <Item desc="ارایه بهترین خدمات با کادر مجرب" />
                <Item desc="ایجاد حس خوب در مشتری" />
            </motion.div>
            <motion.div 
              initial={{x:"60px",opacity:0}}
              animate={inView ? {x:"0px",opacity:1}:{}}
              transition={{delay : .8, duration : .8}}
              className="w-full sm:w-[45%] lg:w-[44%] flex justify-center"
            >
                <Image 
                    src="/img/phone.webp"
                    width={400}
                    height={400}
                    alt="mobile-support"
                    className="h-[500px] w-[300px] lg:h-[400px] p-2"
                />
            </motion.div>
        </motion.section>
    )
}

function Item({desc}){
    const [hover ,sethover] = useState(false);
    return(
        <div  
        onMouseLeave={()=>sethover(false) }
        onMouseEnter={()=>sethover(true)} 
        className="w-full lg:w-[47%] mb-8 flex h-[70px] items-center gap-6">
            <div className={`${hover ? 'border-sky-500 border-2' :"shadow-2xl"} transition duration-700  flex items-center justify-center w-[70px] h-[70px] rounded-full`}>
                <IoShieldCheckmarkOutline className="text-4xl " />
            </div>
            <div className="flex ">
                <p className="text-lg yekanbakhHeavy">{desc}</p>
            </div>
        </div>
    );
}