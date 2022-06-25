import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function AuthForm({ handleShowAuth, show }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={show}
      onClose={() => {
        handleShowAuth(false);
      }}
    >
      <DialogTitle>Đăng nhập / Đăng kí vào hệ thống Hanzi Dict</DialogTitle>
      <DialogContent>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Đăng nhập" />
            <Tab label="Đăng kí" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SignInForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUpForm />
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleShowAuth(false);
          }}
        >
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
}
