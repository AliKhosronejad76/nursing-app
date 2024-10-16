import Title from "../title/Title";
import Image from "next/image";


export default function BlogSection(){
    return(
        <section className="mt-9 pb-20" >
            <div>
                <h1 className="text-4xl text-center pb-11">
                    با ما
                    <span className="text-sky-700">
                        همراه باشید
                    </span>
                </h1>

            <Title title={"وبلاگ ثمین​"}/>
            </div>
            <div className="my-8 px-5 flex justify-between">
                <BlogItem img="/img/post-1.jpg" />
                <BlogItem img="/img/post-2.jpg" />
                <BlogItem img="/img/post-3.webp" />

            </div>
        </section>
    );
}

function BlogItem({img}){
    return(
        <div className="w-[31%] h-[350px] rounded-xl relative ">
            <div className="w-[65px] h-[65px] shadow-sm absolute top-[10px] right-[10px]  items-center  z-30 flex flex-col justify-center  bg-white rounded-xl shadow-sm text-lg">
                <p>19</p>
                <p>شهریور</p>
            </div>
            <Image 
                src={img}
                width={400}
                height={400}
                className="rounded-2xl w-full h-full absolute object-cover z-20 top-0 right-0 left-0 bottom-0"
            />

            <div className="absolute bottom-[10px] w-full z-40 flex flex-col items-center ">
                <span className="bg-sky-800 text-white py-1 px-3 rounded-lg">
                    دسته بندی نشده
                </span>
                <h6 className="text-white text-lg my-4">عنوان مقاله</h6>
            
                <div className="my-3 flex items-center gap-4">

                </div>
            
            </div>
            <div className="rounded-xl absolute top-0 bottom-0 right-0 left-0 w-full h-full z-20 bg-black opacity-30"></div>
        </div>
    );
}