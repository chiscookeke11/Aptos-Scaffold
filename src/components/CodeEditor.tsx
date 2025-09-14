"use client"


import { Code } from "lucide-react";
import React, { SetStateAction } from "react";


interface CodeEditorProps {
    contractName: string;
    setContractName: React.Dispatch<SetStateAction<string>>
    moveCode: string;
    setMoveCode: React.Dispatch<SetStateAction<string>>
}



export default function CodeEditor({ contractName, setContractName, moveCode, setMoveCode }: CodeEditorProps) {




    return (
        <div className=" w-full basis-1/2 h-full bg-white rounded-md flex flex-col items-start gap-5 px-5 py-4 text-black   " >

            <div className="flex flex-col gap-1 items-start" >
                <h3 className="flex items-center gap-4 font-bold text-xl md:text-2xl "> <Code /> Write your contract code </h3>
                <p className=" font-bold text-base md:text-lg ">Write your Move contract directly in the editor</p>
            </div>

            <label htmlFor="contractName" className=" flex w-full flex-col gap-1 items-start " >
                <span className=" font-bold text-base ">Contact Name</span>
                <input
                    type="text"
                    name="contractName"
                    value={contractName}
                    onChange={(e) => setContractName(e.target.value)}
                    id="contractName"
                    className=" w-full px-4 py-3 border border-black rounded-md "
                />
            </label>



            <label htmlFor="moveCode" className=" flex w-full flex-col gap-1 items-start ">
                <span className=" font-bold text-base ">Move Code</span>


                <textarea
                    id="moveCode"
                    name="moveCode"
                    value={moveCode}
                    rows={8}
                    onChange={(e) => setMoveCode(e.target.value)}
                    className=" w-full h-full px-2 py-3 border border-black rounded-md " >

                </textarea>
            </label>
        </div>
    )
}