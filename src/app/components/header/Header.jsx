import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Banner from "./Banner";



export default function Header(){
    return(
        <header className="relative ">
            <nav className="mx-auto z-30 fixed top-[-10px] right-0 left-0 z-10  text-gray-700 mt-3 bg-white flex items-center rounded-full px-3 py-1 justify-between">
                <div className="flex items-center gap-4">
                   <DrawerButton/>
                   <Logo />
                </div>

                <div>
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
    return(
        <button className="flex text-2xl p-2.5 items-center justify-center rounded-full border border-gray-300">
            <GiHamburgerMenu />
        </button>
    );
} 

function CardButton(){
    return(
        <button className="relative w-max gap-2 px-2 py-2 flex justify-center items-center  rounded-full bg-[rgb(32,137,200)]">
            <div className="bg-white rounded-full p-2">
                <FiShoppingCart className="text-2xl" /> 
            </div>
            <span className="text-white mx-1">0تومان</span>
            <span className="w-[20px] h-[20px] shadow-xl bg-white flex items-ceneter justify-center rounded-full absolute top-[4px] left-[-1px] text-sky-800">0</span>
        </button>
    );
}