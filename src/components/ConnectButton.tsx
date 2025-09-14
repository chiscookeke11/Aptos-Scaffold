"use client"

import React, { SetStateAction, useEffect } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";



interface ConnectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode,
    variant?: "outline" | "default"
    ariaLabel?: string,
    setShowModal?: React.Dispatch<SetStateAction<boolean>>
}








export default function ConnectButton({ children, className, ariaLabel, setShowModal, variant = "outline", ...props }: ConnectButtonProps) {
    const { connect, connected } = useWallet()


    const baseStyles = " px-6 py-2 md:py-3  flex items-center justify-center   focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins "

    const variantStyles = variant === "outline" ? " rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out " : " border-[1px] border-[#171717] text-[#171717]  rounded-sm hover:bg-[#171717] hover:text-white transition-all duration-300 ease-in-out  "

    useEffect(() => {
        if (connected && setShowModal) {
            setShowModal(false)
        }
    }, [connected])



    return (
        <>

            <button onClick={() => connect("Petra")} aria-label={ariaLabel} className={` ${className} ${variantStyles} ${baseStyles} `} {...props}  >
                {children}
            </button>

        </>
    )
}