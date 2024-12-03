import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import type { CreateConnectorFn } from '@wagmi/core'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authConnector } from "@web3modal/wagmi";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your pages
import Homepage from "./pages/HOMEPAGE";
import Homepage_2 from "./pages/HOMEPAGE_2";
import Homepage_3 from "./pages/HOMEPAGE_3";
import Nftpage from "./pages/NFT";
import Stackpage from "./pages/Stack";
import Notificationpage from "./pages/NOTIFICATION";
import ICO_3page from "./pages/ICO_3";
import ICO_4page from "./pages/ICO_4";
import ICO_5page from "./pages/ICO_5";
import "./styles.css"

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) throw new Error("Project ID is undefined");

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Define chains
const chains = [mainnet, arbitrum] as const

// Create connectors
const connectors: CreateConnectorFn[] = []
connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
connectors.push(injected({ shimDisconnect: true }));
connectors.push(coinbaseWallet({
  appName: metadata.name,
  appLogoUrl: metadata.icons[0],
}));

connectors.push(authConnector({ 
  options: { projectId },
  socials: ['google', 'x', 'github', 'discord', 'apple'],
  showWallets: true,
  email: true,
  walletFeatures: false,
}));

const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors: connectors,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId });

// Create App component with routing
function App() {
  return (
    <div className="centered-div">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home2" element={<Homepage_2 />} />
        <Route path="/home3" element={<Homepage_3 />} />
        <Route path="/nft" element={<Nftpage />} />
        <Route path="/stack" element={<Stackpage />} />
        <Route path="/notifications" element={<Notificationpage />} />
        <Route path="/ico3" element={<ICO_3page />} />
        <Route path="/ico4" element={<ICO_4page />} />
        <Route path="/ico5" element={<ICO_5page />} />
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <w3m-button /> */}
    </div>
  );
}

// Root render
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);