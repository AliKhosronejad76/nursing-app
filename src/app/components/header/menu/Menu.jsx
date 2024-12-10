'use client';
import { useState } from "react";
import { menuitems } from "@/menudata";
import ListItem from "./ListItem";


export default function Menu(){
    return(
        <ul className="hidden lg:flex gap-8 text-sm ">
            {
                menuitems.map((item,index)=>{
                    return(
                        <ListItem data={item} key={index} />
                    );
                })
            }
        </ul>
    );
}