"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


export default function OurTeam(){

    const [ref1 , inView1] = useInView();
    const [ref2 , inView2] = useInView();
    const [ref3 , inView3] = useInView();
    const [ref4 , inView4] = useInView();


    return(
        <section cclassName="px-4 my-11">
            <div ref={ref1} className="flex flex-col sm:flex-row sm:flex-wrap  justify-between">
                <motion.div 
                initial={{x:"190px",opacity:0}}
                animate={inView1 ? {x:0,opacity:1} : {}}
                transition={{duration:0.6 , delay:0.4}}
                className="w-full sm:w-[49%] lg:w-[25%] ">
                    <Image
                        src="/img/doc-5.webp"
                        width={200}
                        height={200}
                        className="w-full"

                    />

                </motion.div>
                <motion.div 
                  initial={{y:"190px",opacity:0}}
                  animate={inView1 ? {y:0,opacity:1} : {}}
                  transition={{duration:0.6 , delay:0.7}}
                 className="w-full sm:w-[49%] lg:w-[50%] p-3">
                    <Image
                        src="/img/doc-6.webp"
                        width={400}
                        height={200}
                        className="w-full"
                    />

                </motion.div>
                <motion.div 
                 initial={{x:"-190px",opacity:0}}
                 animate={inView1 ? {x:0,opacity:1} : {}}
                 transition={{duration:0.6 , delay:0.4}}
                className="w-full sm:w-full lg:w-[25%]">
                    <Image
                        src="/img/doc-7.webp"
                        width={200}
                        height={200}
                        className="w-full"
                    />

                </motion.div>
            </div>


            <motion.div 
             ref={ref2}
             initial={{x:'-300px',}}
             animate={inView2?{x:0}:{}}
             transition={{duration:"0.5",delay:'0.5'}}
             className="w-full  pt-20 flex flex-wrap justify-between gap-3 my-7">
                <div className="w-[48%] lg:w-[23%]">
                    <Image 
                        src="/img/doc-1.webp"
                        width={300}
                        height={300}
                        className="w-full"

                    />
                </div>
                <div className="w-[48%] lg:w-[23%]">
                    <Image 
                        src="/img/doc-3.webp"
                        width={300}
                        height={300}
                        className="w-full"

                    />
                </div>
                <div className="w-[48%] lg:w-[23%]">
                    <Image 
                        src="/img/doc4.webp"
                        width={300}
                        height={300}
                        className="w-full"

                    />
                </div>
                <div className="w-[48%] lg:w-[23%]">
                    <Image 
                        src="/img/doc-2.webp"
                        width={300}
                        height={300}
                        className="w-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}