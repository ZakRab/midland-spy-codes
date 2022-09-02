import React, { useState } from "react";
import useGameContext from "../../../context/GameContext";

function Card({ card }) {
  const { activePlayer, setSelectedCard } = useGameContext();

  return (
    <div onClick={() => setSelectedCard(card)}>
      {activePlayer.role === "spymaster" && (
        <div style={{ backgroundColor: card.color }}>
          <p>{card.word}</p>
        </div>
      )}
      {activePlayer.role === "operative" && (
        <div>
          <p>{card.word}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
