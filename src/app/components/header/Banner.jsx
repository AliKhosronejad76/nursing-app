"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


export default function Banner(){
    
    return(
        <div className="bg-sky-400 h-[65vh] relative flex flex-col lg:flex-row lg:justify-center">
           <BannerContent/>
           <BannerImage/>  
        </div>
    );
}
function BannerContent(){
   
   const [ref2 , inView2] = useInView({triggerOnce:true});
   const [ref3 , inView3] = useInView({triggerOnce:true});


    return(
        <div className="relative  lg:w-[50%] left-[0px] top-[80px] lg:top-[150px] lg:absolute mb-12 lg:mb-0 px-5 lg:px-0 z-20 flex flex-col text-white">
            <motion.h1 
             ref={ref2}
             initial={{x:"-200px" , opacity:0}}
             animate={inView2 ? {x:0 , opacity:1 }:{}}
             transition={{duration:1.5 , delay:0.8}}
             className="leading-relaxed flex flex-col yekanbakhFat">
                <span className="text-5xl lg:text-7xl mb-7">ثمین</span>
                <span className="mr-7 text-3xl lg:text-5xl leading-normal">مرکز خدمات برستاری در منزل</span>

            </motion.h1>

            <motion.p
            ref={ref3} 
             initial={{opacity:0 , y:"30px"}}
             animate={inView3 ? {opacity:1,y:0} : {}}
             transition={{duration:1.5 , delay:1}}
            className="mt-8 mr-4 leading-9 text-md yekanbakhMed">
            کلیه خدمات مرکز برستاری در منزل ثمین  در تمامی مناطق شرق تهران(شمال و جنوب شرق و غری)
            با قیمت مناسب با برستاران مجرب به صورت شبانه روزی ارایه می گردد
            </motion.p>
        </div>
    )
}
function BannerImage(){
   const {ref , inView} = useInView({triggerOnce:true});

    return(
        <motion.div 
            ref={ref}
            initial={{opacity:0 , x:"300px"}}
            animate={inView ?{opacity:1 , x:'0px'} : {}}
            transition={{duration:1.5, delay:.8}}
            className="relative z-10 lg:absolute lg:left-[430px] top-[60px]">
            <Image 
                src="/img/banner.webp"
                width={500}
                height={500}
                className="w-[550px] "
                alt="hero"
            />
            <Image 
                src="/img/banner-cover.webp"
                width={500}
                height={500}
                className="w-[550px] absolute right-[-35px] top-[30px]"
                alt="hero"
            />
        </motion.div>
    );
}