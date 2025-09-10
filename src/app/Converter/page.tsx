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
    const number = 10
    const [selectedToken, setSelectedToken] = useState<keyof RatesData>("aptos")
    const [fromCurrency, setFromCurrency] = useState<"USD" | "APTOS">("APTOS")
    const [toCurrency, setToCurrency] = useState<"USD" | "APTOS">("USD")



    const calcPrice = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        if (!rates) return null;


        else {
            const price = rates?.[selectedToken]?.usd * number
            console.log(price)
            return price
        }
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
        if (fromCurrency === "APTOS" && toCurrency === "USD") {
            setFromCurrency("USD")
            setToCurrency("APTOS")
        }
        else if (fromCurrency === "USD" && toCurrency === "APTOS") {
            setFromCurrency("APTOS")
            setToCurrency("USD")
        }
        else return;
    }


    console.log(rates?.aptos?.usd)


    console.log("from currency:", fromCurrency)
    console.log("to currency:", toCurrency)


    return (
        <div className="w-full h-screen flex items-center justify-center px-4 py-5 font-space-grotesk " >
            <form onSubmit={calcPrice} className="w-full max-w-2xl bg-white rounded-xl h-full py-7 px-5 flex flex-col items-center gap-4 text-black" >
                <h4 className="font-bold text-xl md:text-3xl ">Aptos Converter</h4>





                <div className="w-full flex items-center justify-between" >
                    {/* from-input */}
                    <label htmlFor="" className="flex flex-col items-center gap-1 p-2  " >
                        <span>{fromCurrency}</span>
                        <input type="text" className="border border-black outline-none w-full  p-3 text-lg font-semibold rounded-md " />
                    </label>

                    <button type="button" className="mt-4" onClick={switchCurrencies} >    <ArrowRightLeft size={40} /></button>


                    {/* to input  */}
                    <label htmlFor="" className="flex flex-col items-center gap-1 p-2  ">
                        <span>{toCurrency}</span>
                        <input type="text" className="border border-black outline-none w-full  p-3 text-lg font-semibold rounded-md " />
                    </label>

                </div>

                <button >Submit</button>

            </form>
        </div>
    )
}