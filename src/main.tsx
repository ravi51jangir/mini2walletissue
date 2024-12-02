import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal } from "@web3modal/wagmi/react";

import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import type { CreateConnectorFn } from '@wagmi/core'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authConnector,  } from "@web3modal/wagmi";
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

// 1. Get projectId at https://cloud.walletconnect.com
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

// create the connectors
const connectors: CreateConnectorFn[] = []
connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
connectors.push(injected({ shimDisconnect: true }));
connectors.push(coinbaseWallet({
  appName: metadata.name,
  appLogoUrl: metadata.icons[0],
}));

connectors.push(authConnector({ 
  options: { projectId },
  socials: ['google', 'x', 'github', 'discord', 'apple'], // this will create a non-custodial wallet (please check https://secure.walletconnect.com/dashboard for more info)
  showWallets: true,
  email: true,
  walletFeatures: false,
}));

const wagmiConfig = createConfig({
  chains, // Use the defined chains here
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors: connectors,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="centered-div">
          {/* <w3m-button /> */}
          {/* <Homepage/> */}
          <Homepage_2/>
          {/* <Homepage_3/> */}
          {/* <Nftpage/> */}
          {/* <Stackpage/> */}
          {/* <Notificationpage/> */}
          {/* <ICO_3page/> */}
          {/* <ICO_4page/> */}
          {/* <ICO_5page/> */}
          
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
