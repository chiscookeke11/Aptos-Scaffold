"use client"


import { Check, Copy, LogOut, Wallet } from "lucide-react";
import ConnectButton from "./ConnectButton";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
import { toast } from "react-toastify";



export default function ConnectionBoard() {
    const { connected, wallet: currentWallet, disconnect, account } = useWallet()
    const [copied, setCopied] = useState(false)

    const getAddressLabel = () => {
        if (!account?.address) return "";
        const addr = account.address.toString();
        return addr.slice(0, 4) + "....." + addr.slice(addr.length - 4);
    };

    const ConnectWalletAddress = getAddressLabel()

    const handleCopy = async () => {
        if (account?.address) {
            await navigator.clipboard.writeText(account.address.toString())
            setCopied(true)
            toast.success("Wallet address copied successfully")
            setTimeout(() => setCopied(false), 3000)
        }

    }



    return (
        <div className=" w-full max-w-md flex flex-col items-start gap-2 bg-white text-black rounded-md py-5 px-4 " >

            <h5 className="flex items-center gap-2 font-bold text-xl md:text-2xl " > {connected ? "Wallet connected" : <><Wallet /> Connect Wallet</>} </h5>
            <p className=" font-bold text-base md:text-lg "> {connected ? `Connected with  ${currentWallet?.name}` : "Connect your Aptos wallet to deploy contracts"} </p>


            {!connected && <ConnectButton className="rounded-sm my-5  " variant="default"  >Pectra</ConnectButton>}


            {connected && (
                <div className=" my-4 flex items-center justify-between w-full gap-10 px-5 " >

                    <p className=" font-bold text-base md:text-lg "> {ConnectWalletAddress} </p>

                    {copied ? <Check size={20} /> : <button onClick={handleCopy} className="cursor-pointer" ><Copy size={20} /></button>}

                </div>
            )}

            {connected &&
                (
                    <div className="w-full flex items-center justify-between my-5 " >
                        <span className=" block bg-green-600 py-2 px-3 text-xs text-green-300 font-medium rounded-2xl " >Connected</span>

                        <button className="text-xs font-semibold cursor-pointer flex items-center gap-3 " onClick={disconnect}  >Disconnect <LogOut size={20} /></button>
                    </div>
                )
            }
        </div>
    )
}