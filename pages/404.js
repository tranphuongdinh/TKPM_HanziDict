import Link from "next/link";
import Template from "/containers/Template";

export default function PageNotFound() {
    return (
        <Template title="Không tìm thấy trang | Hanzi Dict">
            <>
                Trang không tồn tại, quay về{" "}
                <Link href="/">
                    <b>trang chủ</b>
                </Link>
            </>
        </Template>
    );
}
