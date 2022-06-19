import Head from "next/head";
import styles from "./styles.module.scss";

const Template = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.container}>{children}</div>
        </>
    );
};

export default Template;
