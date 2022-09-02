import React, { useMemo } from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";
import { useParams } from "react-router-dom";
import useSocket from "../../hooks/useSocket";
import { Grid, Typography } from "@mui/material";
import TeamDisplay from "./TeamDisplay/TeamDisplay";

function GamePage() {
  const { lobby } = useParams();

  const { joinTeam, sendClue, sendCards, sendSelectedCard } = useSocket(lobby);

  const { gameStatus, players } = useGameContext();
  const redTeam = useMemo(
    () =>
      players
        .filter((v) => v.team === "red")
        .sort((a, b) => (a.role === "spymaster" ? -1 : 0)),
    [players]
  );
  const blueTeam = useMemo(
    () =>
      players
        .filter((v) => v.team === "blue")
        .sort((a, b) => (a.role === "spymaster" ? -1 : 0)),
    [players]
  );
  return (
    <div>
      <Typography variant="h3" align="center" m={2}>
        Game
      </Typography>
      <Grid
        container
        direction="row"
        alignContent={"flex-start"}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {gameStatus !== "started" && (
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            <TeamSelect
              joinTeam={joinTeam}
              sendCards={sendCards}
              players={players}
            />
          </Grid>
        )}
        <Grid
          item
          xs={6}
          md={2}
          order={{ xs: 2, md: 1 }}
          alignSelf="flex-start"
        >
          <TeamDisplay team="Red" players={redTeam} />
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          alignSelf="flex-start"
          order={{ xs: 3, md: 3 }}
        >
          <TeamDisplay team="Blue" players={blueTeam} />
        </Grid>
        {gameStatus == "started" && (
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            <GameBoard sendSelectedCard={sendSelectedCard} />
            <Clue sendClue={sendClue} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default GamePage;
