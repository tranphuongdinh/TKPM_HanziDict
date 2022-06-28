import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { PRIMARY_COLOR } from "../constants/style";
import { getCharactersClient } from "/apis/getCharactersClient";
import Searchbar from "/components/Searchbar";
import Template from "/containers/Template";

const Home = ({ data, popularCharacters }) => {
    const router = useRouter();
    const handleSearch = async (searchText, allChars) => {
        const [chineseName, pinyin] = searchText.split(" - ");

        const searchChar = allChars.characters.filter(
            (char) =>
                char.chineseName.includes(chineseName) ||
                char.pinyin.includes(pinyin)
        )[0];

        if (searchChar) {
            router.push(`/characters/${searchChar._id}`);
        } else {
            router.push({
                pathname: "/characters/not-found",
                query: {
                    chineseName,
                    pinyin,
                },
            });
        }
    };

    return (
        <Template title="Trang chủ | Hanzi Dict">
            <Searchbar allChars={data} handleSearch={handleSearch}></Searchbar>

            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: PRIMARY_COLOR,
                    my: 3,
                }}
                variant="h4"
            >
                CÁC TỪ PHỔ BIẾN
            </Typography>
            <Grid container spacing={2}>
                {popularCharacters.map((char, index) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={uuidv4()}>
                        <Card
                            onClick={() => {
                                handleSearch(
                                    `${char.simplified} - ${char.pinyin}`,
                                    data
                                );
                            }}
                            sx={{
                                minWidth: 275,
                                height: "100%",
                                backgroundColor: PRIMARY_COLOR,
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14, color: "#fff" }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {char.pinyin}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    component="div"
                                    sx={{
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    {char.simplified}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Template>
    );
};

export async function getServerSideProps(ctx) {
    try {
        const data = await getCharactersClient().getAllChars();
        const popularCharacters = await getCharactersClient().getCommonChars();
        return {
            props: {
                data: data || [],
                popularCharacters: popularCharacters.characters,
            },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                data: {
                    success: false,
                    characters: [],
                    popularCharacters: [],
                },
            },
        };
    }
}

export default Home;
