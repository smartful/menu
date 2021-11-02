import React from "react";
import "./MealCategories.css";

export interface MealCategoriesProps {
  filterItems: (category: string) => void;
}

const MealCategories: React.FC<MealCategoriesProps> = ({ filterItems }) => {
  const styleCategories: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styleCategories}>
      <button className="categoryBtn">Tout</button>
      <button className="categoryBtn" onClick={() => filterItems("Petit Dèj")}>
        Petit déjeuner
      </button>
      <button className="categoryBtn">Plat</button>
      <button className="categoryBtn">Dessert</button>
    </div>
  );
};

export default MealCategories;
