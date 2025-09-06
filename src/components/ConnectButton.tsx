import React from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";



interface ConnectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode,
    variant?: "outline" | "default"
    ariaLabel?: string
}





const Spinner = () => {
    return (
        <div className="w-5 h-5 rounded-full border-2 border-red-700 border-t-transparent animate-spin duration-300  "  >

        </div>
    )
}



export default function ConnectButton({ children, className, ariaLabel, variant = "outline", ...props }: ConnectButtonProps) {
    const { connect, disconnect, connected, isLoading } = useWallet()

    const baseStyles = " px-6 py-2 md:py-3  flex items-center justify-center   focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins "

    const variantStyles = variant === "outline" ? " rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out " : " border-[1px] border-[#171717] text-[#171717]  rounded-sm hover:bg-[#171717] hover:text-white transition-all duration-300 ease-in-out  "



    return (
        <>
            {
                connected ?
                    (
                        <button onClick={disconnect} aria-label={ariaLabel} className={` ${className} ${variantStyles} ${baseStyles} `} {...props}  >
                            Disconnect wallet
                        </button>
                    )
                    :
                    (
                        <button onClick={() => connect("Petra")} aria-label={ariaLabel} className={` ${className} ${variantStyles} ${baseStyles} `} {...props}  >
                            {isLoading ? <Spinner/> : children}
                        </button>
                    )
            }
        </>
    )
}