import React from "react";
import { Stack, Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainFooter from "./MainFooter";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header></Header>

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter></MainFooter>
    </Stack>
  );
}

export default MainLayout;
