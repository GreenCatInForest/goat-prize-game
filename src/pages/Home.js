import { useNavigate } from "react-router-dom";
import Image from "mui-image";
import { Button } from "@mui/material";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import goatFrontView from "../images/goatFrontView.jpg";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div>Goats and Prizes</div>
      <Image src={goatFrontView} />
      <div>Choose the door, win the prize, avoid the Goats</div>
      <div>How to play</div>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/game");
        }}
      >
        Play
      </Button>
      <Footer />
    </div>
  );
};
