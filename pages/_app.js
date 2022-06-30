import { createTheme, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import AppLayout from "/containers/AppLayout";
import { AuthProvider } from "/context/auth/auth.provider";

const theme = createTheme({
    typography: {
        fontFamily: ["Arima", "Roboto", "sans-serif"].join(","),
    },
});

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
                    <ThemeProvider theme={theme}>
                        <AppLayout>
                            <Component {...pageProps} />
                        </AppLayout>
                    </ThemeProvider>
                </AuthProvider>
            )}
        </>
    );
}

export default MyApp;
