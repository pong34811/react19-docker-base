// RootLayout.js
import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const Outlet = lazy(() => import("react-router-dom").then((module) => ({ default: module.Outlet })));

function RootLayout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}

export default RootLayout;
