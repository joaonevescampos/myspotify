import axios from "axios";

const URL = "https://my-spotify-backend.onrender.com";

export async function fetchSongsAndArtists() {
  try {
    const [songsCollection, artistsCollection] = await Promise.all([
      axios.get(`${URL}/songs`),
      axios.get(`${URL}/artists`),
    ]);

    return {
      songsArray: songsCollection.data,
      artistArray: artistsCollection.data,
    };
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return { songsArray: [], artistArray: [] };
  }
}
