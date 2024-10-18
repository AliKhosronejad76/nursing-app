"use client";

import { useDrawer } from "@/context/DrawerContentProvider";
import { menuitems } from "@/menudata";
import Link from "next/link";

export default function Drawer(){
    const {drawer,setDrawer} = useDrawer();
    return(
        <div className={`lg:hidden lg:invisible bg-white shadow-xl h-screen fixed top-0 bottom-0 right-0 z-40 w-[50%] transition duration-500 ease-in-out ${drawer ? "translate-x-[0]":"translate-x-[900px]"} `}>
            <ul>
                {
                    menuitems.map((item,index)=><ListItemOne key={index} data={item}/>)
                }
            </ul>
        </div>
    );
}

function ListItemOne({data}){
    return(
        <li className="text-black py-5 px-4   ">
            <Link href="#">
                {data.name}
            </Link>
            
        </li>
    );
}