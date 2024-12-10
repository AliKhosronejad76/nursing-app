"use client";
import { useDrawer } from "@/context/DrawerContextProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Banner from "./Banner";
import Menu from "./menu/Menu";


export default function Header(){
    return(
        <header className="relative ">
            <nav className="mx-auto z-30 fixed top-[-10px] right-0 left-0   text-gray-700 mt-3 bg-white flex items-center rounded-full px-3 py-1 justify-between shadow-[0px_0px_7px_7px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-4">
                   <DrawerButton/>
                   <Logo />
                   <div className="mr-2">
                      <Menu/>
                   </div>

                </div>
                <div className="h-full flex items-center bg-white">
                    <button>
                     <IoIosSearch className="text-3xl" />
                    </button>
                </div>

                <CardButton />
            </nav>
          
        </header>
    );
}

function DrawerButton(){
    const  { drawer , setDrawer } = useDrawer(); 
    return(
        <button onClick={()=>setDrawer(true)} className="lg:hidden flex text-xl p-2 items-center justify-center rounded-full bg-white border border-gray-300">
            <GiHamburgerMenu />
        </button>
    );
} 

function CardButton(){
    return(
        <button className="relative w-max gap-2 px-2 py-1.5  flex justify-center items-center  rounded-full bg-[rgb(32,137,200)]">
            <div className="bg-white rounded-full p-1">
                <FiShoppingCart className="text-xl" /> 
            </div>
            <span className="text-white mx-1 text-sm">0تومان</span>
            <div className="w-[20px] h-[20px] text-sm shadow-xl bg-white flex items-ceneter justify-center rounded-full absolute top-[-4px] left-[-1px] text-sky-800">0</div>
        </button>
    );
}