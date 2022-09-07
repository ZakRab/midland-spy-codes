import React, { useState } from "react";
import useGameContext from "../../../context/GameContext";

function Card({ card }) {
  const { activePlayer, setSelectedCard, selectedCard } = useGameContext();
  const spyStyle = {
    backgroundColor: card.color,
    aspectRatio: "3/2.5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2em",
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "Poppins, sans serif",
    fontWeight: "semibold",
    hyphens: "auto",
  };
  const opStyle = {
    aspectRatio: "3/2.5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2em",
    color: "#212020",
    textTransform: "uppercase",
    backgroundColor: "#eedece",
    fontWeight: "semibold",
    hyphens: "auto",
    fontFamily: "Poppins, sans serif",
  };
  const opStyleSelected = {
    boxSizing: "border-box",
    backgroundColor: "#eedece",
    aspectRatio: "3/2.5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2em",
    color: "#212020",
    textTransform: "uppercase",
    fontWeight: "semibold",
    hyphens: "auto",
    fontFamily: "Poppins, sans serif",
    border: "3px solid yellow",
  };
  const opStyleFlipped = {
    backgroundColor: card.color,
    aspectRatio: "3/2.5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2em",
    color: "#212020",
    textTransform: "uppercase",
    fontWeight: "semibold",
    hyphens: "auto",
    fontFamily: "Poppins, sans serif",
    // border: "3px solid yellow",
  };
  return (
    <div onClick={() => setSelectedCard(!card.isFaceUp ? card : null)}>
      {activePlayer.role === "spymaster" && (
        <div style={spyStyle}>{!card.isFaceUp && <p>{card.word}</p>}</div>
      )}

      {activePlayer.role === "operative" &&
        selectedCard !== card &&
        !card.isFaceUp && (
          <div style={opStyle}>{!card.isFaceUp && <p>{card.word}</p>}</div>
        )}

      {activePlayer.role === "operative" &&
        selectedCard === card &&
        !card.isFaceUp && (
          <div style={opStyleSelected}>
            {!card.isFaceUp && <p>{card.word}</p>}
          </div>
        )}

      {activePlayer.role === "operative" && card.isFaceUp && (
        <div style={opStyleFlipped}>{!card.isFaceUp && <p>{card.word}</p>}</div>
      )}
    </div>
  );
}

export default Card;
