import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";


export default function Footer(){
    return(
        <footer className="text-sm  bg-[#e2e2e2] py-11 px-8 text-gray-800 ">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between lg:[&>div]:w-[30%]  sm:[&>div]:w-[49%] [&>div]:w-full">
                <div className="mb-5 lg:mb-0">
                    <h1 className="text-3xl lg:text-2xl yekanbakhFat text-gray-800">مرکز برستاری در منزل ثمین</h1>
                    <p className="mt-6 p-2">
                     آدرس: خيابان شریعتی، پایین تر از ظفر، کوچه دفتری شرقی، شماره 3، واحد 6
                    </p>
                </div>

                <div className=" flex flex-col items-start  mb-6">
                    <h1 className="text-3xl lg:text-2xl yekanbakhFat text-gray-800">دسترسی سریع</h1>
                    <ul className="mt-6">
                        <Item title="تجهیزات بزشکی"/>
                        <Item title="خدمات"/>
                        <Item title="فروشگاه"/>
                        <Item title="تماس با ما"/>
                    </ul>
                
                </div>

                <div>
                    <h1 className="text-3xl lg:text-2xl yekanbakhFat text-gray-800 mb-3">شبکه های اجتماعی</h1>
                    <div className="px-4 mt-6 flex flex-wrap ">
                        <Box bgColor={"#3b5998"} icon={<FaFacebook/>}/>
                        <Box bgColor={"#1da1f2"} icon={<FaTwitter/>}/>
                        <Box bgColor={"#cd201f"} icon={<FaYoutube/>}/>
                        <Box bgColor={"#bd081c"} icon={<FaPinterest/>}/>
                        <Box bgColor={"#fa3e8c"} icon={<FaInstagram/>}/>
                        <Box bgColor={"#0077b5"} icon={<FaLinkedin/>}/>
                        <Box bgColor={"#35465c"} icon={<RiWhatsappFill/>}/>
                        <Box bgColor={"#2ca5e0"} icon={<FaTelegram/>}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
function Item({title}){
    return(
        <li className="w-max flex gap-2 items-center my-1 py-2 hover:translate-x-[-3px] transition duration-500">
          <FaChevronRight />
          <Link href="#">{title}</Link>  
        </li>
    );

}

function Box({bgColor,icon}){
    return(
        <div 
            style={{
            background:bgColor,
            
            }}
            className="w-[20%] mb-5 mx-1 p-4 rounded-xl text-white flex items-center justify-center text-3xl shadow-[0px_0px_5px_5px_rgba(0,0,0,0.2)] transition duration-700 hover:translate-y-[-3px]"
        >
            <Link href={"#"}>
                {icon}
            </Link>
        </div>
    );
}