import { Link } from "react-router-dom";
import SteamLogo from "../assets/SteamHomePage.png"; // Importing the image
import "./Navbar.css"; // Importing the CSS file

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="container">
        <div className="logo-container">
          <img className="img-fluid" src={SteamLogo} alt="Steam Home Page" />
          <Link to="/" className="nav-link">
            <h1>Games</h1>
          </Link>
          <Link to="/add" className="nav-link">
            <h1>Add Games</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
