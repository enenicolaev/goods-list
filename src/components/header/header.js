import {Link} from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <ul className="links-list">
        <li className="links-list__link">
          <Link to="/">Главная страница</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;