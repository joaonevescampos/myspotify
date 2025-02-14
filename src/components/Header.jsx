import { Link } from 'react-router-dom';
import logoSpotify from '../assets/img/spotify-logo.png';
import "../css/components/header.css";
import "../css/reset.css";


const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logoSpotify} alt="Spotify" />
        </Link>
        <Link to="/">My Spotify</Link>
      </header>
    </>
  );
};

export default Header;
