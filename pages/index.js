import { Box, NoSsr } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import { PRIMARY_COLOR } from "../constants/style";
import { shuffle, stringToSlug } from "../utils/index";
import { getCharactersClient } from "/apis/getCharactersClient";
import Searchbar from "/components/Searchbar";
import Template from "/containers/Template";
const Home = ({ data }) => {
    const router = useRouter();

    const shuffleIndex = data?.characters?.length
        ? shuffle(Array.from(Array(data?.characters?.length).keys())).slice(
              0,
              10
          )
        : [];

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
                query: {
                    searchText,
                },
            });
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    useEffect(() => {
        if (!data?.characters?.length) {
            router.reload();
        }
    }, []);

    return (
        <Template title="Tra cứu | Hanzi Dict">
            <Searchbar
                allChars={data?.characters || []}
                handleSearch={handleSearch}
            ></Searchbar>

            <NoSsr>
                <Slider {...settings} style={{ margin: "40px 0 60px 0" }}>
                    {Array.from(Array(8).keys()).map((i) => (
                        <Box key={uuidv4()} className="slider-item-home">
                            <Image
                                priority
                                src={`/images/slider-image-${i + 1}.webp`}
                                layout="fill"
                                alt={`image-slider-${i}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 5,
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </NoSsr>

            {data?.characters && data?.characters?.length > 0 && (
                <>
                    {" "}
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: PRIMARY_COLOR,
                            mb: 3,
                            mt: 10,
                        }}
                        variant="h4"
                    >
                        CÁC TỪ PHỔ BIẾN
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {shuffleIndex.map((i) => {
                            const char = data.characters[i];
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    xl={3}
                                    key={uuidv4()}
                                >
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
                                            ":hover": {
                                                backgroundColor: "#006878",
                                                transition: "all 0.5s",
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    color: "#fff",
                                                }}
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
                </>
            )}
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
