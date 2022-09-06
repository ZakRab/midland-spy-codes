import React, { useEffect, useMemo } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useGameContext from "../../../context/GameContext";
import randomWords from "random-words";
import TeamDisplay from "../TeamDisplay/TeamDisplay";

export default function TeamSelect({ players, joinTeam, sendCards }) {
  const { activePlayer, createCards, setGameStatus, setActivePlayer } =
    useGameContext();

  function gameStart() {
    setGameStatus("started");
    let words = randomWords(16);
    let cards = createCards(words);
    sendCards(cards);
  }

  const teams = useMemo(() => {
    return players.reduce((prev, curr) => {
      if (!prev[curr.team]) {
        prev[curr.team] = {};
      }
      prev[curr.team][curr.role] = true;
      return prev;
    }, {});
  }, [players]);

  const unassigned = useMemo(
    () => players.filter((v) => v.team == null),
    [players]
  );

  const gameReady = useMemo(() => {
    if (!teams.red || !teams.blue) return false;
    return (
      teams.red.spymaster &&
      teams.red.operative &&
      teams.red.operative &&
      teams.blue.operative
    );
  }, [teams]);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        m={2}
      >
        <Button
          onClick={() => {
            joinTeam(activePlayer, "red", "operative");
            setActivePlayer({
              name: activePlayer.name,
              isHost: activePlayer.isHost,
              role: "operative",
              team: "red",
            });
          }}
          variant="contained"
          color="error"
        >
          Join as Operative
        </Button>
        <Button
          onClick={() => {
            joinTeam(activePlayer, "blue", "operative");
            setActivePlayer({
              name: activePlayer.name,
              isHost: activePlayer.isHost,
              role: "operative",
              team: "blue",
            });
          }}
          variant="contained"
          color="primary"
        >
          Join as Operative
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center" m={2}>
        <Button
          // TODO UNCOMMENT NEXT LINE WHEN READY TO FULLY TEST
          // disabled={!activePlayer.isHost || !gameReady}
          //TODO DELETE NEXT LINE WHEN READY TO FULLY TEST
          disabled={!activePlayer.isHost}
          variant="contained"
          onClick={() => {
            gameStart();
          }}
        >
          Start Game
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        m={2}
      >
        <Button
          disabled={teams.red && teams.red.spymaster}
          onClick={() => {
            joinTeam(activePlayer, "red", "spymaster");
            setActivePlayer({
              name: activePlayer.name,
              isHost: activePlayer.isHost,
              role: "spymaster",
              team: "red",
            });
          }}
          variant="contained"
          color="error"
        >
          Join as Spymaster
        </Button>

        <Button
          disabled={teams.blue && teams.blue.spymaster}
          onClick={() => {
            joinTeam(activePlayer, "blue", "spymaster");
            setActivePlayer({
              name: activePlayer.name,
              isHost: activePlayer.isHost,
              role: "spymaster",
              team: "blue",
            });

            console.log(players);
          }}
          variant="contained"
          color="primary"
        >
          Join as Spymaster
        </Button>
      </Stack>
      {players && unassigned.length > 0 && (
        <TeamDisplay team="Unassigned" players={unassigned} />
      )}
    </div>
  );
}
