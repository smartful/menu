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
    display: "flex",
    flexDirection: "row",
    width: "35%",
    borderRadius: "1.2rem",
    backgroundColor: "rgba(245, 245, 245, 0.8)",
    paddingBottom: "1.5rem",
    marginBottom: "3rem",
  };

  const styleText: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "0.8rem",
    textAlign: "left",
  };

  const styleImg: React.CSSProperties = {
    width: "40%",
    height: "40%",
    borderRadius: "0.8rem",
  };

  const styleTitle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderBottom: "1px dashed grey",
    paddingBottom: "0.6em",
  };

  const stylePrice: React.CSSProperties = {
    fontWeight: "bolder",
    color: "#c59d5f",
  };

  return (
    <div style={styleCard}>
      <img src={srcImg} alt={mealName} style={styleImg} />
      <div style={styleText}>
        <div style={styleTitle}>
          <div>{mealName}</div>
          <div style={stylePrice}>{price} €</div>
        </div>
        <p style={{ color: "#888" }}>{description}</p>
      </div>
    </div>
  );
};

export default MealCard;
