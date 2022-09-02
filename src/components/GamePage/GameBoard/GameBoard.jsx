import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useGameContext from "../../../context/GameContext";
import Card from "./Card";

function GameBoard({ sendSelectedCard }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { activePlayer, setSelectedCard, selectedCard, cards } =
    useGameContext();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {cards.map((card, index) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <Item>
                  <Card card={card}></Card>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          sendSelectedCard(selectedCard);
        }}
      >
        Flip Card
      </Button>
    </>
  );
}

export default GameBoard;
