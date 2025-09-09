import { FeaturesData } from "@/data/FeaturesData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";




export default function Features() {
    return (
        <section className=" w-full py-20 md:py-40 px-[6%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-space-grotesk " >




            {FeaturesData.map((data, index) => (
                <Link key={index} href={data.url} target="_blank" >
                    <div  className="w-full flex items-start flex-col h-[300px] bg-black/90 hover:bg-white rounded-xl px-4 py-6 text-white hover:text-black gap-3 transition-all duration-200 ease-in-out cursor-pointer gradient-border relative group " >
                        <h4 className=" font-bold text-xl md:text-2xl flex items-center gap-2 " >
                            {data.title}
                            <span className=" transform rotate-[-55deg] group-hover:rotate-0 transition-all duration-200 ease-in-out  " ><ArrowRight /></span>
                        </h4>
                        <p className=" font-bold text-base md:text-lg ">{data.description} </p>
                    </div>
                </Link>
            ))}



        </section>
    )
}