// Linking the different Pages
import React from "react";
import Home from "./Home";
import Category from "./Category";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:cuisine" element={<Category />} />
      <Route path="/searched/:food/:diet" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
