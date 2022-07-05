import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PRIMARY_COLOR } from "../../constants/style";
import styles from "./styles.module.scss";
const { useRouter } = require("next/router");

export const CharacterDetail = ({ data }) => {
    const router = useRouter();
    const character = data?.character || {};
    const [image, setImage] = useState({
        src: data?.character?.img[0] || "",
        index: 0,
    });

    const num = character.img.length;

    const changeImage = () => {
        setImage((state) => ({
            src: character.img[state.index],
            index: (state.index + 1) % num,
        }));
    };

    useEffect(() => {
        if (!data?.character) {
            router.reload();
        }
    }, [data]);

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage();
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.wapper}>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                    fontWeight: "bold",
                    color: PRIMARY_COLOR,
                    textAlign: "center",
                    mb: 3,
                }}
            >
                Chi tiết từ {character.chineseName}
            </Typography>
            <Card className={styles.basicInfoWapper}>
                <div className={styles.chineseCharacter}>
                    {character.chineseName}
                </div>
                <div className={styles.basicInfo}>
                    <div className={styles.itemWapper}>
                        <div className={styles.item}>
                            <span>Pinyin:</span>
                            <span> {character.pinyin}</span>
                        </div>
                        <div className={styles.item}>
                            <span>Hán việt:</span>
                            <span> {character.sino}</span>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <span>Nghĩa:</span>
                        <span> {character.mean}</span>
                    </div>
                    <div className={styles.item}>
                        <span>Nghĩa mở rộng:</span>
                        <span> {character.deepMean}</span>
                    </div>
                </div>
            </Card>
            <Card className={styles.expandInfoWapper}>
                <div className={styles.animation}>
                    <Image
                        src={image.src}
                        alt={`${character.chineseName}-image`}
                        layout="fill"
                        priority
                        loading="eager"
                    />
                </div>

                <div className={styles.explain}>
                    <span>Giải thích:</span>
                    <span> {character.explain}</span>
                </div>
            </Card>
        </div>
    );
};
