import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home()  {
    const navigate = useNavigate();
    const wallet = useWallet();

    useEffect(() => {
        if (wallet.connected) {
            navigate('/profile');
        }
    }, [wallet]);
    return (
        <div>
        <h1>Welcome to app!</h1>
        <p>Get started by doing stuff.</p>
        </div>
    );
}