import Image from "next/image";
import Title from "../title/Title";
export default function ServicesCategory(){
    return(
        <section>
            <h1 className="text-3xl text-center" >
                بیماران نیازمند
                <span className="text-sky-700">  مراقبت های ویژه </span>
                برستاری در منزل
            </h1>
                <Title title={"خدمات مرکز پرستاری در منزل ثمین​"} />

            <div className="flex flex-wrap gap-10 justify-between px- pb-9">
                <Item img="/img/heart-icon.webp"  desc="پرستاری در منزل و مانیتورینگ 24 ساعته از بیماران سکته قلبی، نارسایی قلب و عروق، آریتمی ها، مشکلات دریچه های قلب و همچنین بیمارانی که تحت عمل جراحی قلب باز قرار گرفته اند پس از ترخیص از بخش های سی سی یو و آی سی یو قلب باز." title="قلب و عروق" />
                <Item img="/img/brain-icon.webp"  desc="مراقبت در منزل و مانیتورینگ 24 ساعته از بیماران سکته مغزی، ضربه مغزی، جراحی مغز و ستون فقرات پس از ترخیص از بخش آی سی یو. این بیماران نیاز زیادی به پرستار در منزل و توجه ویژه دارند." title="مغز و اعصاب"/>
                <Item img="/img/lungs_icon.webp"  desc="پرستاری در منزل، مراقبت و مانیتورینگ 24 ساعته از بیماران نارسایی حاد و مزمن تنفسی که به هر دلیل اینتوبه یا تراکئوستومی شده اند و زیر دستگاه ونتیلاتور قرار دارند." title="تنفسی" />
                <Item img="/img/joint-pain-icon.webp" desc="مراقبت در منزل و مانیتورینگ 24 ساعته از بیماران دچار شکستگی در نواحی مختلف بدن که تحت عمل جراحی ارتوپدی قرار گرفته اند پس از ترخیص بیمارستان" title="ارتوپدی​" />
                <Item img="/img/heart-icon.webp"  desc="پرستاری در منزل، مراقبت و ویزیت توسط کارشناس مجرب مامایی از خانم هایی که بارداری پر خطر دارند" title="زنان و زایمان" img="/img/"/>
                <Item img="/img/lungs_icon.webp" desc="مراقبت و مانیتورینگ 24 ساعته در منزل از بیماران سرطانی که شیمی درمانی یا رادیوتراپی می شوند یا دوران نقاهت بیماری خود را سپری می کنند." title="سرطان" />

            </div>
        </section>
    )
}

function Item({ img , title , desc }){
    return(
        <div className="border flex flex-col items-center w-[26%] bg-white rounded-xl shadow-[0px_-8px_0px_0px_rgba(8,120,240,1)]">
            <div className="border-sky-600 rounded-full w-[66px] h-[66px] flex items-center justify-center p-1 border border-sky-500 my-5">
                <Image 
                    src={img}
                    width={200}
                    height={200}
                    className="rounded-full w-full"
                />
            </div>
            <h1 className="text-xl border-b border-gray-800 py-3 text-center">
                {title}
            </h1>
            <div>
                <p className="px-5 mt-4 text-sm leading-9 text-center">
                    {desc}
                </p>
            </div>
        </div>
    );
}