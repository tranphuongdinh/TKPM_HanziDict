import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { getCharactersClient } from "../../apis/getCharactersClient";
import LoadingScreen from "../../components/LoadingScreen";

export default function CharsTable({ data, type }) {
    const [charsData, setCharsData] = useState(data || []);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setCharsData(data);
    }, [data]);

    const handleUpdate = async (id, action) => {
        setLoading(true);
        if (action === "DELETE") {
            const res = await getCharactersClient().deleteChar(id);
            if (res?.success) {
                toast.success("Xóa thành công");
                const newCharsData = charsData.filter((char) => char.id !== id);
                setCharsData(newCharsData);
            }
        }
        if (action === "ACTIVATE") {
            const res = await getCharactersClient().activateChar(id);
            if (res?.success) {
                toast.success("Kích hoạt thành công");
                const newCharsData = charsData.filter((char) => char.id !== id);
                setCharsData(newCharsData);
            }
        }

        if (action === "DEACTIVATE") {
            const res = await getCharactersClient().updateChar(id, {
                isActive: false,
            });
            if (res?.success) {
                toast.success("Hủy kích hoạt thành công");
                const newCharsData = charsData.filter((char) => char.id !== id);
                setCharsData(newCharsData);
            }
        }

        setLoading(false);
        router.reload();
    };

    return (
        <TableContainer component={Paper}>
            {loading && <LoadingScreen />}
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Chữ Hán</TableCell>
                        <TableCell align="center">Pinyin</TableCell>
                        <TableCell align="center">Thời điểm tải lên</TableCell>
                        <TableCell align="center">Trạng thái</TableCell>
                        <TableCell align="center">Thao tác</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {charsData.map((char) => (
                        <TableRow
                            key={uuidv4()}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="center">
                                {char.chineseName}
                            </TableCell>
                            <TableCell align="center">{char.pinyin}</TableCell>
                            <TableCell align="center">
                                {new Date(char.timeUpload).toLocaleString()}
                            </TableCell>
                            <TableCell align="center">
                                {char.isActive
                                    ? "Đã kích hoạt"
                                    : "Chưa kích hoạt"}
                            </TableCell>
                            <TableCell align="center">
                                {type === "ACTIVATE" ? (
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            handleUpdate(
                                                char._id,
                                                "DEACTIVATE"
                                            );
                                        }}
                                    >
                                        Hủy kích hoạt
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            handleUpdate(char._id, "ACTIVATE");
                                        }}
                                    >
                                        Kích hoạt
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    sx={{ ml: 2 }}
                                    onClick={() => {
                                        handleUpdate(char._id, "DELETE");
                                    }}
                                >
                                    Xóa
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
