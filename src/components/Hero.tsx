"use client"

import { handleCopy } from "@/utils/copyText";
import { Copy } from "lucide-react";
import Image from "next/image";



export default function Hero() {

    const githubUrl = "https://github.com/chiscookeke11/Aptos-Scaffold.git"
    const npmCommand = "npm install nedu"



    return (
        <section className="w-full h-[88vh] bg-[var(--background)] my-3 flex items-center justify-center  font-space-grotesk relative py-4 px-5 " >

            <div className="w-full max-w-2xl flex flex-col items-center text-center justify-center gap-6  " >
                <h1 className=" text-4xl md:text-6xl font-bold text-white  " >Build and launch your DApps <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#D3A86C_0%,#91C8CA_22%,#9FE0D1_58%,#D3A86C_100%)]" > 5x faster</span></h1>
                <p className=" text-base md:text-xl text-white/90 md:px-7">
                    A modern, open-source toolkit for Aptos developers. Go from idea to scalable dApps without friction.
                </p>
                <button
                    onClick={() => handleCopy(githubUrl)}
                    className="rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out  px-6 py-2 md:py-3  flex items-center justify-center gap-3   focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins" >
                    https://github.com/chiscookeke11/Aptos-Scaffold.git <Copy size={20} />
                </button>



                <div className=" w-full max-w-xs md:max-w-none flex items-center gap-2 justify-center" >
                    <span className="block bg-white w-full h-[0.5px] " />
                    <p>or</p>
                    <span className="block bg-white w-full h-[0.5px] " />
                </div>



                <button onClick={() => handleCopy(npmCommand)} className="rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out  px-6 py-2 md:py-3  flex items-center justify-center  gap-3  focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins" >npm install nedu <Copy size={20} />  </button>

            </div>










            <Image src={"/logo/tailwind-logo.svg"} alt="" height={50} width={50} className="absolute left-[4%] lg:left-[10%] top-[50%] translate-y-[50%] hidden md:block opacity-90 " /> {/* Tailwind logo */}
            <Image src={"/logo/ts-logo.svg"} alt="" height={50} width={50} className="absolute right-[4%] lg:right-[10%] top-[50%] translate-y-[50%] hidden md:block opacity-90 " /> {/* typescript logo */}




            <Image src={"/logo/react-logo.svg"} alt="" height={50} width={50} className="absolute right-[7%] lg:right-[14%] top-[20%] translate-y-[50%] hidden md:block opacity-90 " /> {/* react logo */}
            <Image src={"/logo/Aptos_mark_WHT.svg"} alt="" height={50} width={50} className="absolute left-[7%] lg:left-[14%] top-[20%] translate-y-[50%] hidden md:block opacity-90 " /> {/* Aptos logo */}


            <Image src={"/logo/nextJs-logo.png"} alt="" height={50} width={50} className="absolute left-[7%] lg:left-[14%] bottom-[20%] translate-y-[50%] hidden md:block opacity-90 " /> {/* NextJs logo */}
            <Image src={"/logo/nodeJs-logo.jpg"} alt="" height={50} width={50} className="absolute right-[7%] lg:right-[14%] bottom-[20%] translate-y-[50%] hidden md:block opacity-90 rounded-full " /> {/* NextJs logo */}


        </section>
    )
}