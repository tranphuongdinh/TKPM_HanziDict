import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useContext } from "react";
import ContributionForm from "/components/ContributionForm";
import { PRIMARY_COLOR } from "/constants/style";
import Template from "/containers/Template";
import { AuthContext } from "/context/auth/auth.context";
const Contribution = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  const router = useRouter();

  const { searchText = "" } = router.query;

  const defaultChar = { pinyin: searchText, chineseName: searchText };

  return (
    <Template title="Đóng góp | Hanzi Dict">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          fontWeight: "bold",
          color: PRIMARY_COLOR,
          textAlign: "center",
          mb: 2,
        }}
      >
        Đóng góp chiết tự{" "}
      </Typography>{" "}
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          fontWeight: "italic",
          color: "black",
          textAlign: "center",
          mb: 2,
          fontSize: "14px",
        }}
      >
        Kiến thức là để sẻ chia. Sẽ thật tuyệt vời và đầy tự hào khi Hán tự của
        bạn xuất hiện trên trang chủ của Hanzi Dict. Hãy đóng góp Hán tự yêu
        thích theo cách riêng của bạn nhé!
      </Typography>{" "}
      {isAuthenticated ? (
        <ContributionForm defaultChar={{ ...defaultChar }}> </ContributionForm>
      ) : (
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            height: "30vw",
            marginTop: 5,
          }}
        >
          Vui lòng đăng nhập để thực hiện chức năng này{" "}
        </Typography>
      )}{" "}
    </Template>
  );
};

export default Contribution;
