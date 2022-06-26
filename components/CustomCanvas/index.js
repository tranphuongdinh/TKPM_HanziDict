import { useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { HexColorPicker } from "react-colorful";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styles from "./styles.module.scss";

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

  useEffect(() => {
    const rawData = localStorage.getItem("savedDrawing");
    if (rawData) {
      const data = JSON.parse(rawData);
      setSaveableCanvas(data.lines);
      setCanvasProps({ ...canvasProps, ...data });
    }
    const windowWidth = window.innerWidth;
    setCanvasWidth(windowWidth * 0.7);

    if (windowWidth > 800) {
      setCanvasHeight(400);
    } else {
      setCanvasHeight(200);
    }
  }, []);

  return (
    <div className={styles.canvasWrapper}>
      <CanvasDraw
        ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
        {...defaultProps}
        brushRadius={lineWidth}
        canvasWidth="100%"
        canvasHeight={canvasHeight}
        brushColor={brushColor}
      />
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
    </div>
  );
};

export default CustomCanvas;
