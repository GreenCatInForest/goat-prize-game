import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { Contacts } from "./pages/Contacts";
import { NotFound404 } from "./pages/NotFound404";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/*" element={<NotFound404 />} />
    </Routes>
  );
};
