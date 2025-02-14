import React from 'react';
import ItemsListFull from '../components/ItemsListFull';
import { artistArray } from '../assets/database/artist';

const Artists = () => {
  return (
    <main>
      <ItemsListFull
        title="Todos os Artistas"
        maxItems={artistArray.length}
        array={artistArray}
        pathSingle="artist"
        pathMultiple="artists"
      />
    </main>
  );
}

export default Artists