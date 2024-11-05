
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Advanced Faucet App</h1>
            <p className="mb-8 text-center">Claim tokens easily on Arbitrum, Celo, and Optimism.</p>
            <ConnectButton />
        </div>
    );
}
