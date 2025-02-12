import React from 'react';
import "../css/components/main.css";
import "../assets/database/artist.js";
import { artistArray } from '../assets/database/artist.js';

const ItemsList = () => {
  const {name} = artistArray[0]
  return (
    <ul className='itemsList'>
      {artistArray.map((item) => (
        <li>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default ItemsList