import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useGameContext from "../../../context/GameContext";
import Card from "./Card";
import Box from "@mui/material/Box";
import { height } from "@mui/system";

function GameBoard({ sendSelectedCard, endTurn }) {
  const { activePlayer, activeTeam, selectedCard, cards, btnCounter } =
    useGameContext();

  useEffect(() => {
    if (btnCounter === 0 && activePlayer.isHost) {
      endTurn();
    }
  }, [activePlayer, btnCounter, endTurn]);

  return (
    <>
      <div className="full-height">
        <Grid
          justifyContent="center"
          container
          // spacing={{ xs: 0, md: 1 }}
          columns={{ xs: 1, sm: 9, md: 12 }}
        >
          {cards.map((card, index) => (
            <Grid flexGrow={1} item xs={2} sm={3} md={3} key={index}>
              <Card card={card}></Card>
            </Grid>
          ))}
        </Grid>
        {activePlayer.role === "operative" && activePlayer.team === activeTeam && (
          <Box
            my={1}
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
          >
            <Button
              variant="contained"
              onClick={() => {
                sendSelectedCard(selectedCard);
              }}
            >
              Flip Card
            </Button>
            <Button variant="contained" color="error" onClick={() => endTurn()}>
              End Turn
            </Button>
          </Box>
        )}
      </div>
    </>
  );
}

export default GameBoard;
