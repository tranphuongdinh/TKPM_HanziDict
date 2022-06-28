import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getCharactersClient } from "/apis/getCharactersClient";
import CharsTable from "/components/CharsTable";
import LoadingScreen from "/components/LoadingScreen";
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
        <Template title="Characters Management | Hanzi Dict">
            {loading && <LoadingScreen />}
            {isAuthenticated ? (
                <div>
                    <CharsTable data={[...activatedChars]} />
                    <CharsTable data={[...unactivatedChars]} />
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
