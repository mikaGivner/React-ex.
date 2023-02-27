import { Link } from "react-router-dom";
import Header from "./Header";
import "./style.css";

export default function Home() {
  return (
    <div>
      {/* <ul>
        <li style={{ color: "red" }}>Home</li>
        <li>
          <Link className="link" to="/products">
            Products
          </Link>{" "}
        </li>
      </ul> */}
      <Header />
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <h1>Welcome Home</h1>
      </div>
    </div>
  );
}
