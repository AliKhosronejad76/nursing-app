"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";


export default function NursingServiceAbout(){
    const [ref1 , inView1] = useInView({triggerOnce:true});
    const [ref2 , inView2] = useInView({triggerOnce:true});
    const [refImage , inViewImage] = useInView({triggerOnce:true});
    const [titleRef , inViewTitle] = useInView({triggerOnce:true});
    const [txtRef , inViewTxt] = useInView({triggerOnce:true});

    return(
        <section className="px-2 flex flex-col gap-7 pb-6">
            <motion.div
                ref={refImage}
                initial={{x:'300px' , opacity:0}}
                animate={inViewImage ? {x:0 , opacity:1} : { }}
                transition={{duration:1.5 , delay:0.9}}
            >
                <Image 
                    src="/img/nursing-banner.webp"
                    width={600}
                    height={600}
                    alt="about"
                />
            </motion.div>

            <motion.h1 
             ref={titleRef}
             initial={{x:'300px' , opacity:0}}
             animate={inViewTitle ? {x:0 , opacity:1} : { }}
             transition={{duration:1.5 , delay:0.4}}
             className="yekanbakhFat text-gray-800 text-4xl w-full lg:w-[50%] text-wrap leading-loose px-2 mb-8">
            درباره مرکز خدمات پرستاری در منزل ثمین | ™Saminplus
            </motion.h1>

            <motion.div 
             ref={txtRef}
             initial={{y:"40px" , opacity:0}}
             animate={inViewTxt?{y:0 , opacity:1}:{}}
             transition={{duration:1.5 , delay:0.4}}
             className="text-gray-700 w-full lg:w-[50%] text-base my-7 px-3"
            >
                <p className="leading-9 mb-2" >
                سلام، به مرکز مشاوره و ارائه خدمات پرستاری در منزل ثمین خوش آمدید.
                مرکز خدمات پرستاری در منزل ثمین در راستای ارائه بهترین خدمات پرستاری، درمانی و مراقبتی از بیماران عزیز در بیمارستانها و منازل ایشان و همراهی و همدلی صمیمانه با بستگان بیماران تاسیس گردیده است. هدف کادر مجرب و با سابقه درخشان این مرکز جلب رضایت هموطنان نیازمند به خدمات بالینی است تا بیماران و سالمندان در کوتاه ترین زمان با حال عمومی خوب به جمع خانواده بازگردند
                </p>
                <p className="leading-9 " >
                لیه خدمات مرکز پرستاری در منزل ثمین در تمامی مناطق شهر تهران (شرق، غرب، جنوب، مرکز و شمال) با قیمت مناسب و با پرستاران مجرب بصورت شبانه روزی ارائه می‌گردد.
                </p>
            </motion.div>
            <div ref={ref1} className="w-full lg:w-[50%] flex justify-center mb-6 ">
                <motion.button   
                  className="yekanbakhLight py-3.5 px-5 rounded-3xl w-[50%] sm:w-[40%] lg:w-[50%] bg-sky-500 text-lg flex justify-between items-center text-white "
                  initial={{y:"30px", opacity:0}}
                  animate={inView1  ? {y:0,opacity:1}: {} }
                  transition={{duration:1.5 , delay:0.8}}
                >
                    <span>
                    تماس با مشاوران ثمین
                    </span>
                    <FaPhoneAlt />
                </motion.button>
            </div>
            
        </section>
    );
}
