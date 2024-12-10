"use client";
import {useState} from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";



export default function Item({data}){
    const [open,setOpten] = useState(false);
    return(
        <li className=" my-1 text-gray-700">
            {
                data.subMenu ? 
                <>
                    <button onClick={()=>setOpten(!open)} className=" w-full h-[70px] flex items-center justify-between pr-4">
                        <Link href="#" className="w-[85%] text-start h-full flex items-center">
                            {data.name}
                        </Link>
                        <div className="bg-gray-100 border-r border-gray-200 w-[15%] h-full flex items-center justify-center" >
                            <FaChevronDown 
                                className={`${open?"rotate-180":""} transition duration-700 `}
                            />
                        </div>
                    </button>
                    <ul className={`p-4 ${open?"max-h-max overflow-visible block":"max-h-[0px] overflow-hidden hidden "} transition-[max-height,overflow,display] [transition:max-height_700ms,overflow_600ms_display_700ms] `} >
                            {
                                data.subMenu.map((item,index)=>{return(
                                    <li className="h-[55px]">
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