


export default function Hero() {
    return (
        <section className="w-full h-screen bg-[var(--background)] my-3 flex items-center justify-center  font-space-grotesk relative py-4 px-5 " >

            <div className="w-full max-w-2xl flex flex-col items-center text-center justify-center gap-6  " >
                <h1 className= " text-4xl md:text-6xl font-bold text-white  " >Build and launch your DApps <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#D3A86C_0%,#91C8CA_22%,#9FE0D1_58%,#D3A86C_100%)]" > 5x faster</span></h1>
                <p className=" text-base md:text-xl text-white/90 md:px-7">
                    A modern, open-source toolkit for Aptos developers. Go from idea to scalable dApps without friction.
                </p>
                <button className="rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out  px-6 py-2 md:py-3  flex items-center justify-center   focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins" >Git url</button>



                <div className=" w-full max-w-xs md:max-w-none flex items-center gap-2 justify-center" >
                    <span className="block bg-white w-full h-[0.5px] " />
                    <p>or</p>
                    <span className="block bg-white w-full h-[0.5px] " />
                </div>



                <button className="rounded-[1000px] border-[1px] border-white bg-transparent hover:bg-white hover:text-[#000] text-white transition-all duration-300 ease-in-out  px-6 py-2 md:py-3  flex items-center justify-center   focus:outline-none cursor-pointer text-sm md:text-base font-semibold font-poppins" >npm install nedu</button>

            </div>
        </section>
    )
}