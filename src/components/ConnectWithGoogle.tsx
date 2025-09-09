import React, { SetStateAction, useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";



interface ConnectWithGoogleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode,
    variant?: "outline" | "default"
    ariaLabel?: string,
    setShowModal: React.Dispatch<SetStateAction<boolean>>
}






export default function ConnectWithGoogle({ children, className, ariaLabel, setShowModal, variant = "outline", ...props }: ConnectWithGoogleProps) {
    const { connected, signIn } = useWallet()
    const [walletName, setWalletName] = useState<string | null>(null)



    const handleSignIn = async () => {
        const input = {
            domain: window.location.host,
            uri: window.location.origin,
            nonce: crypto.randomUUID(),
            resources: ["aptosconnect.app.email"],
        };

        const result = await signIn({
            walletName: "Continue with Google",
            input,
        });
    };


    useEffect(() => {
        const getCurrentWalletName = () => {
            const connectionMethod = localStorage.getItem("AptosWalletName")
            setWalletName(connectionMethod)
        }
        getCurrentWalletName()
    }, [connected])


    useEffect(() => {
        if (connected) {
            setShowModal(false)
        }
    }, [connected])





    const baseStyles = " px-6 py-2 md:py-3  flex items-center justify-center   focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins "

    const variantStyles = variant === "outline" ? " rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out " : " border-[1px] border-[#171717] text-[#171717]  rounded-sm hover:bg-[#171717] hover:text-white transition-all duration-300 ease-in-out  "



    return (
        <>

            <button onClick={handleSignIn} aria-label={ariaLabel} className={` ${className} ${variantStyles} ${baseStyles} `} {...props}  >
                {children}
            </button>

        </>
    )
}