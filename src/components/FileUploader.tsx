"use client"

import { FileText, Upload } from "lucide-react";
import React, { SetStateAction} from "react";




interface FileUploaderProps {
    files: File[];
    setFiles: React.Dispatch<SetStateAction<File[]>>
}

export default function FileUploader({ files, setFiles }: FileUploaderProps) {

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = Array.from(e.target.files || [])
        setFiles(uploadedFiles)
    }




    return (
        <div className=" w-full basis-1/2 bg-white rounded-md flex flex-col items-start gap-5 px-5 py-4 pb-30 text-black   " >

            <div className="flex flex-col gap-1 items-start" >
                <h3 className="flex items-center gap-4 font-bold text-xl md:text-2xl "> <Upload /> Upload Contract Files</h3>
                <p className=" font-bold text-base md:text-lg ">Upload your Move contract files (.move, .toml)</p>
            </div>


            <label htmlFor="file-upload" className=" w-[70%] mx-auto flex flex-col items-center justify-center gap-4 p-4 py-[28] border-dashed border-2 border-red-black rounded-xl " >

                <Upload size={50} />
                <div className="space-y-1 text-center " >
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop your files here, or click to browse</p>
                    <p className="text-xs text-muted-foreground">Supports .move, .toml, and .md files</p>
                </div>


                <input
                    type="file"
                    name=""
                    id="file-upload"
                    multiple
                    accept=".move, .toml, .md"
                    onChange={handleFileUpload}
                    className="hidden" />
            </label>


            {files.length > 0 && (
                <div className="mt-4 space-y-2 w-full">
                    <label className="text-sm font-medium">Uploaded Files:</label>
                    {files.map((file, index) => (
                        <div key={index} className=" w-full flex items-center gap-2 p-2 bg-muted rounded-md">
                            <FileText />
                            <span className="text-sm">{file.name}</span>
                            <p className="ml-auto">
                                {(file.size / 1024).toFixed(1)} KB
                            </p>
                        </div>
                    ))}
                </div>
            )}








        </div>
    )
}