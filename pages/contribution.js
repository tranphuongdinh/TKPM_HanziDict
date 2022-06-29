import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useContext } from "react";
import ContributionForm from "/components/ContributionForm";
import Template from "/containers/Template";
import { AuthContext } from "/context/auth/auth.context";
const Contribution = () => {
    const {
        authState: { isAuthenticated },
    } = useContext(AuthContext);

    const router = useRouter();

    const { chineseName = "", pinyin = "" } = router.query;

    const defaultChar = { chineseName, pinyin };

    return ( <
        Template title = "Contribution | Hanzi Dict" >
        <
        Typography gutterBottom variant = "h5"
        component = "div"
        sx = {
            { fontWeight: "bold" } } >
        Đóng góp chiết tự <
        /Typography> {
            isAuthenticated ? ( <
                ContributionForm defaultChar = {
                    {...defaultChar } } > < /ContributionForm>
            ) : ( <
                Typography variant = "h6"
                component = "div"
                sx = {
                    {
                        fontWeight: "bold",
                        textAlign: "center",
                        height: "30vw",
                        marginTop: 5,
                    }
                } >
                Vui lòng đăng nhập để thực hiện chức năng này <
                /Typography>
            )
        } <
        /Template>
    );
};

export default Contribution;