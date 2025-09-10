"use client"

import { ArrowRightLeft } from "lucide-react";
import { FormEvent, useEffect, useState } from "react"




type CurrencyRates = {
    usd: number;
    ngn: number;
    eur: number;
};

type RatesData = {
    aptos: CurrencyRates;
    bitcoin: CurrencyRates;
    ethereum: CurrencyRates;
};



export default function Page() {
    const [rates, setRates] = useState<RatesData | null>(null)
    const [selectedToken, setSelectedToken] = useState<keyof RatesData>("aptos")
    const [fromCurrency, setFromCurrency] = useState<"USD" | "APTOS">("APTOS")
    const [toCurrency, setToCurrency] = useState<"USD" | "APTOS">("USD")
    const [fromValue, setFromValue] = useState<string>("")
    const [toValue, setToValue] = useState<string>("")



    const convertCurrency = (value: string, isFromInput: boolean) => {
        if (!rates || !value || isNaN(Number(value))) {
            if (isFromInput) {
                setToValue("")
            }
            else {
                setFromValue("")
            }
            return
        }


        const numValue = Number(value)
        const rate = rates[selectedToken]?.usd

        if (!rate) return


        if (isFromInput) {
            // converting from input
            if (fromCurrency === "APTOS") {
                // APTOS to USD
                const converted = numValue * rate
                setToValue(converted.toFixed(2))
            }
            else {
                // USD to APTOS
                const converted = numValue / rate
                setToValue(converted.toFixed(6))
            }
        }
        else {
            // converting to input (reverse calculation)
            if (toCurrency === "USD") {
                // USD to APTOS
                const converted = numValue / rate
                setFromValue(converted.toFixed(6))
            }
            else {
                // APTOS to USD
                const converted = numValue * rate
                setFromValue(converted.toFixed(2))
            }
        }
    }

    const handleFromValueChange = (value: string) => {
        setFromValue(value)
        convertCurrency(value, true)
    }

    const handleToValueChange = (value: string) => {
        setToValue(value)
        convertCurrency(value, false)
    }

    useEffect(() => {
        const fetchRates = () => {
            fetch("https://api.coingecko.com/api/v3/simple/price?ids=aptos,ethereum,bitcoin&vs_currencies=usd,ngn,eur,usdc")
                .then((res) => res.json())
                .then((data) => {
                    setRates(data)
                })
                .catch((err) => console.error(err))
        }
        fetchRates()
    }, [])


    const switchCurrencies = () => {
        const newFromCurrency = toCurrency;
        const newToCurrency = fromCurrency
        const newFromValue = toValue
        const newToValue = fromValue

        setFromCurrency(newFromCurrency)
        setToCurrency(newToCurrency)
        setFromValue(newFromValue)
        setToValue(newToValue)

    }


    return (
        <div className="w-full h-screen flex items-center justify-center px-4 py-5 font-space-grotesk " >
            <div className="w-full max-w-2xl bg-white rounded-xl h-fit py-7 px-5 flex flex-col items-center gap-4 text-black" >
                <h4 className="font-bold text-xl md:text-3xl ">Aptos Converter</h4>

                <div className="flex gap-2 mb-4">
                    {(["aptos", "bitcoin", "ethereum"] as const).map((token) => (
                        <button
                            key={token}
                            type="button"
                            onClick={() => {
                                setSelectedToken(token)
                                setFromValue("")
                                setToValue("")
                            }}
                            className={`px-4 py-2 rounded-md capitalize font-medium ${selectedToken === token ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {token}
                        </button>
                    ))}
                </div>



                <div className="w-full flex items-center justify-between" >
                    {/* from-input */}
                    <label htmlFor="" className="flex flex-col items-center gap-1 p-2  " >
                        <span>{fromCurrency}</span>
                        <input
                            type="text"
                            value={fromValue}
                            onChange={(e) => handleFromValueChange(e.target.value)}
                            className="border border-black outline-none w-full  p-3 text-lg font-semibold rounded-md " />
                    </label>

                    <button type="button" className="mt-4" onClick={switchCurrencies} >    <ArrowRightLeft size={40} /></button>


                    {/* to input  */}
                    <label htmlFor="" className="flex flex-col items-center gap-1 p-2  ">
                        <span>{toCurrency}</span>
                        <input
                            type="text"
                            value={toValue}
                            onChange={(e) => handleToValueChange(e.target.value)}
                            className="border border-black outline-none w-full  p-3 text-lg font-semibold rounded-md " />
                    </label>

                </div>




                {rates && (
                    <div className="text-sm text-gray-600 mt-2">
                        1 {selectedToken.toUpperCase()} = ${rates[selectedToken]?.usd?.toFixed(2)} USD
                    </div>
                )}


            </div>
        </div>
    )
}