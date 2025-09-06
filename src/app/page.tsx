"use client"


import ConnectButton from "@/components/ConnectButton";
import ConnectWithGoogle from "@/components/ConnectWithGoogle";




export default function Home() {





  return (



    <div className=" h-screen flex items-center justify-center flex-col gap-1" >









      <ConnectWithGoogle variant="default">Connect with google</ConnectWithGoogle>


      <ConnectButton variant="default" >Connect Wallet</ConnectButton>
    </div>
  );
}
