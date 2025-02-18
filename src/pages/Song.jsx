import React from "react";
import { songsArray } from "../assets/database/songs";
import { Link, useParams } from "react-router-dom";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "../css/components/song.css";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Song = () => {
  const { id } = useParams();
  const song = songsArray.filter((song) => {
    return song.id == id;
  })[0];

  const songIndex = songsArray.findIndex((song) => song.id == id);

  const nextIdSong = songsArray[(songIndex + 1).toString()].id
  const prevIdSong = songsArray[(songIndex - 1).toString()].id

  const [progress, setProgress] = useState(0);
  const songDuration = song.duration.split(":");
  const songMinutes = Number(songDuration[0]);
  const songSeconds = Number(songDuration[1]);
  const songDurationInSeconds = songMinutes * 60 + songSeconds;
  const [isPlaying, setIsPlaying] = useState(false);
  let [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();

  const formateTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = parseInt((time / 60 - minutes) * 60);

    const timeFormated =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    return timeFormated;
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--_progress", `${progress}%`);
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) =>
          prev < 100 ? prev + 100 / songDurationInSeconds : 0
        );
        if (currentTime == songDurationInSeconds) {
          setCurrentTime(0);
          setProgress(0);
          setIsPlaying(false);
        }
        currentTime < songDurationInSeconds
          ? (currentTime += 1)
          : (currentTime = 0);
        setCurrentTime(currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  const resetSong = () => {
    useEffect(() => {
          setCurrentTime(0);
          setProgress(0);
          setIsPlaying(false);
    }, [])
}

  return (
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
            <FaCirclePause className="control-play-stop" onClick={playPause} />
          ) : (
            <FaCirclePlay className="control-play-stop" onClick={playPause} />
          )}
          <Link onClick={() => resetSong()} to={`/song/${nextIdSong}`}>
            <IoPlaySkipForward className="control-next" />
          </Link>
        </div>
        <audio ref={audioPlayer} src={song.audio}></audio>
      </div>
    </main>
  );
};

export default Song;
