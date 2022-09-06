import React, { useMemo } from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";
import { useParams } from "react-router-dom";
import useSocket from "../../hooks/useSocket";
import { Button, Grid, Typography } from "@mui/material";
import TeamDisplay from "./TeamDisplay/TeamDisplay";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function GamePage() {
  const { lobby } = useParams();
  const navigate = useNavigate();
  const { joinTeam, sendClue, sendCards, sendSelectedCard } = useSocket(lobby);

  const { gameStatus, setGameStatus, players, winningTeam } = useGameContext();
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
