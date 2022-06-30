import Typography from "@mui/material/Typography";
import { useContext } from "react";
import UserProfile from "/components/UserProfile";
import Template from "/containers/Template";
import { AuthContext } from "/context/auth/auth.context";

const Account = () => {
    const {
        authState: { isAuthenticated },
    } = useContext(AuthContext);
    return (
        <Template title="Tài khoản | Hanzi Dict">
            {isAuthenticated ? (
                <UserProfile />
            ) : (
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        height: "30vw",
                        marginTop: 5,
                    }}
                >
                    Vui lòng đăng nhập để thực hiện chức năng này
                </Typography>
            )}
        </Template>
    );
};

export default Account;
