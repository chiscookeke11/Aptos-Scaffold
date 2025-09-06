"use client";

import {
  AptosWalletAdapterProvider,
  type AvailableWallets,
} from "@aptos-labs/wallet-adapter-react";

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  const optInWallets: AvailableWallets[] = ["Petra", "Continue with Google"];

  return (
    <AptosWalletAdapterProvider autoConnect optInWallets={optInWallets}>
      {children}
    </AptosWalletAdapterProvider>
  );
}
