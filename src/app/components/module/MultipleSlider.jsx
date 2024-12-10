"use client";

import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide ,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



export default function MultipleSlider({ data }){
    return(
        <Swiper
            className=" [&>.swiper-button-next]:hidden [&>.swiper-button-prev]:hidden [&>.swiper-scrollbar]:hidden"
            modules={[Navigation]}
            
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {

                   data.map((item,index)=>(
                    <SwiperSlide >
                        <div className="bg-red-200">
                            <Image 
                                src={item.img}
                                width={300}
                                height={300}
                                className="w-full h-full"
                            />
                        </div>
                   </SwiperSlide>
                   ))
            }
          
        </Swiper>
    );
}