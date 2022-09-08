import React, { useMemo } from "react";
import useGameContext from "../../../context/GameContext";

function Card({ card }) {
  const { activePlayer, setSelectedCard, selectedCard, activeTeam } =
    useGameContext();
  const cardClasses = useMemo(() => {
    let cardClass = "word-card ";
    if (activePlayer.role === "spymaster") {
      cardClass += "spy-card ";
    } else {
      cardClass += "op-card ";
    }

    if (card === selectedCard && activePlayer.role === "operative") {
      cardClass += "op-selected";
    }

    return cardClass;
  }, [activePlayer, selectedCard, card]);
  return (
    <div
      onClick={() => {
        if (!card.isFaceUp && activePlayer.team === activeTeam) {
          setSelectedCard(card);
        } else {
          setSelectedCard(null);
        }
      }}
      className={cardClasses}
      style={{
        backgroundColor:
          activePlayer.role === "spymaster" || card.isFaceUp
            ? card.color
            : "#eedece",
      }}
    >
      {!card.isFaceUp && <p>{card.word}</p>}
    </div>
  );
}

export default Card;
