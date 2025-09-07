import Image from "next/image";





export default function JoinCommunity() {
    return (
        <section className=" flex flex-col items-center justify-center gap-6 py-10 px-5 font-space-grotesk text-center " >

            <Image src={"/logo/aptos-coin.webp"} alt="aptos token" height={500} width={500} className=" h-[180px] w-[180px]  md:h-[300px] md:w-[300px] object-center " />




            <h2 className= " text-2xl md:text-5xl font-bold  text-transparent bg-clip-text bg-[linear-gradient(90deg,#D3A86C_0%,#91C8CA_22%,#9FE0D1_58%,#D3A86C_100%)]  " >Join the Aptos Builder Community</h2>
            <p className=" text-base md:text-xl text-white/90 md:px-7 max-w-4xl " >Connect with developers, learn, and build together on Aptos. Have an idea for a new feature? Open an issue on our GitHub and help shape the toolkit.</p>
            <a href={"https://t.me/aptos"} target="_blank" >
                <button className="cursor-pointer px-6 md:px-6 py-2 md:py-3 flex items-center justify-center   focus:outline-none  text-lg md:text-xl font-bold bg-white text-[#171717] rounded-md hover:rounded-4xl transition-all duration-200 ease-in-out  " aria-label="Chat" >Chat</button>
            </a>

        </section>
    )
}