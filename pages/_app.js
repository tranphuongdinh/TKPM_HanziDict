import Head from "next/head";
import { useEffect, useState } from "react";
import AppLayout from "/containers/AppLayout";
import { AuthProvider } from "/context/auth/auth.provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <Head>
                <title>Hanzi Dict</title>
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
