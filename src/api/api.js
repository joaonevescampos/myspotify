import axios from "axios";

const URL = "https://my-spotify-backend.onrender.com";

const songsCollection = await axios.get(`${URL}/songs`);
const artistsCollection = await axios.get(`${URL}/artists`);

export const songsArray = songsCollection.data
export const artistArray = artistsCollection.data;
