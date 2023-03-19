import { React, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Grid, Typography, Box, Breadcrumbs, Link } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import axios from "axios";

function DetailPage() {
  let params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [detailMovie, setDetailMovie] = useState({});
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (location.pathname === `/tv%20shows/${params.tvId}`) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/tv/${params.tvId}?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US`
          );
          setDetailMovie(res.data);
        } else if (location.pathname === `/movie/${params.movieId}`) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US`
          );
          setDetailMovie(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [params.movieId, location.pathname, params.tvId]);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          onClick={() => {
            navigate("/", { state: { from: location }, replace: true });
          }}
        >
          TMDB
        </Link>
        {location.state?.name ? (
          <Link
            underline="hover"
            color="inherit"
            onClick={() => {
              let name;
              if (params.movieId) {
                name = "Movie";
              } else if (params.tvId) {
                name = "TV Shows";
              }
              navigate(
                `/${
                  location.state?.name ? location.state?.name.toLowerCase() : ""
                }`,
                { state: { from: location, name: name } }
              );
            }}
          >
            {location.state?.name}
          </Link>
        ) : null}
        <Typography color="text.primary">
          {detailMovie.title ? detailMovie.title : detailMovie.name}
        </Typography>
      </Breadcrumbs>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 50%, rgba(31.5, 31.5, 52.5, 0.84) 100%), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailMovie["poster_path"]})`,
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          margin="auto"
          display="flex"
          flexDirection="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Grid
            item
            sx={{
              maxWidth: "300px",
              height: "450px",
              marginLeft: { md: "0px", lg: "20px" },
              display: "flex",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${detailMovie["poster_path"]}`}
              srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${detailMovie["poster_path"]}`}
              alt={detailMovie.title ? detailMovie.title : detailMovie.name}
              loading="lazy"
              maxwidth="100%"
            />
          </Grid>

          <Grid
            item
            display="flex"
            alignSelf="center"
            maxWidth={900}
            sx={{ marginLeft: { md: "0px", lg: "20px" } }}
          >
            <Grid container display="flex" flexDirection="column">
              <Grid item margin="10px">
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight="bold"
                  display="block"
                >
                  {detailMovie.title ? detailMovie.title : detailMovie.name}
                </Typography>
              </Grid>

              <Grid item display="flex" alignItems="center" margin="10px">
                <Typography
                  variant="body2"
                  color="white"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {detailMovie["release_date"]}
                  <CircleIcon fontSize="5px" sx={{ margin: "5px" }} />
                  <span>
                    {detailMovie.genres?.map((genre) => (
                      <span key={genre.id}>{genre.name} </span>
                    ))}
                  </span>

                  <CircleIcon fontSize="5px" sx={{ margin: "5px" }} />
                  <span>{detailMovie["vote_count"]} votes</span>
                </Typography>
              </Grid>

              <Grid item display="flex" alignItems="center" margin="10px">
                <Typography
                  variant="body2"
                  color="white"
                  fontStyle="italic"
                  sx={{ opacity: "0.7", fontSize: "1.1em" }}
                >
                  {detailMovie.tagline}
                </Typography>
              </Grid>

              <Grid
                item
                display="flex"
                flexDirection="column"
                margin="10px"
                maxwidth="800px"
                sx={{ flexShrink: 1 }}
              >
                <Typography variant="h6" color="white">
                  Overview
                </Typography>
                <Typography variant="body2" color="white">
                  {detailMovie.overview}
                </Typography>
              </Grid>

              <Grid
                item
                display="flex"
                flexDirection="row"
                margin="10px"
                maxwidth="500px"
              >
                <Grid container display="flex" flexDirection="column">
                  <Typography
                    variant="h6"
                    color="white"
                    fontSize="15px"
                    fontWeight="bold"
                  >
                    Country
                  </Typography>
                  <Typography variant="h6" color="white" fontSize="12px">
                    {detailMovie["production_countries"]?.map((country) => (
                      <div key={country.name}>{country.name} </div>
                    ))}
                  </Typography>
                </Grid>

                <Grid
                  container
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Typography
                    variant="h6"
                    color="white"
                    fontSize="15px"
                    fontWeight="bold"
                  >
                    Language
                  </Typography>
                  <Typography variant="h6" color="white" fontSize="12px">
                    {detailMovie["spoken_languages"]?.map((language) => (
                      <div key={language["iso_639_1"]}>{language.name} </div>
                    ))}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DetailPage;
