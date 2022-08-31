import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useGameContext from "../../../context/GameContext";
import { useParams } from "react-router-dom";

export default function TeamSelect() {
  const { activePlayer, players, setPlayers } = useGameContext();
  const { lobby } = useParams();
  function gameStart() {
    console.log("game started");
  }
  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button
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
        {players.map((player) => {
          return <div>{player.name}</div>;
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
