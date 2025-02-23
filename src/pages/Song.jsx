import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "../css/components/song.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { fetchSongsAndArtists } from "../api/api.js";
import Loading from "../components/Loading.jsx";

const Song = () => {
  const [songsArray, setSongsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();

  const { id } = useParams();

  // Carrega os dados da API
  useEffect(() => {
    async function loadData() {
      try {
        const { songsArray } = await fetchSongsAndArtists();
        setSongsArray(songsArray);
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Atualiza a barra de progresso
  useEffect(() => {
    document.documentElement.style.setProperty("--_progress", `${progress}%`);
  }, [progress]);

  // Controla a reprodução da música
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) =>
          prev < 100 ? prev + 100 / songDurationInSeconds : 0
        );
        if (currentTime >= songDurationInSeconds) {
          setCurrentTime(0);
          setProgress(0);
          setIsPlaying(false);
        }
        setCurrentTime((prevTime) =>
          prevTime < songDurationInSeconds ? prevTime + 1 : 0
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  if (isLoading) {
    return <Loading />;
  }

  const song = songsArray.find((song) => song.id == id);

  if (!song) {
    return <p>Música não encontrada</p>;
  }

  const songIndex = songsArray.findIndex((song) => song.id == id);

  const nextIdSong =
    songIndex >= songsArray.length - 1
      ? songsArray[songIndex]?.id
      : songsArray[songIndex + 1]?.id;

  const prevIdSong =
    songIndex <= 0 ? songsArray[songIndex]?.id : songsArray[songIndex - 1]?.id;

  const songDuration = song.duration?.split(":") || ["0", "0"];
  const songMinutes = Number(songDuration[0]);
  const songSeconds = Number(songDuration[1]);
  const songDurationInSeconds = songMinutes * 60 + songSeconds;

  const formateTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = parseInt((time / 60 - minutes) * 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  const resetSong = () => {
    setCurrentTime(0);
    setProgress(0);
    setIsPlaying(false);
    audioPlayer.current.currentTime = 0;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="song-page">
          <section className="song-cover">
            <picture>
              <img src={song.image} alt={song.name} />
            </picture>
            <div className="song-infos">
              <h1>{song.name}</h1>
              <h2>{song.artist}</h2>
            </div>
          </section>
          <div className="player-container">
            <div className="player-bar">
              <span className="current-time">{formateTime(currentTime)}</span>
              <div className="player-progress">
                <div className="player-pointer"></div>
              </div>
              <span className="duration">{song.duration}</span>
            </div>
            <div className="player-controls">
              <Link onClick={() => resetSong()} to={`/song/${prevIdSong}`}>
                <IoPlaySkipBack className="control-back" />
              </Link>
              {isPlaying ? (
                <FaCirclePause
                  className="control-play-stop"
                  onClick={playPause}
                />
              ) : (
                <FaCirclePlay
                  className="control-play-stop"
                  onClick={playPause}
                />
              )}
              <Link onClick={() => resetSong()} to={`/song/${nextIdSong}`}>
                <IoPlaySkipForward className="control-next" />
              </Link>
            </div>
            <audio ref={audioPlayer} src={song.audio}></audio>
          </div>
        </main>
      )}
    </>
  );
};

export default Song;
