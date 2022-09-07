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

  const {
    gameStatus,
    setGameStatus,
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
  }, [cards, activeTeam]);

  return (
    <div>
      <Modal open={gameStatus === "game over"}>
        <Box sx={style}>
          <Typography>GAME OVER</Typography>
          <Typography>{winningTeam + "won"}</Typography>
          <Button onClick={() => (setGameStatus(null), navigate("/home"))}>
            Reset Game
          </Button>
        </Box>
      </Modal>
      <Typography variant="h3" align="center" m={2}>
        <div className="picture1">
          <img src="https://czechgames.com/for-press/codenames/codenames-13.png"></img>
        </div>
        {gameStatus === "started" && activeTeam === "red" && (
          <Typography
            className="background-card margin-auto flip-horizontal-top width400px"
            sx={{ color: "red", fontSize: 40 }}
          >
            Red's Turn
          </Typography>
        )}
        {gameStatus === "started" && activeTeam === "blue" && (
          <Typography
            className="background-card flip-horizontal-top margin-auto width400px"
            sx={{ color: "blue", fontSize: 40 }}
          >
            Blue's Turn
          </Typography>
        )}
      </Typography>
      <Grid
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
          <Grid
            className="background-card"
            item
            xs={12}
            md={8}
            order={{ xs: 1, md: 2 }}
          >
            <GameBoard sendSelectedCard={sendSelectedCard} endTurn={endTurn} />
            <Clue sendClue={sendClue} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default GamePage;
