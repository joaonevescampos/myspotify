import React from "react";
import "../css/components/main.css";
import "../assets/database/artist.js";
import { Link } from "react-router-dom";

const ItemsListFull = ({ title, array, maxItems, pathSingle, pathMultiple }) => {
  return (
    <div className="itemsList-container">
      <div className="itemList-header">
        <h2>{title}</h2>
      </div>
      <ul className="itemsListFull">
        {array
          .filter((item, index) => index < maxItems)
          .map((item, index) => (
            <li key={`${title}-${index}`}>
              <Link to={`/${pathSingle}/${item.id}`}>
                <picture>
                  <img src={item.image} alt={item.name} />
                </picture>
                <h2>{item.name}</h2>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemsListFull;
