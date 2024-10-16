import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" >
            <Image 
                width={300}
                height={300}
                src="/img/logo.webp"
                className="w-[80px] "
            />
        </Link>
    )

}