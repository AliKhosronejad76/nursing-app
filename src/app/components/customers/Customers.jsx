"use client";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Title from "../title/Title";
import MultipleSlider from "../module/MultipleSlider";




const data = [
    {img:"/img/customers/1.jpg"},
    {img:"/img/customers/2.jpg"},
    {img:"/img/customers/3.jpg"},
    {img:"/img/customers/4.jpg"},
    {img:"/img/customers/5.jpg"},
    {img:"/img/customers/6.jpg"},
    {img:"/img/customers/7.jpg"},
    {img:"/img/customers/8.jpg"},
];

export default function Customers(){
    const {ref , inView} = useInView();
    return(
        <motion.section 
            ref={ref}
            initial={{x:"-400px" , opacity:0}}
            animate={ inView ? {x:0, opacity:1} : {}}
            transition={{duration:.8 ,delay:.8}}
            className="px-4 my-20"
        >
            <MultipleSlider data={data}/>
        </motion.section>
    );
}



<Title title="رخی از مشتریان سازمانی"/>