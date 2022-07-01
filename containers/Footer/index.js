import FacebookIcon from "@mui/icons-material/Facebook";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MailIcon from "@mui/icons-material/Mail";
import { Container } from "@mui/material";
import "font-awesome/css/font-awesome.min.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import logo from "/public/images/logocute.png";

const Footer = () => {
    const pages = [
        {
            label: "Tra cứu",
            url: "/",
        },
        {
            label: "Luyện viết",
            url: "/writing",
        },
        { label: "Đóng góp", url: "/contribution" },
    ];
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg" className={styles.wrapperContainer}>
                <div>
                    <h3>Thông tin</h3>
                    <Link href="/">
                        <a>Tra cứu</a>
                    </Link>
                    <Link href="/writing">
                        <a>Luyện viết</a>
                    </Link>

                    <Link href="/contribution">
                        <a>Đóng góp</a>
                    </Link>
                </div>
                <div>
                    <h3>Liên hệ</h3>
                    <a href="https://www.hcmus.edu.vn/">
                        <HomeWorkIcon
                            sx={{ fontSize: 30, lineHeight: 50 }}
                            className={styles.icon}
                        />
                        hcmus.edu.vn
                    </a>
                    <a href="https://www.facebook.com/">
                        <FacebookIcon
                            sx={{ fontSize: 30 }}
                            className={styles.icon}
                        />
                        www.facebook.com
                    </a>
                    <a href="mailto: hanzi@gmail.com">
                        <MailIcon
                            sx={{ fontSize: 30 }}
                            className={styles.icon}
                        />
                        hanzi@gmail.com
                    </a>
                </div>
                <Link href="/" className={styles.logo}>
                    <Image
                        priority
                        src={logo}
                        className={styles.img}
                        width={220}
                        height={180}
                        alt="logo"
                    />
                </Link>
            </Container>
            <p className={styles.copyright}>
                &copy; 2022 | TKPM Team TPĐ - ĐMB - VNT
            </p>
        </div>
    );
};

export default Footer;
