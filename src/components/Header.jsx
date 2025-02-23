import { Link } from "react-router-dom";
import logoSpotify from "../assets/img/spotify-logo.png";
import "../css/components/header.css";
import "../css/reset.css";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logoSpotify} alt="Spotify" />
        </Link>
        <div className="header-branding">
          <Link to="/" className="logo-title">My Spotify</Link>
          <a target="_blanck" href="https://portfolio-joao-campos.vercel.app/" className="rights">
            Developed by João Campos
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
