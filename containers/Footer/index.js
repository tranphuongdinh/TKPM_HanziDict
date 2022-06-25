import "font-awesome/css/font-awesome.min.css";
import styles from "./styles.module.scss";
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h3>Thông tin</h3>
                <a>Tra cứu</a>
                <a>Luyện viết</a>
                <a>Đóng góp</a>
            </div>
            <div>
                <h3>Liên hệ</h3>
                <a href="https://www.hcmus.edu.vn/">
                    <i className="fa fa-university"></i>hcmus.edu.vn
                </a>
                <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-square"></i>www.facebook.com
                </a>
                <a href="mailto: hanzi@gmail.com">
                    <i className="fa fa-envelope"></i>hanzi@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Footer;
