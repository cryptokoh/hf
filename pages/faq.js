
export default function FAQ() {
    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-medium">What is this app?</h3>
                    <p>A simple faucet to claim tokens on supported networks.</p>
                </div>
                <div>
                    <h3 className="font-medium">How do I claim tokens?</h3>
                    <p>Connect your wallet and click the "Claim Tokens" button.</p>
                </div>
                <div>
                    <h3 className="font-medium">Is this app secure?</h3>
                    <p>Yes, we use secure wallet connections and contracts.</p>
                </div>
            </div>
        </div>
    );
}
