import FacebookIcon from "@mui/icons-material/Facebook";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MailIcon from "@mui/icons-material/Mail";
import { Container } from "@mui/material";
import "font-awesome/css/font-awesome.min.css";
import styles from "./styles.module.scss";
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg" className={styles.wrapperContainer}>
                <div>
                    <h3>Thông tin</h3>
                    <a>Tra cứu</a>
                    <a>Luyện viết</a>
                    <a>Đóng góp</a>
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
            </Container>
        </div>
    );
};

export default Footer;
