import React from "react";
import { ImageList, ImageListItem, Grid, Typography } from "@mui/material";
import PCard from "./PCard";

function PGridList({ style, data, title }) {
  return (
    <Grid
      container
      style={style}
      maxwidth={1300}
      flexdirection={{ xs: "column", lg: "row" }}
      justifycontent={{ xs: "center", lg: "flex-start" }}
    >
      <Grid
        item
        // maxwidth={1300}
        flexdirection={{ xs: "column", lg: "row" }}
        justifycontent={{ xs: "center", lg: "flex-start" }}
      >
        {" "}
        <Typography variant="h4" sx={{ marginTop: "10px", marginLeft: "10px" }}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        // maxwidth={1300}
        flexdirection={{ xs: "column", lg: "row" }}
        justifycontent={{ xs: "center", lg: "flex-start" }}
        sx={{ overFlow: "auto" }}
      >
        <ImageList
          maxwidth={1300}
          flexdirection={{ xs: "column", lg: "row" }}
          justifycontent={{ xs: "center", lg: "flex-start" }}
          sx={{
            gridAutoFlow: "column",
            maxWidth: "1300px",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(170px,170px)) !important",
            gridAutoColumns: "minmax(170px, auto)",
            marginBottom: "0",
            overflow: "auto",
          }}
        >
          {data
            ? data.map((data) => (
                <ImageListItem key={data.id}>
                  <PCard data={data} />
                </ImageListItem>
              ))
            : ""}
          {/* Hoi cho nay lam sao chinh duoc? */}
        </ImageList>
      </Grid>
    </Grid>
  );
}

export default PGridList;
