"use client";
import { useState } from "react";
import Image from "next/image";
import { IoShieldCheckmarkOutline } from "react-icons/io5";




export default function Support(){

    return(
        <section className="flex px-4 py-4  items-center ">
            <div className="w-[56%] flex flex-wrap justify-between gap-6">
                <Item desc="بشتیبانی حرفه ای در کم ترین زمان" />
                <Item desc="یک تماس در رفع مشکل" />
                <Item desc="ارایه بهترین خدمات با کادر مجرب" />
                <Item desc="ایجاد حس خوب در مشتری" />
            </div>
            <div className="w-[44%] flex justify-center">
                <Image 
                    src="/img/phone.webp"
                    width={400}
                    height={400}
                    className="w-[300px] h-[300pz] p-2"
                />
            </div>
        </section>
    )
}

function Item({desc}){
    const [hover ,sethover] = useState(false);
    return(
        <div  
        onMouseLeave={()=>sethover(false) }
        onMouseEnter={()=>sethover(true)} 
        className="w-[47%] mb-8 flex h-[70px] items-center gap-6">
            <div className={`${hover ? 'border-sky-500 border-2' :"shadow-2xl"} transition duration-700  flex items-center justify-center w-[70px] h-[70px] rounded-full`}>
                <IoShieldCheckmarkOutline className="text-4xl " />
            </div>
            <div className="flex ">
                <p className="text-lg">{desc}</p>
            </div>
        </div>
    );
}