import React from "react";
import "../css/components/main.css";
import "../assets/database/artist.js";

const ItemsList = ({ title, array, maxItems, pathSingle, pathMultiple }) => {
  return (
    <div className="itemsList-container">
      <div className="itemList-header">
        <h2>{title} Populares</h2>
        <a href={`/${pathMultiple}`}>Mostrar mais</a>
      </div>
      <ul className="itemsList">
        {array
          .filter((item, index) => index < maxItems)
          .map((item, index) => (
            <li key={`${title}-${index}`}>
              <a href={`/${pathSingle}/${item.id}`}>
                <picture>
                  <img src={item.image} alt={item.name} />
                </picture>
                <h2>{item.name}</h2>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemsList;
