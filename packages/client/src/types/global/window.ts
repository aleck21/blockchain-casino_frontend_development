import { MetaMaskInpageProvider } from '@metamask/providers';

export interface Solana {
  isPhantom: boolean;
  connect: () => Promise<void>;
  on: any;
  signAndSendTransaction: (transaction: any) => void;
  publicKey: any;
}

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
    solana: Solana;
  }
}
