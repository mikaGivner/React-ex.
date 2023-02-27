import { NavLink } from "react-router-dom";
import "./style.css";
export default function Header() {
  return (
    <ul>
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/products">
          Products
        </NavLink>
      </li>
    </ul>
  );
}
