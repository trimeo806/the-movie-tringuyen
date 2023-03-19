import React from "react";
import { Typography, Grid } from "@mui/material";
// import InputSubscription from "./InputSubscription";

const styles = {
  paperContainer: {
    minHeight: "350px",
    backgroundColor: "#3399ff",
    margin: "auto",
    padding: "30px",
    maxWidth: "1300px",
    display: "flex",
  },
};

function TheMovieSearch() {
  return (
    <Grid
      container
      style={styles.paperContainer}
      direction={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "flex-start" }}
    >
      <Grid item margin="10px" xs={12}>
        {" "}
        <Typography variant="h2">Welcome.</Typography>
      </Grid>
      <Grid item margin="10px" xs={12}>
        {" "}
        <Typography variant="h4">
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
      </Grid>
      {/* <Grid item margin="30px 10px 50px 10px" xs={12}>
        {" "}
        <InputSubscription></InputSubscription>
      </Grid> */}
    </Grid>
  );
}

export default TheMovieSearch;
