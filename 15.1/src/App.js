import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";

import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Product4 from "./components/Product4";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/product1", element: <Product1 /> },
  { path: "/product2", element: <Product2 /> },
  { path: "/product3", element: <Product3 /> },
  { path: "/product4", element: <Product4 /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
