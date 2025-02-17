import React from "react";
import { songsArray } from "../assets/database/songs";
import { useParams } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "../css/components/song.css";
import { useState, useEffect } from "react";

const Song = () => {
  const { id } = useParams();
  const song = songsArray.filter((song) => song.id == id)[0];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--_progress", `${progress}%`);
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="song-page">
      <section className="song-cover">
        <picture>
          <img src={song.image} alt={song.name} />
        </picture>
        <div className="song-infos" >
          <h1>{song.name}</h1>
          <h2>{song.artist}</h2>
        </div>
      </section>
      <div className="player-container">
        <div className="player-bar">
          <span className="current-time">0:00 </span>
          <div className="player-progress"><div className="player-pointer"></div></div>
          <span className="duration">{song.duration}</span>
        </div>
        <div className="player-controls">
          <IoPlaySkipBack className="control-back" />
          <FaCirclePlay className="control-play-stop" />
          <IoPlaySkipForward className="control-next" />
        </div>
      </div>
    </main>
  );
};

export default Song;
