import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import About from "./components/About";
import SinglePage from "./components/SinglePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/movie/:movieId" element={<SinglePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
