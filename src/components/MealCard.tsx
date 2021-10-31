import React from "react";

export interface MealCardProps {
  mealName: string;
  price: number;
  description: string;
  srcImg: string;
}

const MealCard: React.FC<MealCardProps> = ({
  mealName,
  price,
  description,
  srcImg,
}) => {
  const styleCard: React.CSSProperties = {
    width: "35%",
    height: "20rem",
    border: "1px solid white",
    borderRadius: "1.2rem",
    backgroundColor: "white",
    paddingBottom: "1.5rem",
    marginBottom: "3rem",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  };

  const styleImg: React.CSSProperties = {
    width: "40%",
    height: "40%",
    borderRadius: "0.8rem",
  };

  return (
    <div style={styleCard}>
      <img src={srcImg} alt={mealName} style={styleImg} />
      <h3>
        {mealName} - {price} €
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default MealCard;
