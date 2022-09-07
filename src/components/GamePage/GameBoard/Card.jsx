import React from "react";
import useGameContext from "../../../context/GameContext";

function Card({ card }) {
  const { activePlayer, setSelectedCard, selectedCard } = useGameContext();

  return (
    <div onClick={() => setSelectedCard(card)}>
      {activePlayer.role === "spymaster" && (
        <div style={{ backgroundColor: card.color }}>
          {!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}
        </div>
      )}
      {activePlayer.role === "operative" && selectedCard !== card && (
        <div>{!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}</div>
      )}
      {activePlayer.role === "operative" &&
        selectedCard === card &&
        !card.isFaceUp && (
          <div style={{ border: "2px solid green" }}>
            {!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}
          </div>
        )}
      {activePlayer.role === "operative" && card.isFaceUp && (
        <div style={{ backgroundColor: card.color }}>
          {!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}
        </div>
      )}
    </div>
  );
}

export default Card;
