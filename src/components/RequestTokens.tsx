"use client"


import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";


export default function RequestTokens() {

    const [recipientAddress, setRecipientAddress] = useState("")
    const [loading, setLoading] = useState(false)


    const aptos = new Aptos(new AptosConfig({ network: Network.DEVNET }));

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        if (!recipientAddress || recipientAddress.trim.length < 1) {
            toast.error("Please fill in all fields")
            return;
        }

        setLoading(true)

        try {
            console.log("Submitted")
            await aptos.fundAccount({ accountAddress: recipientAddress, amount: 100000000 });
            toast.success("Minted")
            setRecipientAddress("")
        }
        catch (error: unknown) {
            if (error instanceof Error)
                toast.error(error.message)
            else {
                toast.error("An unknown error occurred");
                console.error("Unknown minting error:", error);
            }
        }

        finally {
            setLoading(false)
        }

    }





    return (
        <section className="text-white w-full flex items-center md:items-start justify-evenly flex-col md:flex-row gap-10 py-28 px-[4%] font-space-grotesk  " >

            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#D3A86C_0%,#91C8CA_22%,#9FE0D1_58%,#D3A86C_100%)]">Need Faucets?</h1>



            <form onSubmit={handleSubmit} className=" w-full max-w-3xl bg-white rounded-xl h-full py-7 px-5 flex flex-col items-center gap-4 text-black " >
                <h4 className="font-bold text-xl md:text-3xl ">Claim Devnet test tokens</h4>

                <label htmlFor="walletAddress" className="w-full max-w-md" >
                    Enter Wallet Address
                    <input
                        type="text"
                        name="walletAddress"
                        id="walletAddress"
                        value={recipientAddress}
                        onChange={(e) => setRecipientAddress(e.target.value)}
                        placeholder="0x4eccf6259e44187e2f9a578ab13bca173f351d1ec75539038aa10113bad2b6cc"
                        className=" border-2 border-[#171717] outline-none py-4 px-3 rounded-md w-full "
                    />
                </label>

                <label htmlFor="amount" className="w-full max-w-md">
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        placeholder="1 APT"
                        value={"1 APT"}
                        className=" border-2 border-[#171717] outline-none py-4 px-3 rounded-md w-full "
                        readOnly
                    />
                </label>

                <p className="text-sm mx-auto mt-3 text-center ">
                    Need tokens on <span className="font-bold">Testnet</span>?
                    <a
                        href="https://aptos.dev/network/faucet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#91C8CA] underline hover:text-[#D3A86C] transition-colors ml-1"
                    >
                        Click here to mint from the official Aptos Testnet faucet
                    </a>.
                </p>




                <button
                    disabled={!recipientAddress}
                    className="cursor-pointer px-6 md:px-6 py-2 md:py-3 flex items-center justify-center   focus:outline-none  text-lg md:text-xl font-bold bg-[#171717] text-white rounded-md hover:rounded-4xl transition-all duration-200 ease-in-out disabled:cursor-not-allowed  "
                    aria-label="mint">
                    {loading ? "Minting ..." : "    Mint"}
                </button>
            </form>
        </section>
    )
}