import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: "100%",
        maxHeight: 600,
        background: "transparent",
        border: "none",
        boxShadow: "none",
        overflow: "visible",
        borderRadius: "10px",
        marginLeft: "10px",
      }}
      onClick={() => {
        navigate(`movie/${data.id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={`https://www.themoviedb.org/t/p/w220_and_h330_face${data["poster_path"]}`}
          alt="green iguana"
          sx={{ backgroundSize: "cover", borderRadius: "10px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ height: "100%" }}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            March 17, 2023
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
