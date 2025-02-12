import logoSpotify from '../assets/img/spotify-logo.png';
import "../css/components/header.css";
import "../css/reset.css";


const Header = () => {
  return (
    <>
      <header>
        <a href="/">
          <img src={logoSpotify} alt="Spotify" />
        </a>
        <a href="/">My Spotify</a>
      </header>
    </>
  );
};

export default Header;
