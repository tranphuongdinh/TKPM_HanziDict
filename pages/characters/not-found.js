import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { PRIMARY_COLOR } from "../../constants/style";
import Template from "/containers/Template";
const Contribution = () => {
    const router = useRouter();

    return (
        <Template title="Character not found | Hanzi Dict">
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
            >
                Hiện chưa có dữ liệu cho từ này, bạn có muốn{" "}
                <b
                    style={{ color: PRIMARY_COLOR, cursor: "pointer" }}
                    onClick={() => {
                        router.push({
                            pathname: "/contribution",
                            query: router.query,
                        });
                    }}
                >
                    Đóng góp
                </b>{" "}
                không ?
            </Typography>
        </Template>
    );
};

export default Contribution;
