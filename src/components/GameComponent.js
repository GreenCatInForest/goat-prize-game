import { useState } from "react";

import { Button } from "@mui/material";

export const GameComponent = () => {
  const handleDoorGenerator = () => {
    let doors = [
      {
        id: 1,
        name: "door1",
        doorPrize: "",
        isOpen: false,
        choicePlayerDoor: false,
        choiceMontyDoor: false,
      },

      {
        id: 2,
        name: "door2",
        doorPrize: "",
        isOpen: false,
        choicePlayerDoor: false,
        choiceMontyDoor: false,
      },

      {
        id: 3,
        name: "door3",
        doorPrize: "",
        isOpen: false,
        choicePlayerDoor: false,
        choiceMontyDoor: false,
      },
    ];
    let count = Math.floor(Math.random() * 3 + 1);

    doors.map((door) =>
      door.id === count ? (door.doorPrize = "prize") : (door.doorPrize = "goat")
    );

    console.log(doors);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          handleDoorGenerator();
        }}
      >
        Start
      </Button>
    </div>
  );
};
