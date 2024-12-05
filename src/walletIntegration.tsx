import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, arbitrum, bsc } from "viem/chains";
import { walletConnect, injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Setup queryClient
const queryClient = new QueryClient();

// Get projectId
const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) throw new Error("Project ID is undefined");

// Metadata configuration
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Define chains
const chains = [mainnet, arbitrum, bsc] as const;

// Configure WalletConnect
const walletConnectConnector = walletConnect({
  projectId,
  metadata,
  showQrModal: false,
});

// Configure injected connector with strict settings
const injectedConnector = injected({
  shimDisconnect: true,
  target: 'metaMask'  // Explicitly target MetaMask
});

// Create wagmi config
const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [bsc.id]: http(),
  },
  connectors: [
    walletConnectConnector,
    injectedConnector
  ],
});

// Configure Web3Modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'light',
  defaultChain: mainnet,
  featuredWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
  ],
  mobileWallets: [
    {
      id: "trust",
      name: "Trust Wallet",
      links: {
        native: "trust://",
        universal: "https://link.trustwallet.com"
      }
    }
  ],
  desktopWallets: [
    {
      id: "trust",
      name: "Trust Wallet",
      links: {
        native: "trust://",
        universal: "https://link.trustwallet.com"
      }
    }
  ],
  explorerRecommendedWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet first
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"  // MetaMask second
  ],
  explorerExcludedWalletIds: undefined, // Don't exclude any wallets
  tokenContracts: {
    [mainnet.id]: {
      address: "YOUR_TOKEN_ADDRESS" // Replace with your token address
    }
  }
});

// ConnectWallet component
export const ConnectWallet: React.FC = () => {
  return (
    <div className="centered-div">
      <w3m-button />
    </div>
  );
};

// Main application
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);