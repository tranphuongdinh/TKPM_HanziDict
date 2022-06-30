import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Template from "/containers/Template";

export default function PageNotFound() {
    return (
        <Template title="Không tìm thấy trang | Hanzi Dict">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                    404
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    找不到页面
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Page Not Found
                </Typography>

                <Button variant="contained" sx={{ maxWidth: 200, mt: 10 }}>
                    <Link href="/">Quay về trang chủ</Link>
                </Button>
            </Box>
        </Template>
    );
}
