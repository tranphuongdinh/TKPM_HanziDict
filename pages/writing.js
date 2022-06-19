import "react-canvas-paint/dist/index.css";
import "react-input-range/lib/css/index.css";
import CustomCanvas from "../components/CustomCanvas";
import Template from "../containers/Template";

const Writing = () => {
    return (
        <Template title="Writing | Hanzi Dict">
            <CustomCanvas />
        </Template>
    );
};

export default Writing;
