"use client"

import Image from "next/image";
import Link from "next/link";
import ConnectWalletModal from "./ConnectWalletModal";
import { useEffect, useState } from "react";



export default function Navbar() {
    const [showModal, setShowModal] = useState(false)



    useEffect(() => {
        const originalStyle = document.body.style.overflowY;

        document.body.style.overflowY = showModal ? "hidden" : "auto";

        return () => {
            document.body.style.overflowY = originalStyle;
        };
    }, [showModal]);



    return (
        <nav className="w-[95%] min-w-sm mx-auto mt-4 rounded-[200px] flex items-center justify-between py-3 md:py-5 px-[4%] font-space-grotesk border border-[#F9FAFB] " >
            <Link href={"/"} className="flex items-center gap-2" >
                <Image src={"/logo/aptos_logo.png"} alt="Aptos-Scaffold" width={200} height={200} className=" w-5 md:w-[40px] " />
                <h4 className=" text-base md:text-xl " >Aptos Scaffold</h4>
            </Link>


            <button onClick={() => setShowModal(true)} className="cursor-pointer px-3 md:px-6 py-2 md:py-3 flex items-center justify-center   focus:outline-none  text-sm md:text-base font-semibold bg-white text-[#171717] rounded-md hover:rounded-4xl transition-all duration-200 ease-in-out  " aria-label="Connect Wallet" >Connect Wallet</button>


            {showModal && (<ConnectWalletModal setShowModal={setShowModal} />)}
        </nav>
    )
}