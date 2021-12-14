interface Solana {
  isPhantom: boolean;
  connect: () => Promise<void>;
  on: any;
  signAndSendTransaction: (transaction: any) => void;
  publicKey: any;
}

interface Window extends Window {
  solana: Solana;
}
