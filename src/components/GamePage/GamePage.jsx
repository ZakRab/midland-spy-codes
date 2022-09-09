import React, { useMemo, useEffect } from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";
import { useParams } from "react-router-dom";
import useSocket from "../../hooks/useSocket";
import { Grid, Typography, Button } from "@mui/material";
import TeamDisplay from "./TeamDisplay/TeamDisplay";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function GamePage() {
  const { lobby } = useParams();

  const navigate = useNavigate();
  const { joinTeam, sendClue, sendCards, endGame, sendSelectedCard, endTurn } =
    useSocket(lobby);
  const { gameStatus, players, activeTeam, cards, winningTeam, resetGame } =
    useGameContext();

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

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
  }, [cards, activeTeam, endGame]);

  return (
    <>
      <Grid
        mx={{
          background: "rgba(58, 21, 152, 1)",
          paddingTop: "20px",
        }}
      >
        <Modal open={gameStatus === "game over"} size="lg">
          {/* <div style={{ marginTop: 20, width: 340 }}> */}
          <Box sx={style}>
            <Typography color={"black"}>GAME OVER</Typography>
            <Typography color={winningTeam}>
              The {winningTeam} team won!
            </Typography>
            <Button
              onClick={() => {
                resetGame();
                navigate("/home");
              }}
            >
              Exit Game
            </Button>
          </Box>
          {/* </div> */}
        </Modal>
        <Grid
          mt={1}
          container
          direction="row"
          alignContent={"flex-start"}
          justifyContent="space-evenly"
          alignItems="center"
          className=""
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
            <TeamDisplay team="Red" players={redTeam} activeTeam={activeTeam} />
          </Grid>
          <Grid
            item
            xs={6}
            md={2}
            alignSelf="flex-start"
            order={{ xs: 3, md: 3 }}
          >
            <TeamDisplay
              team="Blue"
              players={blueTeam}
              activeTeam={activeTeam}
            />
          </Grid>
          {gameStatus === "started" && (
            <Grid
              className="background-card bg-white"
              item
              xs={12}
              md={6}
              order={{ xs: 1, md: 2 }}
            >
              <Clue sendClue={sendClue} />
              <GameBoard
                sendSelectedCard={sendSelectedCard}
                endTurn={endTurn}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default GamePage;









