"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ServicesTitle(){
    const [ ref ,  inView ] = useInView({triggerOnce:true});
    const [ ref2 , inView2 ] = useInView({triggerOnce:true});

    return(
        <motion.section 
         initial={{x:"-200px",opacity:0}}
         animate={inView ? {x:0,opacity:1} : {}}
         transition={{duration:1.5 , delay:0.7}}
         ref={ref} 
         className="bg-sky-500 pt-16 mb-12" 
         >
            <div className="text-white">
                <h6 className=" text-center pt-3 pb-5">
                درباره گروه های کاری و خدمات مرکز پرستاری در منزل ثمین بیشتر بدانید.
                </h6>
                <h1 className="yekanbakhFat text-center text-3xl py-4 mb-4">
                خدمات مراقبتی و پرستاری در منزل
                </h1>
            </div>

            <div className="w-[76%] sm:w-[94%] mx-auto flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-8">
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="1" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="2" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="3" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="4" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="5" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="6" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="7" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                <Item title="مراقبت و مانیتورینگ 24 ساعته" number="8" desc="بیمارانی که نیاز به سرویس 24 ساعته مانیتورینگ قلبی و تنفسی دارند توسط تیم پرستاری در منزل متخصص بخش های ویژه تحت مراقبت شبانه روزی در منزل و یا اتاق خصوصی بیمارستانها قرار می گیرند."/>
                
            </div>
            <motion.div  
            initial={{opacity:0 , y:"30px"}}
            animate={inView2 ? {opacity:1 , y:0 }:{}}
            transition={{duration:1.5 , delay:0.5}}
            ref={ref2}
            className="w-full flex justify-center items-center mt-9 pb-12">
                <Image 
                    src="/img/banner3.webp"
                    width={600}
                    height={600}
                    className="w-[770px]"
                    ref={ref2}
                    alt="hero"
            
                />
            </motion.div>
        </motion.section>
    );
}

function Item({title,desc,number}){
    return(
        <div className="w-full sm:w-[47%] text-white flex  mb-20">
            <div className="flex items-start text-7xl">
                {number}
            </div>
            <div className="flex flex-col gap-3 mr-4 ">
                <h1 className="text-2xl mb-3 yekanbakhBold">{title}</h1>
                <p className="text-md leading-9">{desc}</p>
            </div>
        </div>
    )
}