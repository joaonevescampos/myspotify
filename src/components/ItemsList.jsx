import React from "react";
import "../css/components/main.css";
import "../assets/database/artist.js";
import { Link } from "react-router-dom";

const ItemsList = ({
  title,
  array,
  maxItems,
  pathSingle,
  pathMultiple,
  favorite,
  isSong,
}) => {
  {
    favorite ? (array = array.filter((item) => item.favorite)) : array;
  }
  return (
    <div className="itemsList-container">
      <div className="itemList-header">
        <h2>{title}</h2>
        {!favorite ? <Link to={`/${pathMultiple}`}>Mostrar mais</Link> : <></>}
      </div>
      <ul className="itemsList">
        {array
          .filter((item, index) => index < maxItems)
          .map((item, index) => (
            <li key={`${title}-${index}`}>
              <Link to={`/${pathSingle}/${item.id}`}>
                <picture>
                  <img src={item.image} alt={item.name} />
                </picture>
                <div className="figcaption">
                  <h2>{item.name}</h2>
                  {isSong ? <h3>{item.artist}</h3> : <></>}
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemsList;
