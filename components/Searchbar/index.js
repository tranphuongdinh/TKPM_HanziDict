import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SearchBar({ allChars, handleSearch }) {
    console.log(allChars);
    const [searchText, setSearchText] = useState("");

    const handleChangeText = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Autocomplete
                sx={{ width: "80%" }}
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
                    sx={{ fontWeight: "bold", width: "100%", height: "100%" }}
                />
            </IconButton>
        </Box>
    );
}
