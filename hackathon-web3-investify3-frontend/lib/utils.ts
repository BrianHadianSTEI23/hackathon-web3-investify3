import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BrowserProvider, Signer, JsonRpcSigner } from "ethers"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MetamaskConnection {
  account : string,
  provider : BrowserProvider, 
  signer : JsonRpcSigner
}

export async function connectMetaMask(): Promise<MetamaskConnection | null> {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request MetaMask accounts
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // Create Ethereum provider and signer
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      return { account: accounts[0], provider, signer };
    } catch (error) {
      console.error("MetaMask connection error:", error);
      return null;
    }
  } else {
    alert("MetaMask is not installed. Please install MetaMask.");
    return null;
  }
}
