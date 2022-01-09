import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="title">Blog</div>
      <div className="navigation-links">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
