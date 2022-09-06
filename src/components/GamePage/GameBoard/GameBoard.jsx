import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useGameContext from "../../../context/GameContext";
import Card from "./Card";

function GameBoard({ sendSelectedCard, endTurn }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "5px",
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const {
    activePlayer,
    setSelectedCard,
    activeTeam,
    setActiveTeam,
    selectedCard,
    cards,
  } = useGameContext();

  const [btnCounter, setBtnCounter] = useState(0);
  useEffect(() => {
    if (btnCounter === 3) {
      endTurn();
      setBtnCounter(0);
    }
  }, [btnCounter]);

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
        <Button
          variant="contained"
          onClick={() => {
            sendSelectedCard(selectedCard);
            setBtnCounter((curr) => curr + 1);
          }}
        >
          Flip Card
        </Button>
      )}
      {activePlayer.role === "operative" &&
        activePlayer.team === activeTeam && (
          <Button onClick={() => endTurn()}> End Turn</Button>
        )}
    </>
  );
}

export default GameBoard;
