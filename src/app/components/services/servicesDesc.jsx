"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function ServicesDesc(){
    const {ref , inView} = useInView({triggerOnce:true});
   
    return(
        <div ref={ref} className="pb-40">
            <div className="h-max lg:mb-20 py-5  mt-12  flex flex-col  justify-start ">
                <motion.h1
                   initial={{y:"20px",opacity:0}}
                   animate={inView ? {y:0,opacity:1}: {} }
                   transition={{duration:1.5,delay:0.8}} 
                   className="yekanbakhFat  leading-relaxed text-4xl text-center text-gray-700">کامل ترین <span className="text-sky-700"> خدمات برستاری </span>در منزل</motion.h1>
            </div>
            <div className="w-full px-7 text-justify lg:w-[70%]  mx-auto">
                <motion.p
                  initial={{y:"80px",opacity:0}}
                  animate={inView ? {y:0,opacity:1}: {} }
                  transition={{duration:1.5,delay:.9}}   
                  className="leading-9 text-md text-gray-700"
                 >
                گستره خدمات مراقبت های بهداشتی خانگی که یک بیمار می‌تواند در خانه دریافت کند نامحدود است. بسته به وضعیت هر بیمار، مراقبت‌ها می‌تواند از مراقبت‌های پرستاری تا خدمات پزشکی تخصصی، مانند کارهای آزمایشگاهی، متغیر باشد. شما و پزشکتان برنامه مراقبتی و خدماتی را که ممکن است در خانه به آن نیاز داشته باشید تعیین خواهید کرد. خدمات مراقبت در منزل ممکن است شامل موارد زیر باشد:
                </motion.p>
                <motion.p 
                 initial={{y:"20px",opacity:0}}
                 animate={inView ? {y:0,opacity:1}: {} }
                 transition={{duration:1.5,delay:0.9}}  
                 className="leading-9 text-md text-gray-700">
                ویزیت پزشک در منزل ، مراقبت های پرستاری در منزل، فیزیوتراپی یا گفتار درمانی، مشاوره روانشاسی، نمونه گیری آزمایشات، رادیوگرافی در منزل، شنوای و بینایی سنجی، تصویر برداری، جابجایی و همراهی بیمار یا سالمند و …
                </motion.p>
            </div>
        </div>
    )
}