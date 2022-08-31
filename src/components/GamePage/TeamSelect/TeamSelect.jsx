import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useGameContext from "../../../context/GameContext";

export default function TeamSelect({ players, joinOPBlue }) {
  const { activePlayer } = useGameContext();
  function gameStart() {
    console.log("game started");
  }
  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              joinOPBlue(activePlayer);
            }}
            variant="outlined"
            sx={{ color: "black", backgroundColor: "red" }}
          >
            Join as Operative
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "black", backgroundColor: "blue" }}
          >
            Join as Operative
          </Button>
        </Stack>
      </div>
      {activePlayer.isHost && (
        <Button variant="contained" onClick={() => gameStart()}>
          Start game
        </Button>
      )}
      <div>
        {players.map((player, idx) => {
          return <div key={idx}>{player.name}</div>;
        })}
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{ color: "black", backgroundColor: "red" }}
          >
            Join as Spymaster
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "black", backgroundColor: "blue" }}
          >
            Join as Spymaster
          </Button>
        </Stack>
      </div>
    </div>
  );
}
