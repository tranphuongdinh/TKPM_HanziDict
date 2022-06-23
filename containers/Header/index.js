import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/images/logocute.png";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={logo} width="100px" height="80px" alt="" />
      </div>
      <div className={styles.navbar}> </div>
      <div className={styles.user_control}></div>
    </div>
  );
};

export default Header;
