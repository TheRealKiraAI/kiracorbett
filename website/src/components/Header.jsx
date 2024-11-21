import { Image, React } from "react";
import crow from "../assets/crow.jpg";

const Header = () => {
  return (
    <header>
      <h1>Kira Corbett</h1>
      <img src={crow} alt="Portfolio Header Image" className="header-image" />
    </header>
  );
};

export default Header;
