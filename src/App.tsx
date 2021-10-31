import React, { useState } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";
import MealCategories from "./components/MealCategories";
import Container from "./components/Container";
import { meals } from "./data/meals";

const App = () => {
  const [menuItems, setMenuItems] = useState(meals);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <MainTitle title="Menu" barColor="#c59d5f" />
      <MealCategories />
      <Container />
    </div>
  );
};

export default App;
