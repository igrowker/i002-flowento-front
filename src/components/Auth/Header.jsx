import { Link } from "react-router-dom";
import logow from "../../assets/logow.webp";
import flowento from "../../assets/flowento.svg";

function Header() {
  return (
    <>
      <Link to="/" className="content-center block w-full">
        <img
          className="w-auto mx-auto border rounded-full shadow-2xl h-60"
          src={logow}
          alt="Flowento"
        />
      </Link>
      <img className="w-auto mx-auto" src={flowento} alt="Flowento" />
    </>
  );
}

export default Header;
