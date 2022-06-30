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
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
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
