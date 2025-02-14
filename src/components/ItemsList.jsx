import React from "react";
import "../css/components/main.css";
import "../assets/database/artist.js";

const ItemsList = ({ title, array, maxItems }) => {
  return (
    <div className="itemsList-container">
      <h2>{title} Populares</h2>
      <ul className="itemsList">
        {array
          .filter((item, index) => index < maxItems)
          .map((item, index) => (
            <li key={`${title}-${index}`}>
              <picture>
                <img src={item.image} alt={item.name} />
              </picture>
              <h2>{item.name}</h2>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemsList;
