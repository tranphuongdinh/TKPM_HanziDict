import React from "react";
import { useContext } from "react";
import UserProfile from "/components/UserProfile";
import { AuthContext } from "/context/auth/auth.context";
import Typography from "@mui/material/Typography";

const Account = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  return (
    <div>
      {isAuthenticated ? (
        <UserProfile />
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
          Vui lòng đăng nhập để thực hiện chức năng này
        </Typography>
      )}
    </div>
  );
};

export default Account;
