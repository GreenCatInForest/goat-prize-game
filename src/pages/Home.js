import Image from "mui-image";
import goatFrontView from "../images/goatFrontView.jpg";

import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Image src={goatFrontView} />
    </div>
  );
};
