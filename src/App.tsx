import React from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";
import MealCategories from "./components/MealCategories";

function App() {
  return (
    <div className="App">
      <MainTitle title="Menu" barColor="#c59d5f" />
      <MealCategories />
    </div>
  );
}

export default App;
