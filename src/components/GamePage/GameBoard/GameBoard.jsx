import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useGameContext from "../../../context/GameContext";
import Card from "./Card";
import Box from "@mui/material/Box";

function GameBoard({ sendSelectedCard, endTurn }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "5px",
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { activePlayer, setSelectedCard, activeTeam, selectedCard, cards } =
    useGameContext();

  const [btnCounter, setBtnCounter] = useState(0);
  useEffect(() => {
    if (btnCounter === 3) {
      endTurn();
      setBtnCounter(0);
    }
  }, [btnCounter, endTurn]);

  return (
    <>
      <Grid
        justifyContent="center"
        container
        // spacing={{ xs: 0, md: 1 }}
        columns={{ xs: 1, sm: 9, md: 12 }}
      >
        {cards.map((card, index) => (
          <Grid flexGrow={1} item xs={2} sm={3} md={3} key={index}>
            <Item
              sx={{ cursor: "pointer" }}
              onClick={() =>
                card === selectedCard
                  ? setSelectedCard(null)
                  : setSelectedCard(card)
              }
            >
              <Card card={card}></Card>
            </Item>
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
              setBtnCounter((curr) => curr + 1);
            }}
          >
            Flip Card
          </Button>
          <Button variant="contained" color="error" onClick={() => endTurn()}>
            End Turn
          </Button>
        </Box>
      )}
    </>
  );
}

export default GameBoard;
