import React from "react";
import "./MealCategories.css";

export interface MealCategoriesProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const MealCategories: React.FC<MealCategoriesProps> = ({
  categories,
  filterItems,
}) => {
  const styleCategories: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styleCategories}>
      {categories.map((category) => (
        <button
          key={category}
          className="categoryBtn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MealCategories;
