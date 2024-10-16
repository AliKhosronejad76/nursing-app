import Image from "next/image";


export default function OurTeam(){
    return(
        <section cclassName="px-4 my-11">
            <div className="flex justify-between">
                <div className="w-[25%] ">
                    <Image
                        src="/img/doc-5.webp"
                        width={200}
                        height={200}
                        className="w-full"

                    />

                </div>
                <div className="w-[50%] p-3">
                    <Image
                        src="/img/doc-6.webp"
                        width={400}
                        height={200}
                        className="w-full"
                    />

                </div>
                <div className="w-[25%]">
                    <Image
                        src="/img/doc-7.webp"
                        width={200}
                        height={200}
                        className="w-full"
                    />

                </div>
            </div>


            <div className="w-full flex justify-between gap-3 my-7">
                <div cclassName="w-[23%]">
                    <Image 
                        src="/img/doc-1.webp"
                        width={300}
                        height={300}
                        className="w-full"

                    />
                </div>
                <div cclassName="w-[23%]">
                    <Image 
                        src="/img/doc-3.webp"
                        width={300}
                        height={300}
                        className="w-full"

                    />
                </div>
                <div cclassName="w-[23%]">
                    <Image 
                        src="/img/doc4.webp"
                        width={300}
                        height={300}
                        className="w-full"

                    />
                </div>
                <div cclassName="w-[23%]">
                    <Image 
                        src="/img/doc-2.webp"
                        width={300}
                        height={300}
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}