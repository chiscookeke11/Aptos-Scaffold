"use client"

import { X } from "lucide-react";
import ConnectButton from "./ConnectButton";
import ConnectWithGoogle from "./ConnectWithGoogle";
import Image from "next/image";
import React, { SetStateAction } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

interface ConnectWalletModalProps {
    setShowModal: React.Dispatch<SetStateAction<boolean>>
}


export default function ConnectWalletModal({ setShowModal }: ConnectWalletModalProps) {
      const { account, connected } = useWallet()
    return (
        <div className=" w-full h-screen fixed inset-0 flex items-center justify-center bg-black/75 z-40 px-5 py-10 font-space-grotesk " >



            <div className=" w-full max-w-xl bg-white rounded-md flex items-center flex-col px-4 py-4 pb-7 gap-5 " >
                <button onClick={() => setShowModal(false)} className=" ml-auto flex items-center justify-center text-red-600 cursor-pointer " ><X size={30} /></button>
                <h1 className=" text-3xl font-semibold text-[#171717] " >Connect Wallet</h1>

                      {connected ? <p className=" text-[#171717] " > Connected:  {account?.address.toString().slice(0, 6) + "....." + account?.address.toString().slice(account.address.toString().length - 7,  account.address.toString().length) } </p> : null}



                <div className="flex flex-col items-start w-full gap-3" >
                    <ConnectButton variant="default" className="w-full flex items-center gap-2" ><span>Connect Petra Wallet</span> <Image src={"/logo/pectra-logo.png"} alt="Aptos-Scaffold" width={200} height={200} className=" w-6 rounded-full   " /> </ConnectButton>
                    <ConnectWithGoogle variant="default" className="w-full flex items-center gap-2">Connect with google <Image src={"/logo/Google__G__logo.png"} alt="Aptos-Scaffold" width={200} height={200} className=" w-6 rounded-full   " /> </ConnectWithGoogle>


                </div>


            </div>
        </div>
    )
}