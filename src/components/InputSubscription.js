import * as React from "react";
import { useState } from "react";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function InputSubscription({
  disabledGenres,
  setDisabledGenres,
  searchParams,
  setSearchParams,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const { setGenresId } = useAuth();
  // console.log(location);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const query = event.target[0].value;
    console.log(searchParams);
    setGenresId(null);
    let name;
    if (location.pathname === "/movie") {
      name = "Movie";
    } else if (location.pathname === "/tv%20shows") {
      name = "TV Shows";
    }
    if (query) {
      setSearchParams({ query });
      navigate(`${location.pathname}?query=${query}`, {
        state: { from: location, name: name },
      });
      setDisabled(true);
      setDisabledGenres(true);
    } else if (query === "") {
      setSearchParams("");
      setDisabledGenres(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="search-movie">
      <FormControl>
        <Input
          sx={{ "--Input-decoratorChildHeight": "45px" }}
          placeholder="Search"
          type="text"
          onChange={(event) => {
            let query = event.target.value;
            if (!query) {
              setDisabled(true);
              setDisabledGenres(false);

              let name;
              if (location.pathname === "/movie") {
                name = "Movie";
              } else if (location.pathname === "/tv%20shows") {
                name = "TV Shows";
              }
              setSearchParams({});
              setGenresId(null);
              navigate(`${location.pathname}`, {
                state: { from: location, name: name },
              });
            }
            if (query) {
              setDisabled(false);
              setDisabledGenres(true);
            }
          }}
          endDecorator={
            <Button
              disabled={disabled}
              variant="solid"
              color="primary"
              type="submit"
              onSubmit={handleSubmit}
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Search
            </Button>
          }
        />
      </FormControl>
    </form>
  );
}
