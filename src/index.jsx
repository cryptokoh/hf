// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import Tailwind CSS

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

// Configure chains and create a client
const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Hand Protocol',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
