import React, { useEffect, useState } from "react";
import ItemsListFull from "../components/ItemsListFull";
import { fetchSongsAndArtists } from "../api/api.js";
import Loading from "../components/Loading.jsx";

const Artists = () => {
  const [artistArray, setArtistArray] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { artistArray } = await fetchSongsAndArtists();
      setArtistArray(artistArray);
    }
    loadData();
  }, []);
  return (
    <>
      {artistArray.length > 0 ? (
        <main>
          <ItemsListFull
            title="Todos os Artistas"
            maxItems={artistArray.length}
            array={artistArray}
            pathSingle="artist"
            pathMultiple="artists"
          />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Artists;
