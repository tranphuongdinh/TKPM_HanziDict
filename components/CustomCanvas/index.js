import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { HexColorPicker } from "react-colorful";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styles from "./styles.module.scss";
import Card from "@mui/material/Card";

const CustomCanvas = () => {
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
    const rawData = localStorage.getItem("savedDrawing");
    if (rawData) {
      const data = JSON.parse(rawData);
      setSaveableCanvas(data.lines);
      setCanvasProps({ ...canvasProps, ...data });
    }
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
      <CanvasDraw
        ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
        {...defaultProps}
        brushRadius={lineWidth}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushColor={brushColor}
      />
      <div className={styles.canvasSupport}>
        <Card
          className={styles.toolCard}
          variant="outlined"
          // sx={{ minWidth: "50%" }}
        >
          <div className={styles.tools}>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  localStorage.setItem(
                    "savedDrawing",
                    saveableCanvas.getSaveData()
                  );
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  saveableCanvas.eraseAll();
                }}
              >
                Erase
              </button>
              <button
                onClick={() => {
                  saveableCanvas.undo();
                }}
              >
                Undo
              </button>
              <button
                onClick={() => {
                  console.log(saveableCanvas.getDataURL());
                  setOutputImage(saveableCanvas.getDataURL());
                  alert("DataURL written to console");
                }}
              >
                GetDataURL
              </button>
            </div>

            <div className={styles.sliderItem}>
              <span className={styles.label}>Line width: </span>
              <InputRange
                minValue={3}
                value={lineWidth}
                maxValue={20}
                onChange={(value) => setLineWidth(value)}
              />
            </div>
            <div className={styles.sliderItem}>
              <span className={styles.label}>Brush color: </span>
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
          variant="outlined"
          //   sx={{ minWidth: "50%" }}
        >
          {outputImage && <Image src={outputImage} width={400} height={200} />}{" "}
        </Card>
      </div>
    </div>
  );
};

export default CustomCanvas;
