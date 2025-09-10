"use client"

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



    const calcPrice = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        if (!rates) return null;


        else {
           const price =  rates?.[selectedToken]?.usd * number
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


    console.log(rates?.aptos?.usd)



    return (
        <div className="w-full h-screen flex items-center justify-center px-4 py-5 font-space-grotesk " >
            <form onSubmit={calcPrice} className="w-full max-w-3xl bg-white rounded-xl h-full py-7 px-5 flex flex-col items-center gap-4 text-black" >
                <h4 className="font-bold text-xl md:text-3xl ">Aptos Converter</h4>

                <input type="number" placeholder="3" />



                <div className="w-full flex items-center justify-between" >
                    <p>Aptos</p>


                    <p>USd</p>

                </div>

                <button >Submit</button>

            </form>
        </div>
    )
}