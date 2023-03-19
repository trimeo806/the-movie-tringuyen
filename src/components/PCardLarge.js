import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate, useLocation } from "react-router-dom";

export default function PCardLarge({ show }) {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  return (
    <Card
      sx={{ margin: 1.05 }}
      onClick={() => {
        navigate(`${location.pathname}/${show.id}`, {
          // state: { from: location, name: location.state?.name },
          state: { name: location.state?.name },
          replace: true,
        });
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={`https://www.themoviedb.org/t/p/w220_and_h330_face${show["poster_path"]}`}
          // image={movie["poster_path"]}
          alt={show.name ? show.name : show.title}
        />
        <CardContent>
          <Grid container sx={{ minHeight: "150px" }}>
            <Grid item>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ marginBottom: 0, height: "120px" }}
              >
                {show.name ? show.name : show.title}
              </Typography>
            </Grid>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
                width: "100%",
              }}
            >
              <GradeIcon
                sx={{ fontSize: "15px", color: "red", marginRight: 0.5 }}
              />
              <Typography>{show["vote_average"]}</Typography>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Typography sx={{ marginLeft: 1 }}>
                {`${show["vote_count"]} Reviews`}
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                display="flex"
                alignItems="center"
                marginTop="5px"
              >
                <CalendarMonthIcon></CalendarMonthIcon>
                <Typography variant="body2" color="text.secondary">
                  {show["release_date"]}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
