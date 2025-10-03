import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Formazione from "./pages/Formazione";
import Progetti from "./pages/Progetti";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/formazione" element={<Formazione />} />
          <Route path="/progetti" element={<Progetti />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;