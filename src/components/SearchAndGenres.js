import { React, useEffect, useState } from "react";
import InputSubscription from "../components/InputSubscription";
import { Typography, Grid, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function SearchAndGenres() {
  const location = useLocation();
  const [genresData, setGenresData] = useState([]);
  const { genresId, setGenresId } = useAuth();

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (location.pathname === `/movie`) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US`
          );
          setGenresData(res.data.genres);
        } else if (location.pathname === `/tv%20shows`) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/genre/tv/list?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US`
          );
          setGenresData(res.data.genres);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [location.pathname]);

  const handleClick = (e) => {
    if (e.target.value === "home") {
      setGenresId(null);
      // window.localStorage.setItem("genresId", null);
    } else {
      setGenresId(e.target.id);
      // window.localStorage.setItem("genresId", e.target.id.toString());
    }
  };
  return (
    <Grid container flexDirection="column" width="100%">
      {!genresId ? (
        <Grid item>
          <InputSubscription></InputSubscription>
        </Grid>
      ) : null}

      <Grid item>
        <Typography variant="h6" sx={{ margin: "10px 5px 10px 5px" }}>
          Genres
        </Typography>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item>
            <Button
              label="home"
              value="home"
              variant="outlined"
              onClick={handleClick}
              id="home"
              sx={{ margin: "5px", borderRadius: "5px" }}
            >
              Home
            </Button>
          </Grid>
          {genresData?.map((genre) => (
            <Grid item key={genre.id}>
              <Button
                label={genre.name}
                value={genre.name}
                variant="outlined"
                onClick={handleClick}
                id={genre.id}
                sx={{ margin: "5px", borderRadius: "5px" }}
              >
                {genre.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchAndGenres;
