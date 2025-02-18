// routes.js
import React, { lazy } from "react";
import RootLayout from "../Layout/RootLayout";
import NoPage404 from "../pages/NoPage404";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NoPage404 />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
];

export default routes;
