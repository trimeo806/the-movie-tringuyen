import { React, useEffect, useState } from "react";
import TheMovieSearch from "../components/TheMovieSearch";
import PGridList from "../components/PGridList";
import axios from "axios";

const styles = {
  ImageListItem: {
    marginTop: "10px",
    overFlow: "hidden",
    marginBottom: "10px",
    minHeight: "200px",
    margin: "auto",
    maxWidth: "1300px",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: { xs: "center", lg: "flex-start" },
    backgroundColor: "#3399ff",
    backgroundImage:
      "url(https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg)",
  },
  ImageListItemNonBackground: {
    marginTop: "10px",
    overFlow: "hidden",
    marginBottom: "10px",
    minHeight: "200px",
    margin: "auto",
    maxWidth: "1300px",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: { xs: "center", lg: "flex-start" },
  },
};

function HomePage() {
  const [productsNowPlaying, setProductsNowPlaying] = useState([]);
  const [productsPopular, setProductsPopular] = useState([]);
  const [productsUpComing, setProductsUpComing] = useState([]);
  //Get data Now Playing
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=1"
        );
        setProductsNowPlaying(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  //Get data Popular
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=1"
        );
        setProductsPopular(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  //Get data upcoming
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=62ebcac153a866a6c841db9d4c93d150&language=en-US&page=1"
        );
        setProductsUpComing(res.data.results);
        // console.log(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <TheMovieSearch></TheMovieSearch>

      <PGridList
        style={styles.ImageListItemNonBackground}
        data={productsNowPlaying}
        title="Now Playing"
      ></PGridList>

      <PGridList
        style={styles.ImageListItem}
        data={productsPopular}
        title="What's popular?"
      ></PGridList>

      <PGridList
        style={styles.ImageListItemNonBackground}
        data={productsUpComing}
        title="Up coming"
      ></PGridList>
    </div>
  );
}

export default HomePage;
