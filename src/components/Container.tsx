import React from "react";
import { meals } from "../data/meals";
import MealCard from "./MealCard";

const Container: React.FC = () => {
  const styleContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "3rem",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styleContainer}>
      {meals.map((meal) => (
        <MealCard
          key={meal.id}
          mealName={meal.mealName}
          price={meal.price}
          description={meal.description}
          srcImg={meal.srcImg}
        />
      ))}
    </div>
  );
};

export default Container;
