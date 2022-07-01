import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import UndoIcon from "@mui/icons-material/Undo";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import { saveAs } from "file-saver";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { HexColorPicker } from "react-colorful";
import styles from "./styles.module.scss";
const CustomCanvas = () => {
    const [writeChar, setWriteChar] = useState("");
    const defaultProps = {
        onChange: null,
        loadTimeOffset: 5,
        lazyRadius: 0,
        brushRadius: 3,
        brushColor: "#444",
        catenaryColor: "#0a0302",
        gridColor: "rgba(150,150,150,0.17)",
        hideGrid: false,
        canvasWidth: 800,
        canvasHeight: 400,
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
    const [saveableCanvas, setSaveableCanvas] = useState(null);
    const [canvasProps, setCanvasProps] = useState(defaultProps);
    const [lineWidth, setLineWidth] = useState(2);
    const [canvasWidth, setCanvasWidth] = useState(800);
    const [canvasHeight, setCanvasHeight] = useState(400);
    const [brushColor, setBrushColor] = useState("#444");
    const [outputImage, setOutputImage] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapperWidth = wrapperRef.current.clientWidth;

        setCanvasWidth(wrapperWidth - 40);

        if (wrapperWidth > 800) {
            setCanvasHeight(400);
        } else {
            setCanvasHeight(200);
        }
    }, []);

    return (
        <div className={styles.canvasWrapper} ref={wrapperRef}>
            <TextField
                id="outlined-basic"
                label="Nhập từ để viết"
                variant="outlined"
                value={writeChar}
                sx={{ background: "fff", mb: 2 }}
                onChange={(e) => {
                    setWriteChar(e.target.value);
                }}
            />
            {writeChar && <div className={styles.charToWrite}>{writeChar}</div>}
            <CanvasDraw
                ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
                {...defaultProps}
                brushRadius={lineWidth}
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                brushColor={brushColor}
                onChange={() => {
                    setOutputImage(saveableCanvas.getDataURL());
                }}
            />
            <div className={styles.canvasSupport}>
                <Card
                    className={styles.toolCard}
                    variant="outlined"
                    // sx={{ minWidth: "50%" }}
                >
                    <div className={styles.tools}>
                        <div className={styles.buttons}>
                            <Button
                                variant="contained"
                                className="btnPrimary"
                                startIcon={<SaveIcon />}
                                onClick={() => {
                                    saveAs(
                                        saveableCanvas.getDataURL(),
                                        "image.png"
                                    );
                                }}
                            >
                                Lưu
                            </Button>
                            <Button
                                variant="contained"
                                className="btnPrimary"
                                startIcon={<AutoFixNormalIcon />}
                                onClick={() => {
                                    saveableCanvas.eraseAll();
                                }}
                            >
                                Xóa
                            </Button>
                            <Button
                                startIcon={<UndoIcon />}
                                variant="contained"
                                className="btnPrimary"
                                onClick={() => {
                                    saveableCanvas.undo();
                                }}
                            >
                                Quay lại
                            </Button>

                            <Button
                                variant="contained"
                                className="btnPrimary"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                    saveableCanvas.clear();
                                    setOutputImage("");
                                }}
                            >
                                Đặt lại
                            </Button>
                        </div>

                        <div className={styles.sliderItem}>
                            <span
                                className={styles.label}
                                style={{ marginBottom: 0, marginTop: 30 }}
                            >
                                Độ dày nét vẽ{" "}
                            </span>
                            <Box sx={{ width: "100%" }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs>
                                        <Slider
                                            value={
                                                typeof lineWidth === "number"
                                                    ? lineWidth
                                                    : 0
                                            }
                                            onChange={(e, value) => {
                                                setLineWidth(value);
                                            }}
                                            onBlur={() => {
                                                if (lineWidth < 3) {
                                                    setLineWidth(3);
                                                } else if (lineWidth > 20) {
                                                    setLineWidth(20);
                                                }
                                            }}
                                            aria-labelledby="input-slider"
                                            min={3}
                                            max={20}
                                            step={1}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Input
                                            sx={{ maxWidth: 40 }}
                                            value={lineWidth}
                                            onKeyUp={(e) => {
                                                if (lineWidth > 20) {
                                                    setLineWidth(20);
                                                }
                                                if (lineWidth < 3) {
                                                    setLineWidth(3);
                                                }
                                            }}
                                            onChange={(e) => {
                                                let newLineWidth = parseInt(
                                                    e.target.value
                                                );
                                                if (newLineWidth > 20) {
                                                    newLineWidth = 20;
                                                }
                                                if (newLineWidth < 3) {
                                                    newLineWidth = 3;
                                                }
                                                setLineWidth(newLineWidth);
                                            }}
                                            onBlur={() => {
                                                if (lineWidth < 3) {
                                                    setLineWidth(3);
                                                } else if (lineWidth > 20) {
                                                    setLineWidth(20);
                                                }
                                            }}
                                            inputProps={{
                                                step: 1,
                                                min: 3,
                                                max: 20,
                                                type: "number",
                                                "aria-labelledby":
                                                    "input-slider",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <div className={styles.sliderItem}>
                            <span
                                className={styles.label}
                                style={{ marginBottom: 5 }}
                            >
                                Màu nét vẽ
                            </span>
                            <div className={styles.colorPicker}>
                                <HexColorPicker
                                    color={brushColor}
                                    onChange={(value) => setBrushColor(value)}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    className={styles.outputImage}
                    sx={{ position: "relative" }}
                    variant="outlined"
                    //   sx={{ minWidth: "50%" }}
                >
                    {outputImage && (
                        <Image src={outputImage} layout="fill" priority />
                    )}
                </Card>
            </div>
        </div>
    );
};

export default CustomCanvas;
