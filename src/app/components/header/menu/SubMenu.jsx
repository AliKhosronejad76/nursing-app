import Link from "next/link";



export default function SubMenu({data,display,setDisplay}){
    return(
        <ul onMouseEnter={()=>setDisplay(true)} className={`  ${display ?"visible translate-y-[-3px]":" invisible translate-y-[3px]"} top-[46px] py-3 absolute bg-white w-max rounded-xl transition duration-400`}>
            {data.map((item,index)=>{
                return(
                    <li className="px-3 py-2.5 ">
                        <Link href={"#"}>
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
}