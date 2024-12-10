"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GiDuration } from "react-icons/gi";
import { useInView } from "react-intersection-observer";


export default function ServicesOptions(){
    const {ref , inView} = useInView({triggerOnce:true});

    return(
        <div ref={ref} className="max-h-full  min-h-max flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap sm:items-center  lg:gap-4 px-7 lg:px-2 ">
            <SmallItem 
                href="#"  
                img="/img/Nurse_result.webp" 
                title={"اعزام برستار در محل"}
                delay={.7}
                inView={inView}
            />
            <SmallItem 
                 href="#"  
                 img="/img/Ambulance_result.webp"
                 title="اعزام آمبولانس در محل"
                 delay={.8}
                 inView={inView}
             />
            <BigItem 
                img="/img/Doctor_result.webp"
                 href="#" 
                 title={"اعزام بزشک به محل"}
                 delay={1}
                inView={inView}

             />
        </div>
    );
}

function BigItem({img,href,title,inView,delay}){
    const [hover,setHover] = useState(false);

    return(
        <motion.div 
        initial={{y:"30px",opacity:0}}
        animate={ inView ? {y:'0',opacity:1}:{}}
        transition={{duration:1.5,delay:delay}}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className={`rounded-xl h-full w-full sm:block lg:w-[50%] ${hover ?'bg-sky-600 transition duration-700':'bg-white transition duration-700'} mb-4`}>
            <Link href={href}>
                <Image 
                    src={img}
                    width={500}
                    height={500}
                    className="w-full p-4"
                /> 
                <h2 className={`pb-3 text-md text-center  ${hover ?'text-white transition duration-700':'text-gray-800 transition duration-700'} `}>{title}</h2>
            </Link>
        </motion.div>
    )
}

function SmallItem({img,href,title,delay,inView}){
    const [hover,setHover] = useState(false);

    return(
        <motion.div
        initial={{opacity:0, y:'30px'}}
        animate={inView ? {opacity:1, y:0}: {}}
        transition={{duration:1.5,delay:delay}}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)} 
        className={`rounded-xl ${hover ?'bg-sky-600 transition duration-700':'bg-white transition duration-700'} mb-4 h-[50%] w-full sm:w-[48%] lg:w-[25%]`}>
             <Link href={href}>
                <Image 
                    src={img}
                    width={500}
                    height={500}
                    className="w-full"
                /> 
                <h2 className={`pb-3 text-md text-center  ${hover ?'text-white':'text-gray-700'}`}>{title}</h2>

            </Link>
        </motion.div>
    );
}