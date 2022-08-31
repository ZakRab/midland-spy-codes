import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useGameContext from "../../../context/GameContext";

export default function TeamSelect({ players, joinTeam }) {
  const { activePlayer } = useGameContext();
  function gameStart() {
    console.log("game started");
  }
  function redSMFilter(player) {
    return player.role === "spymaster" && player.team === "red";
  }
  function blueSMFilter(player) {
    return player.role === "spymaster" && player.team === "blue";
  }
  const hasRedSM = useMemo(() => {
    let result = players.filter(redSMFilter);
    return result.length !== 0;
  }, [players]);

  const hasBlueSM = useMemo(() => {
    let result = players.filter(blueSMFilter);
    return result.length !== 0;
  }, [players]);

  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button
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
            disabled={hasRedSM}
            onClick={() => {
              joinTeam(activePlayer, "red", "spymaster");
            }}
            variant="outlined"
            sx={{ color: "black", backgroundColor: "red" }}
          >
            Join as Spymaster
          </Button>
          <Button
            disabled={hasBlueSM}
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
