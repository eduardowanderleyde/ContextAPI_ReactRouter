import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import "./styles.css";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  console.log("useraqui", user);
  return (
    <div className="container-dash">
      <h1 className="name">
        <span className="hello">Olá</span> {user.name}
      </h1>
      <span className="email">
        <b>Email: </b>
        {user.email}
      </span>
      <Link to="/" className="btn-go-back">
        Go back to Home
      </Link>
    </div>
  );
}
