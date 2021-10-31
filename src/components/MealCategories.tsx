import React from "react";
import CategoryButton from "./CategoryButton/default";

const MealCategories: React.FC = () => {
  const styleCategories: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styleCategories}>
      <CategoryButton>Tout</CategoryButton>
      <CategoryButton>Petit déjeuner</CategoryButton>
      <CategoryButton>Plat</CategoryButton>
      <CategoryButton>Dessert</CategoryButton>
    </div>
  );
};

export default MealCategories;
