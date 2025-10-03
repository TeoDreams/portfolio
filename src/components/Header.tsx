import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#282c34", padding: "15px" }}>
      <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About Me</Link>
        <Link to="/formazione" style={{ color: "#fff", textDecoration: "none" }}>Formazione</Link>
        <Link to="/progetti" style={{ color: "#fff", textDecoration: "none" }}>Progetti</Link>
      </nav>
    </header>
  );
}