// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes/routes";

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
