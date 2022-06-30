import { PhotoCamera } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import GestureIcon from "@mui/icons-material/Gesture";
import SearchIcon from "@mui/icons-material/Search";
import UndoIcon from "@mui/icons-material/Undo";
import { Card, IconButton, Input, Modal } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { toast } from "react-toastify";
import Tesseract from "tesseract.js";
import styles from "./styles.module.scss";
import LoadingScreen from "/components/LoadingScreen";
import { PRIMARY_COLOR } from "/constants/style";

const defaultProps = {
    onChange: null,
    loadTimeOffset: 5,
    lazyRadius: 0,
    brushRadius: 3,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    hideGrid: false,
    canvasWidth: 250,
    canvasHeight: 200,
    disabled: false,
    imgSrc: "",
    immediateLoading: false,
    hideInterface: false,
    gridSizeX: 25,
    gridSizeY: 25,
    gridLineWidth: 0.5,
    hideGridX: false,
    hideGridY: false,
    enablePanAndZoom: false,
    mouseZoomFactor: 0.01,
    zoomExtents: { min: 0.33, max: 3 },
};

export default function SearchBar({ allChars, handleSearch }) {
    let saveableCanvas = null;
    const [searchText, setSearchText] = useState("");
    const [outputImage, setOutputImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleRecognize = (dataUrl) => {
        if (dataUrl) {
            setLoading(true);
            Tesseract.recognize(dataUrl, "chi_sim")
                .catch((err) => {
                    toast.error(`Có lỗi xảy ra khi nhận diện ảnh: ${err}`);
                    setLoading(false);
                })
                .then((result) => {
                    const text = result?.data?.text || "";
                    setSearchText(text[0]);
                    setOutputImage("");
                    setLoading(false);
                });
        }
    };

    const handleChangeText = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <Box className={styles.wrapper}>
            {loading && <LoadingScreen />}
            <Autocomplete
                className={styles.autoComplete}
                value={searchText}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={
                    allChars?.length > 0
                        ? allChars.map((char) => {
                              return `${char.chineseName} - ${char.pinyin}`;
                          })
                        : []
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Nhập từ khóa để tra cứu"
                        InputProps={{
                            ...params.InputProps,
                            type: "search",
                        }}
                        onChange={handleChangeText}
                        onBlur={handleChangeText}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                handleSearch(searchText, allChars);
                            }
                        }}
                    />
                )}
            />

            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Card sx={{ p: 2 }}>
                    <CanvasDraw
                        ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
                        {...defaultProps}
                        onChange={() => {
                            setOutputImage(saveableCanvas.getDataURL());
                        }}
                    />

                    <Box sx={{ display: "flex", alignItems: "center", pt: 2 }}>
                        <IconButton
                            onClick={() => {
                                saveableCanvas.undo();
                            }}
                        >
                            <UndoIcon />
                        </IconButton>

                        <IconButton
                            onClick={() => {
                                saveableCanvas.clear();
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>

                        <IconButton
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            <ClearIcon />
                        </IconButton>

                        <IconButton
                            onClick={() => {
                                setShowModal(false);
                                handleRecognize(outputImage);
                            }}
                            sx={{
                                marginLeft: "auto",
                            }}
                        >
                            <CheckIcon sx={{ color: PRIMARY_COLOR }} />
                        </IconButton>
                    </Box>
                </Card>
            </Modal>

            <Box sx={{ minWidth: 140 }}>
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <GestureIcon />
                </IconButton>

                <label htmlFor="icon-button-file">
                    <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={(e) => {
                            if (e?.target?.files[0]) {
                                const dataUrl = URL.createObjectURL(
                                    e.target.files[0]
                                );
                                handleRecognize(dataUrl);
                            }
                        }}
                        sx={{ display: "none" }}
                    />
                    <IconButton aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>

                <IconButton
                    onClick={() => {
                        if (!searchText) {
                            toast.info("Vui lòng nhập kí tự cần tra cứu");
                        } else {
                            searchText && handleSearch(searchText, allChars);
                        }
                    }}
                    sx={{ ml: 2, width: 50, height: 50 }}
                >
                    <SearchIcon
                        sx={{
                            fontWeight: "bold",
                            width: "100%",
                            height: "100%",
                            color: PRIMARY_COLOR,
                        }}
                    />
                </IconButton>
            </Box>
        </Box>
    );
}
