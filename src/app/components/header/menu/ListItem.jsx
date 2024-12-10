import Link from "next/link";
import SubMenu from "./SubMenu";
import { useState } from "react";


export default function ListItem({data}){
    const [display,setDisplay] = useState(false);

    return(
        <li 
            onMouseEnter={()=>setDisplay(true)}
            onMouseLeave={()=>setDisplay(false)}
            className="relative" 
        >
           <Link href={"#"}>
            {data.name}
           </Link> 
           {
            data.subMenu && 
            <SubMenu 
                display={display} 
                setDisplay={setDisplay}
                data={data.subMenu}

            />
           }
        </li>
    );
}