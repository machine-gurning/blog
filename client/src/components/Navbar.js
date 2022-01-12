import { Link, Router } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="title">
        {" "}
        <Link to="/" className="item-link">
          Blog
        </Link>
      </div>
      <div className="navigation-links">
        <ul className="navbar-links-list">
          <li className="item">
            <Link to="/" className="item-link">
              Read
            </Link>
          </li>
          <li className="item">
            <Link to="/newpost" className="item-link">
              Write
            </Link>
          </li>
          <li className="item">
            <Link to="/about" className="item-link">
              About
            </Link>
          </li>
          <li className="item">
            <Link to="/login" className="item-link">
              Login/Register
            </Link>
          </li>
          <li className="item" className="item-link">
            <span className="bars"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
