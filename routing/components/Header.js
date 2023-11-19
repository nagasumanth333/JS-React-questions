import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
