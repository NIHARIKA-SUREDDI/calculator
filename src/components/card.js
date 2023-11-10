import React from "react";
import"../styles/Card.css";
function Card({ title, description, imageUrl,onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <img src={imageUrl} alt={title} className="card-image" />
        
      </div>
    </div>
  );
}
export default Card;
