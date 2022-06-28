import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CharsTable({ data }) {
    const [charsData, setCharsData] = useState(data || []);

    useEffect(() => {
        setCharsData(data);
    }, [data]);

    return (
        <TableContainer component={Paper}>
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
                                <Button variant="contained">Kích hoạt</Button>
                                <Button variant="contained">Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
