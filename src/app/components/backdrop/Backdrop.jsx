"use client";
import { useDrawer } from "@/context/DrawerContextProvider";

export default function Backdop(){
    const { drawer , setDrawer} = useDrawer();
    return(
        <div onClick={()=>setDrawer(false)}  className={`${drawer ? "visible block opacity-90" : "opacity-0 invisible hidden"} lg:hidden  w-screen h-screeen fixed top-0 left-0 bottom-0 right-0 bg-black  z-30 transition duration-700`}>
        
        </div>
    );
}