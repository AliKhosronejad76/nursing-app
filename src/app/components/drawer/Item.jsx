"use client";
import {useState} from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";



export default function Item({data}){
    const [open,setOpten] = useState(false);
    return(
        <li className="bg-white my-1 text-gray-700">
            {
                data.subMenu ? 
                <>
                    <button onClick={()=>setOpten(!open)} className="bg-white w-full h-16 flex items-center justify-between pr-4 outline-none">
                        <Link href="#" className="w-[85%] text-start h-full flex items-center">
                            {data.name}
                        </Link>
                        <div className="bg-gray-100 border-r border-gray-200 w-[20%] h-full flex items-center justify-center" >
                            <FaChevronDown 
                                className={`${open?"rotate-180":""} transition duration-700 `}
                            />
                        </div>
                    </button>
                    <ul className={`bg-white p-4 ${open?"max-h-max overflow-visible block":"max-h-[0px] overflow-hidden hidden "} transition-[max-height,overflow,display] [transition:max-height_700ms,overflow_600ms_display_700ms] `} >
                            {
                                data.subMenu.map((item,index)=>{return(
                                    <li key={index} className="h-[55px]">
                                        <Link href="#" >
                                            {item.name}
                                        </Link>
                                    </li>
                                )})
                            }
                    </ul>
                </>

                : 
                    <Link href="#" className=" w-full h-[70px] flex items-center justify-between pr-4">
                        {data.name}
                    </Link>
                
            }
           
          
       </li>
    );
}