import React, { useState } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";
import MealCategories from "./components/MealCategories";
import Container from "./components/Container";
import { meals } from "./data/meals";

const App = () => {
  const [menuItems, setMenuItems] = useState(meals);
  const [categories, setCategories] = useState([]);

  const filterItems = (category: string) => {
    const newItems = meals.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <MainTitle title="Menu" barColor="#c59d5f" />
      <MealCategories filterItems={filterItems} />
      <Container items={menuItems} />
    </div>
  );
};

export default App;
