import React, { useMemo, useEffect } from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";
import { useParams } from "react-router-dom";
import useSocket from "../../hooks/useSocket";
import { Grid, Typography, Button } from "@mui/material";
import TeamDisplay from "./TeamDisplay/TeamDisplay";

function GamePage() {
  const { lobby } = useParams();

  const { joinTeam, sendClue, sendCards, endGame, sendSelectedCard, endTurn } =
    useSocket(lobby);

  const {
    gameStatus,
    players,
    activeTeam,
    cards,
    winningTeam,
    setWinningTeam,
  } = useGameContext();
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
  useEffect(() => {
    let faceUpByColor = cards.reduce(
      (acc, curr) => {
        if (curr.isFaceUp) {
          acc[curr.type]++;
        }
        return acc;
      },
      { blue: 0, red: 0, bomb: 0 }
    );
    if (faceUpByColor.blue === 6) {
      endGame("blue");
    } else if (faceUpByColor.red === 6) {
      endGame("red");
    }
  }, [cards, activeTeam]);

  return (
    <div>
      <Typography variant="h3" align="center" m={2}>

        <div className="picture1">
          <img src="https://czechgames.com/for-press/codenames/codenames-13.png"></img>
        </div>
        <div>
           Game {activeTeam}
        </div>
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
            <GameBoard sendSelectedCard={sendSelectedCard} endTurn={endTurn} />
            <Clue sendClue={sendClue} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default GamePage;
