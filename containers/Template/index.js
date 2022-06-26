import Container from "@mui/material/Container";
import Head from "next/head";
import styles from "./styles.module.scss";

const Template = ({ children, title }) => {
    return (
        <Container maxWidth="lg" className={styles.container}>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </Container>
    );
};

export default Template;
