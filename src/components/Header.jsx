import logoSpotify from '../../public/spotify-logo.png';
import "../css/components/header.css";

const Header = () => {
  return (
    <>
      <header>
        <img src={logoSpotify} alt="/" />
        <a href="/">My Spotify</a>
      </header>
    </>
  );
};

export default Header;
