import Image from "next/image";
export default function Banner(){
    return(
        <div className="bg-sky-400 h-[96vh] relative flex justify-center">
           <BannerContent/>
            <BannerImage/>
           
        </div>
    );
}
function BannerContent(){
    return(
        <div className="w-[50%] left-[0px] top-[150px] absolute z-20 flex flex-col text-white">
            <h1 className="text-4xl flex flex-col">
                <span className="mb-4">ثمین</span>
                <span className="mr-8">مرکز خدمات برستاری در منزل</span>

            </h1>

            <p className="mt-8 mr-4 leading-9 text-sm">
            کلیه خدمات مرکز برستاری در منزل ثمین  در تمامی مناطق شرق تهران(شمال و جنوب شرق و غری)
            با قیمت مناسب با برستاران مجرب به صورت شبانه روزی ارایه می گردد
            </p>
        </div>
    )
}
function BannerImage(){
    return(
        <div className="z-10 absolute left-[430px] top-[60px]">
            <Image 
                src="/img/banner.webp"
                width={500}
                height={500}
                className="w-[550px] a"
            />
            <Image 
                src="/img/banner-cover.webp"
                width={500}
                height={500}
                className="w-[550px] absolute right-[-35px] top-[30px]"

            />
        </div>
    );
}