import styles from "./styles.module.scss";
import "font-awesome/css/font-awesome.min.css";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Information</h3>
        <a>Home</a>
        <a>About Us</a>
        <a>Contribute</a>
      </div>
      <div>
        <h3>Contact</h3>
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
