import React, { useState } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";
import MealCategories from "./components/MealCategories";
import Container from "./components/Container";
import { meals } from "./data/meals";

const allCategories: string[] = [
  "all",
  ...new Set(meals.map((meal) => meal.category)),
];
console.log("allCategories : ", allCategories);

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState(meals);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(meals);
      return;
    }
    const newItems = meals.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <MainTitle title="Menu" barColor="#c59d5f" />
      <MealCategories categories={categories} filterItems={filterItems} />
      <Container items={menuItems} />
    </div>
  );
};

export default App;
