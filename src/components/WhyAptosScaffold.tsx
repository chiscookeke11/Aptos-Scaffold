import { Earth, HandCoins, HopIcon, Palette, Rocket, SquareCheckBig, Zap } from "lucide-react"




const reasons = [
    {
        heading: "Faster Development",
        content: "Go from idea to prototype in minutes.",
        icon: <Rocket size={40} />
    },
    {
        heading: "Prebuilt Integrations",
        content: "Wallets, smart contract setup, and frontend boilerplate included.",
        icon: <Zap size={40}/>
    },
       {
        heading: "Request Test Tokens",
        content: "Instantly get test tokens from within the app, no faucet hunting.",
        icon:<HandCoins size={40} />
    },
    {
        heading: "Modern Stack",
        content: "Next.js, Tailwind, React, and TypeScript ready out-of-the-box.",
        icon: <Palette size={40}/>
    },
    {
        heading: "Best Practices",
        content: "Secure defaults and scalable architecture baked in.",
        icon: <SquareCheckBig size={40}/>
    },

]



export default function WhyAptosScaffold() {
    return (
        <section className="py-[10%] px-[5%] flex flex-col md:flex-row  items-center md:items-start justify-center gap-10 lg:gap-20 font-space-grotesk  " >
            <h1 className=" text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#D3A86C_0%,#91C8CA_22%,#9FE0D1_58%,#D3A86C_100%)] text-center md:text-start " >Why Aptos Scaffold?</h1>


            <div className="w-full max-w-3xl flex flex-col items-start gap-7 h-full" >

                {
                    reasons.map((reason, index) => (
                        <div key={index} className=" w-full flex items-center justify-start gap-10 bg-white px-6 py-4 text-black rounded-xl  " >
                           {reason.icon}

                            <div>
                              <h4 className=" font-bold text-xl md:text-2xl  " >{reason.heading}</h4>
                              <p className=" font-bold text-base md:text-lg " >{reason.content} </p>
                            </div>

                        </div>
                    ))
                }




            </div>
        </section>
    )
}