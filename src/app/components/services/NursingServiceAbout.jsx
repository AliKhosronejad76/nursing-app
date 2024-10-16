import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function NursingServiceAbout(){
    return(
        <section className="px-2 flex flex-col gap-7 pb-6">
            <Image 
                src="/img/nursing-banner.webp"
                width={600}
                height={600}
            />
            <h1 className="text-4xl w-[50%] text-wrap leading-loose px-2 mb-8">
            درباره مرکز خدمات پرستاری در منزل ثمین | ™Saminplus
            </h1>

            <div className="text-gray-700 w-[50%] text-md my-7">
                <p className="leading-9 mb-2" >
                سلام، به مرکز مشاوره و ارائه خدمات پرستاری در منزل ثمین خوش آمدید.
                مرکز خدمات پرستاری در منزل ثمین در راستای ارائه بهترین خدمات پرستاری، درمانی و مراقبتی از بیماران عزیز در بیمارستانها و منازل ایشان و همراهی و همدلی صمیمانه با بستگان بیماران تاسیس گردیده است. هدف کادر مجرب و با سابقه درخشان این مرکز جلب رضایت هموطنان نیازمند به خدمات بالینی است تا بیماران و سالمندان در کوتاه ترین زمان با حال عمومی خوب به جمع خانواده بازگردند
                </p>
                <p className="leading-9 " >
                لیه خدمات مرکز پرستاری در منزل ثمین در تمامی مناطق شهر تهران (شرق، غرب، جنوب، مرکز و شمال) با قیمت مناسب و با پرستاران مجرب بصورت شبانه روزی ارائه می‌گردد.
                </p>
            </div>
            <div className="w-[50%] flex justify-center mb-6 ">
                <button className="py-3.5 px-5 rounded-3xl w-[50%] bg-sky-700 text-xl flex justify-between items-center text-white ">
                    <span>
                    تماس با مشاوران ثمین
                    </span>
                    <FaPhoneAlt />
                </button>
            </div>
            
        </section>
    );
}