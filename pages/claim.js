
import { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { abi } from '../path-to-abi';

export default function Claim() {
    const { isConnected } = useAccount();
    const [status, setStatus] = useState(null);

    const { config } = usePrepareContractWrite({
        address: '0xYourContractAddress',
        abi,
        functionName: 'claimTokens',
    });

    const { write } = useContractWrite(config);

    const handleClaim = async () => {
        try {
            setStatus('Processing...');
            await write?.();
            setStatus('Tokens claimed successfully!');
        } catch (error) {
            setStatus('Error claiming tokens.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            {isConnected ? (
                <>
                    <button onClick={handleClaim} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Claim Tokens
                    </button>
                    {status && <p className="mt-4">{status}</p>}
                </>
            ) : (
                <p>Please connect your wallet to claim tokens.</p>
            )}
        </div>
    );
}
