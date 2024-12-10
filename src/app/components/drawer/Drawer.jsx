"use client";

import Image from "next/image";
import { menuitems } from "@/menudata";
import Item from "./Item";
import { useDrawer } from "@/context/DrawerContextProvider";

export default function Drawer(){
    const { drawer , setDrawer } = useDrawer(); 
    console.log(drawer);
    return(
        <div className={`transition duration-600 ease-out ${drawer ?"translate-x-[0px]":"translate-x-[900px]"} lg:hidden  shadow-3xl bg-white h-screen w-[72%] fixed z-40 bottom-0 right-0 top-0 px-4 py-6 overflow-scroll`}>
            <ul className="yekanbakhReg text-sm">
                {
                    menuitems.map((item,index)=><Item data={item} key={index}/>)
                }
            </ul>
        </div>
    )
}