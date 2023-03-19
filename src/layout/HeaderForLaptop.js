import React from "react";
import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";

const pages = ["Movie", "TV Shows", "People", "More"];

function HeaderForLaptop() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setGenresId } = useAuth();
  // console.log(location);

  const handleCloseNavMenu = (e) => {
    setGenresId(null);
    let pathName = e.target.value?.toLowerCase();
    if (pathName) {
      navigate(`/${pathName}`, {
        state: { from: location, name: e.target.value },
      });
    }
  };

  return (
    <>
      <Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Box
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, width: "100%" }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            value={page}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default HeaderForLaptop;
