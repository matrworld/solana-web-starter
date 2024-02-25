import './styles.postcss';
import '@solana/wallet-adapter-react-ui/styles.css';

import { StrictMode, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from "./routes/home";
import { Profile } from "./routes/profile";

import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { useMemo } from 'react'

import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { BookText } from 'lucide-react';

import { lib } from "@template-solana-web/lib";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Providers
function Root() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  useEffect(() => {
    // I am a library
    lib();
  }, []);

  return (
    <StrictMode>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={[]}>
              <WalletModalProvider>
                <HashRouter basename="/">
                  <App />
                </HashRouter>
              </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
    </StrictMode>
  )
}

function Nav() {
  const { publicKey, connected } = useWallet();



  return (
    <nav className="sticky top-0 flex justify-between items-center w-screen px-6 py-3 z-10">
    <h2 className="text-2xl font-semibold">Template</h2>
    <div className="flex gap-3 flex-wrap">
        <a href="/" className="btn btn-outline">
            <span>
                <BookText size={16} />
            </span>
            Docs
        </a>
        <WalletMultiButton>
            {connected ? `${publicKey?.toBase58().slice(0, 6)}...` : <>
                <p>
                    Connect Wallet
                </p>
            </>}
        </WalletMultiButton>
    </div>
    </nav>
  );
}

// Content
function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen mx-auto max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
      </main>
    </>
  )
}

root.render(<Root />);
