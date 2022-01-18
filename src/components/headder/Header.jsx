import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f7f7f7",
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "20%",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: "#1D498D",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
function Header(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar>
                    <img
                        style={{ marginLeft: "5%" }}
                        alt="logo"
                        src="https://mudda.in/static/media/muddaLogoHeader.78fb945d.svg"
                    />
                    <Box sx={{ flexGrow: 2 }} />
                    <Box
                        sx={{ display: { xs: 5, md: "flex" } }}
                        style={{ color: "#707070",width:"35%" }}
                    >
                        <IconButton
                            size="large"
                            style={{ display: "flex", flexDirection: "column", color: "#1D498D",borderBottom:"2px solid #1d498d",borderRadius:"0px" }}
                        >
                            <HomeIcon />
                            <Typography style={{ fontSize: "12px" }}> Home </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            style={{ display: "flex", flexDirection: "column",borderRadius:"0px",marginLeft:"5%" }}
                        >
                            <ExploreOutlinedIcon />
                            <Typography style={{ fontSize: "12px" }}> Trending </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            style={{ display: "flex", flexDirection: "column",borderRadius:"0px",marginLeft:"5%" }}
                        >
                            <GroupsOutlinedIcon />
                            <Typography style={{ fontSize: "12px" }}> Groups </Typography>
                        </IconButton>

                        <IconButton
                            size="large"
                            style={{ display: "flex", flexDirection: "column",borderRadius:"0px",marginLeft:"5%" }}
                        >
                            <Badge
                                badgeContent={4}
                                color="error"
                                style={{ marginBottom: "5%" }}
                            >
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                            <Typography style={{ fontSize: "12px" }}>
                                Notification
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            style={{ display: "flex", flexDirection: "column",borderRadius:"0px",marginLeft:"5%" }}
                        >
                            <PermIdentityOutlinedIcon />
                            <Typography style={{ fontSize: "12px" }}> Profile </Typography>
                        </IconButton>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            style={{ color: "#a2a2a2" }}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            color: "#707070",
                        }}
                    >
                        <MenuIcon />
                        <Typography style={{ fontSize: "12px" }}> Menu </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
