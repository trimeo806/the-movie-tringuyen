import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "../layout/BlankLayout";
import MainLayout from "../layout/MainLayout";
import PagesLayout from "../layout/PagesLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import ListOfMoviePage from "../pages/ListOfMoviePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRequire from "./AuthRequire";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<AuthRequire />}>
          {" "}
          <Route index element={<HomePage />} />
          <Route element={<PagesLayout />}>
            <Route path="movie" element={<ListOfMoviePage />}></Route>
            <Route path="tv shows" element={<ListOfMoviePage />}></Route>
          </Route>
          <Route path="movie/:movieId" element={<DetailPage />}></Route>
          <Route path="tv shows/:tvId" element={<DetailPage />}></Route>
        </Route>
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default Router;
