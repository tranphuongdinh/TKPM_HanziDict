import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { PRIMARY_COLOR } from "../constants/style";
import { shuffle, stringToSlug } from "../utils/index";
import { getCharactersClient } from "/apis/getCharactersClient";
import Searchbar from "/components/Searchbar";
import Template from "/containers/Template";

const Home = ({ data }) => {
    const router = useRouter();

    const shuffleIndex = shuffle(
        Array.from(Array(data.characters.length).keys())
    ).slice(0, 10);

    const handleSearch = async (searchText, allChars) => {
        const searchChar = allChars.filter((char) => {
            const mergedString = `${char.chineseName} - ${stringToSlug(
                char.pinyin
            )}`;
            return mergedString.includes(stringToSlug(searchText));
        })[0];

        if (searchChar) {
            router.push(`/characters/${searchChar._id}`);
        } else {
            router.push({
                pathname: "/characters/not-found",
            });
        }
    };

    return (
        <Template title="Trang chủ | Hanzi Dict">
            <Searchbar
                allChars={data?.characters || []}
                handleSearch={handleSearch}
            ></Searchbar>

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
                {shuffleIndex.map((i) => {
                    const char = data.characters[i];
                    return (
                        <Grid item xs={12} sm={6} md={4} xl={3} key={uuidv4()}>
                            <Card
                                onClick={() => {
                                    handleSearch(
                                        `${char.chineseName} - ${char.pinyin}`,
                                        data.characters
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
                                        {char.chineseName}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Template>
    );
};

export async function getServerSideProps(ctx) {
    try {
        const data = await getCharactersClient().getAllChars();
        return {
            props: {
                data: data || [],
            },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                data: {
                    success: false,
                    characters: [],
                },
            },
        };
    }
}

export default Home;
