import React from "react";
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
    "@media (max-width: 600px)": {
      aspectRatio: "initial",
    },
  };
  const opStyle = {
    "@media screen and (max-width: 600px)": {
      aspectRatio: "initial",
    },
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
    border: "2px solid hotpink",
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
    "@media (max-width: 600px)": {
      aspectRatio: "initial",
    },
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
    "@media (max-width: 600px)": {
      aspectRatio: "initial",
      // border: "3px solid yellow",
    },
  };
  return (
    <div onClick={() => setSelectedCard(!card.isFaceUp ? card : null)}>
      {activePlayer.role === "spymaster" && (
        <div className="test" style={spyStyle}>
          {!card.isFaceUp && <p>{card.word}</p>}
        </div>
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
