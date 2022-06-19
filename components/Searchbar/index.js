import { useRouter } from "next/router";
import { useState } from "react";
import CInput from "react-composition-input";
import styles from "./styles.module.scss";

const Searchbar = () => {
    const [text, setText] = useState("");

    const router = useRouter();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/${text}`);
    };

    return (
        <div className={styles.wrapper}>
            <CInput onInputChange={handleChange} placeholder="Tìm kiếm từ..." />
            <button onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* <Dictaphone></Dictaphone> */}
        </div>
    );
};

export default Searchbar;
