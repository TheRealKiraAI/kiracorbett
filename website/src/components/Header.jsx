import { Image, React } from "react";
import crow from "../assets/no-crow.png";
import dark from "../assets/dark.png";

const Header = () => {
  return (
    <header className="header-div">
      {/* <img src={crow} alt="Portfolio Header Image" className="header-image" /> */}
      <h1>Kira Corbett</h1>
      <h3>Developer Educator || Software Engineer || Startup Enthuisast</h3>
      {/* <h3>
        Taking <span style={{ color: "purple" }}>Ideas</span> to Flight.
      </h3> */}
    </header>
  );
};

export default Header;
