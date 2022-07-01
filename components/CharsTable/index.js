import { Button, Modal } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { getCharactersClient } from "../../apis/getCharactersClient";
import LoadingScreen from "../../components/LoadingScreen";
import EditCharForm from "/components/EditCharForm";

export default function CharsTable({ data, type }) {
    const [charsData, setCharsData] = useState(data || []);
    const [loading, setLoading] = useState(false);
    const [defaultChar, setDefaultChar] = useState(null);
    const router = useRouter();

    useEffect(() => {
        setCharsData(data);
    }, [data]);

    const handleUpdate = async (character, action, newCharacter = {}) => {
        try {
            const id = character._id;
            setLoading(true);
            if (action === "DELETE") {
                const res = await getCharactersClient().deleteChar(id);
                if (res?.success) {
                    toast.success("Xóa thành công");
                }
            }
            if (action === "ACTIVATE") {
                const res = await getCharactersClient().activateChar(id);
                if (res?.success) {
                    toast.success("Kích hoạt thành công");
                }
            }

            if (action === "DEACTIVATE") {
                const res = await getCharactersClient().updateChar(id, {
                    isActive: false,
                });
                if (res?.success) {
                    toast.success("Hủy kích hoạt thành công");
                }
            }

            if (action === "UPDATE") {
                const res = await getCharactersClient().updateChar(
                    id,
                    newCharacter
                );
                if (res?.success) {
                    toast.success("Cập nhật thành công");
                }
            }

            setTimeout(() => {
                router.reload();
            }, 1000);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error("Có lỗi xảy ra!");
        }
    };

    return (
        <TableContainer component={Paper}>
            {loading && <LoadingScreen />}
            <Modal
                open={!!defaultChar}
                onClose={() => {
                    setDefaultChar(null);
                }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <EditCharForm
                    defaultChar={{ ...defaultChar }}
                    handleUpdate={handleUpdate}
                    handleClose={() => {
                        setDefaultChar(null);
                    }}
                />
            </Modal>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Chữ Hán</TableCell>
                        <TableCell align="center">Pinyin</TableCell>
                        <TableCell align="center">Hình Ảnh</TableCell>
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
                                {char.img.map((image) => (
                                    <Image
                                        priority
                                        width={40}
                                        height={40}
                                        style={{
                                            margin: "0 10px",
                                            display: "inline-block",
                                        }}
                                        key={uuidv4()}
                                        src={image}
                                        alt={char.chineseName}
                                    />
                                ))}
                            </TableCell>
                            <TableCell align="center">
                                {new Date(char.timeUpload).toLocaleString()}
                            </TableCell>
                            <TableCell align="center">
                                {char.isActive
                                    ? "Đã kích hoạt"
                                    : "Chưa kích hoạt"}
                            </TableCell>
                            <TableCell align="center">
                                <Button
                                    sx={{ m: 1 }}
                                    variant="contained"
                                    onClick={() => {
                                        setDefaultChar(char);
                                    }}
                                    color="success"
                                >
                                    Chi tiết
                                </Button>
                                {type === "ACTIVATE" ? (
                                    <Button
                                        sx={{ m: 1 }}
                                        variant="contained"
                                        onClick={() => {
                                            handleUpdate(char, "DEACTIVATE");
                                        }}
                                    >
                                        Hủy kích hoạt
                                    </Button>
                                ) : (
                                    <Button
                                        sx={{ m: 1 }}
                                        variant="contained"
                                        onClick={() => {
                                            handleUpdate(char, "ACTIVATE");
                                        }}
                                    >
                                        Kích hoạt
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    sx={{ m: 1 }}
                                    color="error"
                                    onClick={() => {
                                        handleUpdate(char, "DELETE");
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
