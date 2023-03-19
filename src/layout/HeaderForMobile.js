import * as React from "react";
import { Box, IconButton, Menu, Button, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";
const pages = ["Movie", "TV Shows", "People", "More"];

function HeaderForMobile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Open nav menu when responsive
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    // console.log(e.target.value);
    //Cho nay console.log cua main layout thi moi thay duoc cai state from ben duoi, vi render la render vao main layout giu nguyen
    // console.log(location);
    //Cho nay la do slash toi "/" ma cai nay la no chua main layout nen phai ra main layout thi moi useLocation nay duoc
    let pathName = e.target.value?.toLowerCase();
    if (pathName) {
      navigate(`/${pathName}`, {
        state: { from: location, name: e.target.value },
      });
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
        <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu} value={page}>
              <Button onClick={handleCloseNavMenu} value={page}>
                {page}
              </Button>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default HeaderForMobile;
