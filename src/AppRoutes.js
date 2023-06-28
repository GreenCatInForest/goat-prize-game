import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { Contact } from "./pages/Contact";

export const AppRoutes = () => {
  return (
    <div>
      <Home />
      <Game />
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
