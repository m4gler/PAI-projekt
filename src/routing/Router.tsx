import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Links } from "../constants/links";
import { MainPage } from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: Links.HOMEPAGE,
    element: <MainPage />,
  },
  {
    path: Links.REGISTER,
    element: <RegisterPage />,
  },
]);
