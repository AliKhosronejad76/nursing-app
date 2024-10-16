"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";


export default function ServicesOptions(){
    return(
        <div className="flex items-center gap-4 px-2 my-7">
            <SmallItem 
                href="#"  
                img="/img/Nurse_result.webp" 
                title={"اعزام برستار در محل"}
            />
            <SmallItem 
                 href="#"  
                 img="/img/Ambulance_result.webp"
                 title="اعزام آمبولانس در محل"
             />
            <BigItem 
                img="/img/Doctor_result.webp"
                 href="#" 
                 title={"اعزام بزشک به محل"}
             />
        </div>
    );
}

function BigItem({img,href,title}){
    const [hover,setHover] = useState(false);

    return(
        <div 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className={`rounded-xl h-full w-[50%] rounded-md  ${hover ?'bg-sky-600 transition duration-700':'bg-white transition duration-700'} `}>
            <Link href={href}>
                <Image 
                    src={img}
                    width={500}
                    height={500}
                    className="w-full p-4"
                /> 
                <h2 className={`pb-3 text-xl text-center  ${hover ?'text-white transition duration-700':'text-gray-800 transition duration-700'} `}>{title}</h2>
            </Link>
        </div>
    )
}

function SmallItem({img,href,title}){
    const [hover,setHover] = useState(false);

    return(
        <div
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)} 
        className={`rounded-xl ${hover ?'bg-sky-600 transition duration-700':'bg-white transition duration-700'} h-[50%] w-[25%]`}>
             <Link href={href}>
                <Image 
                    src={img}
                    width={500}
                    height={500}
                    className="w-full"
                /> 
                <h2 className={`pb-3 text-xl text-center  ${hover ?'text-white':'text-gray-700'}`}>{title}</h2>

            </Link>
        </div>
    );
}