import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/auth/auth.provider";
import AppLayout from "../containers/AppLayout";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <Head>
                <title>Cybersoft Elearning</title>
            </Head>
            {loaded && (
                <AuthProvider>
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                </AuthProvider>
            )}
        </>
    );
}

export default MyApp;
