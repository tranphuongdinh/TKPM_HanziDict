import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import AuthForm from "../../components/AuthForm";
import { AuthContext } from "../../context/auth/auth.context";
import logo from "../../public/images/logocute.png";
import styles from "./styles.module.scss";

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const {
        authState: { isAuthenticated },
        authDispatch,
    } = React.useContext(AuthContext);

    const [showAuth, setShowAuth] = React.useState(false);

    const handleShowAuth = (show) => {
        setShowAuth(show);
    };

    const router = useRouter();

    const pages = [
        {
            label: "Tra cứu",
            url: "/",
        },
        {
            label: "Luyện viết",
            url: "/writing",
        },
        { label: "Đóng góp", url: "/contribution" },
    ];
    const settings = [
        {
            label: "Account",
            event: () => {
                router.push("/account");
            },
        },
        {
            label: "Logout",
            event: () => {
                authDispatch({
                    type: "LOGOUT",
                });
                setShowAuth(false);
                window.location.href = "/";
            },
        },
    ];

    return (
        <AppBar position="static" style={{ backgroundColor: "#0091a7" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Image src={logo} width={40} height={40} alt="logo" />
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <Link href={page.url} key={page.label}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            {page.label}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Image src={logo} width={40} height={40} alt="logo" />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            ml: 2,
                        }}
                    >
                        {pages.map((page) => (
                            <Link href={page.url} key={page.label}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        mr: 2,
                                        color: "white",
                                        display: "block",
                                        position: "relative",
                                    }}
                                    className={
                                        router.asPath === page.url
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    {page.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {isAuthenticated ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography
                                            textAlign="center"
                                            onClick={setting.event}
                                        >
                                            {setting.label}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mr: 2 }}
                                onClick={() => {
                                    handleShowAuth(true);
                                }}
                            >
                                Đăng nhập
                            </Button>
                            {showAuth && (
                                <AuthForm
                                    handleShowAuth={handleShowAuth}
                                    show={showAuth}
                                ></AuthForm>
                            )}
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
