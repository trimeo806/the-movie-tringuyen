import React from "react";
import SearchAndGenres from "../components/SearchAndGenres";
import { Outlet } from "react-router-dom";
import { Grid, Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const styles = {
  ListOfMoviePageStyles: {
    minHeight: "200px",
    margin: "auto",
    marginTop: "10px",
    width: "100%",
    display: "flex",
  },
};

function PagesLayout() {
  const location = useLocation();
  // console.log(location);
  return (
    <Grid container style={styles.ListOfMoviePageStyles} flexDirection="row">
      <Grid item display="flex" alignSelf="flex-start" sx={{ width: "100%" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            TMDB
          </Link>
          <Typography color="text.primary">
            {location.state?.name ? location.state?.name : ""}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item display="flex" alignSelf="flex-start" sx={{ width: "100%" }}>
        <SearchAndGenres></SearchAndGenres>
      </Grid>

      <Outlet></Outlet>
    </Grid>
  );
}

export default PagesLayout;
