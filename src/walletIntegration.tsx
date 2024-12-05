import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import type { CreateConnectorFn } from "@wagmi/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authConnector } from "@web3modal/wagmi";
import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorPage } from "./ErrorPage";
import { TelegramProvider } from 'react-telegram-miniapp';


// Query Client for react-query
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) throw new Error("Project ID is undefined");

// Define metadata
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Define chains
const chains = [mainnet, arbitrum] as const;

// Create connectors
const connectors: CreateConnectorFn[] = [];
connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
connectors.push(injected({ shimDisconnect: true }));
connectors.push(
  coinbaseWallet({
    appName: metadata.name,
    appLogoUrl: metadata.icons[0],
  })
);
connectors.push(
  authConnector({
    options: { projectId },
    socials: ["google", "x", "github", "discord", "apple"],
    showWallets: true,
    email: true,
    walletFeatures: false,
  })
);

// Wagmi configuration
const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors: connectors,
});

// Create Web3Modal
createWeb3Modal({ wagmiConfig, projectId });

// ConnectWallet Component
export const ConnectWallet: React.FC = () => (
  <div className="centered-div">
    <w3m-button />
  </div>
);

// Main Application
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={ErrorPage}>
      <TelegramProvider>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <ConnectWallet />
          </QueryClientProvider>
        </WagmiProvider>
      </TelegramProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
