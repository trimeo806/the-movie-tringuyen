import { React, useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import { useLocation } from "react-router-dom";
import PCardLarge from "../components/PCardLarge";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function ListOfMoviePage() {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState("1");
  const location = useLocation();
  console.log(location);
  const { genresId, setGenresId } = useAuth();
  //Get data
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (
          location.pathname === `/movie` &&
          location.search === "" &&
          !genresId
        ) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=${page}`
          );
          setShows(res.data.results);
          // console.log(res.data.results);
        } else if (
          location.pathname === `/tv%20shows` &&
          location.search === "" &&
          !genresId
        ) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=${page}`
          );
          setShows(res.data.results);
        } else if (
          location.pathname === `/movie` &&
          location.search &&
          !genresId
        ) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie${location.search}&api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=${page}&include_adult=false`
          );
          setShows(res.data.results);
        } else if (
          location.pathname === `/tv%20shows` &&
          location.search &&
          !genresId
        ) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/search/tv${location.search}&api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=${page}&include_adult=false`
          );
          setShows(res.data.results);
        } else if (
          location.pathname === `/movie` &&
          location.search === "" &&
          genresId
        ) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genresId}`
          );
          setShows(res.data.results);
        } else if (
          location.pathname === `/tv%20shows` &&
          location.search === "" &&
          genresId
        ) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genresId}`
          );
          setShows(res.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [location.pathname, location.search, page, genresId, setGenresId]);

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      width="100%"
      sx={{ margin: "auto" }}
      maxWidth={1300}
      direction={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "flex-start" }}
    >
      <Grid item display="flex" width="100%" alignSelf="center">
        <Grid container justifyContent={{ xs: "center", sm: "flex-start" }}>
          {" "}
          {shows
            ? shows.map((show) => (
                <Grid key={show.id} item xs={12} sm={6} md={3}>
                  <PCardLarge show={show}></PCardLarge>
                </Grid>
              ))
            : ""}
        </Grid>
      </Grid>

      <Grid
        item
        display="flex"
        width="100%"
        alignSelf="center"
        justifyContent="center"
      >
        <Pagination
          count={10}
          color="primary"
          onClick={(e) => {
            // console.log(e);
            setPage(e.target.innerText);
            // localStorage.setItem("page", e.target.innerText.toString());
          }}
        />
      </Grid>
    </Grid>
  );
}

export default ListOfMoviePage;
