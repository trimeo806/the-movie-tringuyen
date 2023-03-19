import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Menu,
  Tooltip,
  Avatar,
  MenuItem,
  Grid,
} from "@mui/material";
import useAuth from "../hooks/useAuth";
import HeaderForLaptop from "./HeaderForLaptop";
import HeaderForMobile from "./HeaderForMobile";
import { useLocation, useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Open nav menu when responsive
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(event);
    console.log("clicked");
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    console.log(e.target.value);
    if (e.target.value?.toLowerCase() === "logout") {
      console.log(location);
      auth.logout(() => {
        navigate("/", {
          state: { from: location },
          replace: true,
        });
      });
    }
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ paddingLeft: 1, paddingRight: 1, backgroundColor: "#032541" }}
      >
        {/* <Container > */}
        <Toolbar disableGutters>
          {/* Header for laptop */}
          <HeaderForLaptop></HeaderForLaptop>

          {/* Header for mobile */}
          <HeaderForMobile></HeaderForMobile>

          {/* Header for user (on laptop and mobile) */}
          <Grid
            container
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {isAuthenticated ? (
              <>
                <Tooltip title="Open settings">
                  <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.gravatar.com/avatar/dac34ce2420e57673a1dcb16f099d5a0.jpg?s=32"
                    />
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  keepMounted
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={handleCloseUserMenu}
                      value={setting}
                    >
                      <Button textalign="center" value={setting}>
                        {setting}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                sx={{
                  color: "white",
                  width: "auto",
                  height: "52px",
                }}
                onClick={() =>
                  navigate("/login", {
                    state: { from: location },
                    replace: true,
                  })
                }
              >
                Log in
              </Button>
            )}
          </Grid>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
