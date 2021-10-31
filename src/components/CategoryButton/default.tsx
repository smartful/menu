import React from "react";
import "./style.css";

export interface CategoryButtonProps {
  children: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ children }) => {
  return <div className="categoryBtn">{children}</div>;
};

export default CategoryButton;
