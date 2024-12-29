import React from "react";
import "./LoadingSpinner.css"; 

const LoadingSpinner = ({ isLoading, size = "50px", color = "#4caf50" }) => {
  if (!isLoading) return null;

  return (
    <div className="spinner" style={{ width: size, height: size, borderColor: `${color} transparent transparent transparent` }}></div>
  );
};

export default LoadingSpinner;
