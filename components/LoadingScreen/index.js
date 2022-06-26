import { Box, CircularProgress } from "@mui/material";
import styles from "./styles.module.scss";

export default function LoadingScreen({ color = "primary", size = 40 }) {
    return (
        <Box className={styles.loadingWrapper}>
            <CircularProgress color={color} size={size} />
        </Box>
    );
}
