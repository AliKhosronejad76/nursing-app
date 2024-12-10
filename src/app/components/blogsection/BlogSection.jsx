"use client";
import { motion } from "framer-motion";
import Title from "../title/Title";
import Image from "next/image";
import { useInView } from "react-intersection-observer";


export default function BlogSection(){
    const [ref1, inView1] = useInView({triggerOnce:true});
    const [ref2, inView2] = useInView({triggerOnce:true});
    const [ref3, inView3] = useInView({triggerOnce:true});

    
    return(
        <section className="mt-9 pb-20" >
            <div ref={ref1}>
                <motion.h1 
                  initial={{y:"20px" , opacity:0}}
                  animate={inView1 ? {y:"0px",opacity:1}: {}}
                  transition={{duration:0.4,delay:0.4}}
                  className="text-4xl text-center pb-11"
                 >
                    با ما
                    <span className="text-sky-700">
                        همراه باشید
                    </span>
                </motion.h1>
            
            <motion.div
                 ref={ref2}
                 initial={{y:"20px" , opacity:0}}
                 animate={inView2 ? {y:"0px",opacity:1}: {}}
                 transition={{duration:0.4,delay:0.4}}
            >
                <Title title={"وبلاگ ثمین​"}/>
            </motion.div>
            </div>
            <motion.div 
              ref={ref3}
              initial={{x:"-200px",opacity:0}}
              animate={inView3 ?{x:"0px",opacity:1}:{}}
              transition={{duration:0.4,delay:0.4}}
              className=" w-full my-8 px-5 flex  flex-col sm:flex-row sm:flex-wrap justify-between"
            >
                <BlogItem img="/img/post-1.jpg" />
                <BlogItem img="/img/post-2.jpg" />
                <BlogItem img="/img/post-3.webp" />

            </motion.div>
        </section>
    );
}

function BlogItem({img}){
    return(
        <div className="w-full sm:w-[48%] lg:w-[31%] h-[350px] rounded-xl relative mb-8 lg:mb-0">
            <div className="w-[65px] h-[65px] shadow-sm absolute top-[10px] right-[10px]  items-center  z-30 flex flex-col justify-center  bg-white rounded-xl shadow-sm text-lg">
                <p>19</p>
                <p>شهریور</p>
            </div>
            <Image 
                src={img}
                width={400}
                height={400}
                alt="alt"
                className="rounded-2xl w-full h-full absolute object-cover z-20 top-0 right-0 left-0 bottom-0"
            />

            <div className="absolute bottom-[10px] w-full z-40 flex flex-col items-center ">
                <span className="bg-sky-800 text-white py-1 px-3 rounded-lg">
                    دسته بندی نشده
                </span>
                <h6 className="text-white text-lg my-4">عنوان مقاله</h6>
            
                <div className="my-3 flex items-center gap-4">

                </div>
            
            </div>
            <div className="rounded-xl absolute top-0 bottom-0 right-0 left-0 w-full h-full z-20 bg-black opacity-30"></div>
        </div>
    );
}