"use client";
import { useDrawer } from "@/context/DrawerContentProvider";

export default function Backdop(){
    const {drawer} = useDrawer();
    return(
        <div className={`${drawer ? "visible block opacity-90" : "opacity-0 invisible hidden"}  w-screen h-screeen fixed top-0 left-0 bottom-0 right-0 bg-black  z-30 transition duration-700`}>
        
        </div>
    );
}