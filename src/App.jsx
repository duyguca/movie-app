import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import SinglePage from "./components/SinglePage";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:movieId" element={<SinglePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
