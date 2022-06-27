import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { getCharactersClient } from "/apis/getCharactersClient";

export default function SearchBar({ allChars, handleSearch }) {
    const [searchText, setSearchText] = useState("");
    const [prefix, setPrefix] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChangeText = async (e) => {
        setLoading(true);
        const text = e.target.value;
        const prefixFetch = await getCharactersClient().search(text);
        setPrefix(prefixFetch?.searchResults || []);
        setLoading(false);
    };

    const handleBlurText = async (e) => {
        setSearchText(e.target.value);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Autocomplete
                sx={{ width: "80%" }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={
                    prefix && prefix.length > 0
                        ? prefix.map(
                              (pre) => `${pre.simplified} - ${pre.pinyin}`
                          )
                        : []
                }
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Nhập từ khóa để tra cứu"
                        InputProps={{
                            ...params.InputProps,
                            type: "search",
                        }}
                        onChange={handleChangeText}
                        onBlur={handleBlurText}
                    />
                )}
            />

            <IconButton
                onClick={() => {
                    handleSearch(searchText, allChars);
                }}
                sx={{ ml: 2, width: 50, height: 50 }}
            >
                <SearchIcon
                    sx={{ fontWeight: "bold", width: "100%", height: "100%" }}
                />
            </IconButton>
        </Box>
    );
}
