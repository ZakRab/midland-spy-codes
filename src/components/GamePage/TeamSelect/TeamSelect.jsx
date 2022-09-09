import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useGameContext from "../../../context/GameContext";
import TeamDisplay from "../TeamDisplay/TeamDisplay";
import { Grid } from "@mui/material";
import { generateSlug } from "random-word-slugs";

export default function TeamSelect({ players, joinTeam, sendCards }) {
  const { activePlayer, createCards, setGameStatus, setActivePlayer } =
    useGameContext();

  function gameStart() {
    setGameStatus("started");
    const slug = generateSlug(32, {
      format: "kebab",
      partsOfSpeech: [
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
        "noun",
      ],
    });
    let words = slug.split("-");
    let uniqueWords = [...new Set(words)];
    const slicedArray = uniqueWords.slice(0, 16);
    let cards = createCards(slicedArray);
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
      teams.blue.spymaster &&
      teams.blue.operative
    );
  }, [teams]);

  return (
    <div>
      <Grid
        mx={{
          background: "rgba(58, 21, 152, 1)",
          paddingY: "40px",
          // height: "100vh",
        }}
      >
        <Grid
          textAlign="center"
          container
          direction="row"
          justifyContent="center"
          rowSpacing={2}
          alignItems="center"
        >
          <Grid
            item
            md={8}
            sx={{
              padding: "50px",
              borderRadius: "10px",
            }}
          >
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
                size="large"
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
                size="large"
              >
                Join as Operative
              </Button>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="center" m={4}>
              <Button
                // TODO UNCOMMENT NEXT LINE WHEN READY TO FULLY TEST
                // disabled={!activePlayer.isHost || !gameReady}
                // TODO
                // DELETE
                // NEXT
                // LINE
                // WHEN
                // READY
                // TO
                // FULLY
                // TEST
                disabled={!activePlayer.isHost}
                variant="contained"
                size="large"
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
                size="large"
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
                }}
                variant="contained"
                color="primary"
                size="large"
              >
                Join as Spymaster
              </Button>
            </Stack>
          </Grid>
        </Grid>
        {players && unassigned.length > 0 && (
          <TeamDisplay team="Unassigned" players={unassigned} />
        )}
      </Grid>
    </div>
  );
}
