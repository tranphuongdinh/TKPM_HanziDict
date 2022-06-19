import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR } from "../constants/style";
import { AuthContext } from "../context/auth/auth.context";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
    const {
        authState: { user },
    } = useContext(AuthContext);
    const router = useRouter();
    return (
        <div>
            <NextNProgress color={PRIMARY_COLOR} height={5} />
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
