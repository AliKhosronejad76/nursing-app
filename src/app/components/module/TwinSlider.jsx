'use client'

import Image from 'next/image';
import { useState , useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function TwinSlider({data}){
   
        const [screen  , setScreen] = useState(window.screen.width);
        
 

    console.log(`!screen ==== ${screen}`)
    useEffect(()=>{
        function updateScreen(){
            setScreen(window.screen.width);    
        }

        window.addEventListener('resize',updateScreen)
        
    },[])
    
    return(
    <Swiper
      className="[&>.swiper-button-next]:hidden [&>.swiper-button-prev]:hidden [&>.swiper-scrollbar]:hidden"
      modules={[Navigation,]}
      spaceBetween={50}
      slidesPerView={screen <= 580 ? 1 : 2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data.map((item,index)=>(
            <SwiperSlide key={index} className="cursor-grabbing">
                <div className="flex flex-col items-start gap-6">
                    <p className="leading-8 text-justify p-1">
                        {item.desc}
                    </p>

                    <div className="flex gap-4 items-center">
                        <div className="w-[70px] h-[70px] rounded-full ">
                            <Image
                                src="/img/doc-1.webp"
                                width={100}
                                height={100}
                                alt="alt"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>محمد صدیقی</h4>
                            <span className="text-sm text-sky-700">درخواست اعزام برستار</span>
                        </div>
                    </div>
                </div>
        
            </SwiperSlide>
        ))
      }
    </Swiper>
    );
}