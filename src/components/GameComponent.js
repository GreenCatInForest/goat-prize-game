import { Button } from "@mui/material";
import { Doors } from "./Doors";

export const GameComponent = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => {}}>
        Start
      </Button>
      <Doors />
    </div>
  );
};
