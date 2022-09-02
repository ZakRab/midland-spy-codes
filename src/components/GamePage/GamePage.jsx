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
        <Grid item xs={2} alignSelf="flex-start">
          <TeamDisplay team="Red" players={redTeam} />
        </Grid>
        <Grid item xs={8}>
          {gameStatus !== "started" && (
            <TeamSelect
              joinTeam={joinTeam}
              sendCards={sendCards}
              players={players}
            />
          )}
          {gameStatus == "started" && (
            <>
              <GameBoard sendSelectedCard={sendSelectedCard} />
              <Clue sendClue={sendClue} />
            </>
          )}
        </Grid>
        <Grid item xs={2} alignSelf="flex-start">
          <TeamDisplay team="Blue" players={blueTeam} />
        </Grid>
      </Grid>
    </div>
  );
}

export default GamePage;
