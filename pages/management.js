import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getCharactersClient } from "/apis/getCharactersClient";
import CharsTable from "/components/CharsTable";
import LoadingScreen from "/components/LoadingScreen";
import { PRIMARY_COLOR } from "/constants/style";
import Template from "/containers/Template";
import { AuthContext } from "/context/auth/auth.context";

const Contribution = () => {
    const {
        authState: { isAuthenticated, user },
    } = useContext(AuthContext);

    const router = useRouter();

    const [unactivatedChars, setUnactivatedChars] = useState([]);
    const [activatedChars, setActivatedChars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const [unactivatedCharsRes, activatedCharsRes] = await Promise.all([
                getCharactersClient().getAllUnactivateChars(),
                getCharactersClient().getAllChars(),
            ]);

            if (unactivatedCharsRes?.success) {
                setUnactivatedChars(unactivatedCharsRes.characters);
            }

            if (activatedCharsRes?.success) {
                setActivatedChars(activatedCharsRes.characters);
            }
            setLoading(false);
        };

        getData();
    }, []);

    return (
        <Template title="Quản lý từ | Hanzi Dict">
            {loading && <LoadingScreen />}
            {isAuthenticated ? (
                <div>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 3,
                            color: PRIMARY_COLOR,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        Các từ đã kích hoạt
                    </Typography>
                    <CharsTable data={[...activatedChars]} type="ACTIVATE" />
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 10,
                            mb: 3,
                            color: PRIMARY_COLOR,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        Các từ chưa kích hoạt
                    </Typography>
                    <CharsTable
                        data={[...unactivatedChars]}
                        type="DEACTIVATE"
                    />
                </div>
            ) : (
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                >
                    Vui lòng đăng nhập để thực hiện chức năng này
                </Typography>
            )}
        </Template>
    );
};

export default Contribution;
