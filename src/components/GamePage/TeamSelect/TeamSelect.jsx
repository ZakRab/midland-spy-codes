import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useGameContext from "../../../context/GameContext";

export default function TeamSelect({ players, joinTeam }) {
  const { activePlayer } = useGameContext();
  function gameStart() {
    console.log("game started");
  }
  players.map((player) => {
    if (player.team === "red" && player.role === "operative") {
      disableButton("red", "operative");
    }
  });
  function disableButton(team, role) {
    return { team, role };
  }
  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            disabled={
              disableButton().role === "operative" &&
              disableButton().team === "red"
            }
            onClick={() => {
              joinTeam(activePlayer, "red", "operative");
            }}
            variant="outlined"
            sx={{ color: "black", backgroundColor: "red" }}
          >
            Join as Operative
          </Button>
          <Button
            onClick={() => {
              joinTeam(activePlayer, "blue", "operative");
            }}
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
      {players && (
        <div>
          {players.map((player, idx) => {
            return <div key={idx}>{player.name}</div>;
          })}
        </div>
      )}
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              joinTeam(activePlayer, "red", "spymaster");
            }}
            variant="outlined"
            sx={{ color: "black", backgroundColor: "red" }}
          >
            Join as Spymaster
          </Button>
          <Button
            onClick={() => {
              joinTeam(activePlayer, "blue", "spymaster");
              console.log(players);
            }}
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
