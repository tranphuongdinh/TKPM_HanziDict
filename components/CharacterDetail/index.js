import Card from "@mui/material/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const CharacterDetail = ({ data }) => {
    const character = data.character;
    const [count, setCount] = useState(1);
    const [image, setImage] = useState({ src: character.img[0], index: 0 });

    const num = character.img.length;

    const changeImage = () => {
        setImage((state) => ({
            src: character.img[state.index],
            index: (state.index + 1) % num,
        }));
    };

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
            <h1>Chi tiết từ {character.chineseName}</h1>
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
                    <Image src={image.src} alt="" layout="fill" />
                </div>

                <div className={styles.explain}>
                    <span>Giải thích:</span>
                    <span> {character.explain}</span>
                </div>
            </Card>
        </div>
    );
};
