"use client"

import CodeEditor from "@/components/CodeEditor";
import ConnectionBoard from "@/components/ConnectionBoard";
import FileUploader from "@/components/FileUploader";
import { useState } from "react";



export default function Page() {
    const [contractName, setContractName] = useState("")
    const [moveCode, setMoveCode] = useState("")
    const [files, setFiles] = useState<File[]>([])

    console.log(moveCode)



    return (
        <div className=" w-full flex items-center  min-h-screen flex-col gap-16 px-6 py-20 font-space-grotesk " >
            <div className="flex flex-col items-center gap-3 max-w-4xl text-center w-full " >
                {/* intro text */}
                <h1 className=" text-4xl md:text-6xl font-bold text-white  " >Deploy Smart Contracts with  <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#D3A86C_0%,#91C8CA_22%,#9FE0D1_58%,#D3A86C_100%)]" > Confidence</span></h1>
                <p className="text-lg font-medium px-4 " >Professional Aptos Move contract deployment made simple. Upload, compile, and deploy your smart contracts to the Aptos blockchain.</p>
            </div>

            {/* wallet connection status board  */}
            <ConnectionBoard />





            <div className="w-full grid grid-cols-2 gap-10  max-w-4xl " >
                <FileUploader files={files} setFiles={setFiles} />
                <CodeEditor contractName={contractName} setContractName={setContractName} moveCode={moveCode} setMoveCode={setMoveCode} />
            </div>




        </div>
    )
}