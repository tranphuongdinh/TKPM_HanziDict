import NextNProgress from "nextjs-progressbar";
import { useContext, useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";
import { getUserClient } from "/apis/getUserClient";
import LoadingScreen from "/components/LoadingScreen";
import {
    PRIMARY_BACKGROUND_COLOR,
    PRIMARY_COLOR_HOVER,
} from "/constants/style";
import { AuthContext } from "/context/auth/auth.context";

const AppLayout = ({ children }) => {
    const {
        authState: { isAuthenticated, user },
        authDispatch,
    } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            if (isAuthenticated && !user) {
                const res = await getUserClient().getUserInfo();
                if (res?.success) {
                    const userInfo = res.data;
                    authDispatch({
                        type: "UPDATE_USER",
                        payload: userInfo,
                    });
                }
            }
            setLoading(false);
        };

        getUser();
    }, []);

    return (
        <div>
            {loading && <LoadingScreen />}
            <NextNProgress color={PRIMARY_COLOR_HOVER} height={5} />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Header></Header>
            {children}
            <Footer></Footer>
            <ScrollToTop
                smooth
                width="18"
                height="18"
                color={PRIMARY_BACKGROUND_COLOR}
                style={{ border: "1px solid #ccc" }}
            />
        </div>
    );
};

export default AppLayout;
