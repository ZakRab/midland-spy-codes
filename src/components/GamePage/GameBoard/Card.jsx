import React, { useState } from "react";
import useGameContext from "../../../context/GameContext";

function Card({ card }) {
	const { activePlayer, setSelectedCard, selectedCard } = useGameContext();

	return (
		<div onClick={() => setSelectedCard(card)}>
			{activePlayer.role === "spymaster" && (
				<div style={{ backgroundColor: card.color }}>
					{!card.isFaceUp && <p>{card.word}</p>}
				</div>
			)}
			{activePlayer.role === "operative" && selectedCard !== card && (
				<div>{!card.isFaceUp && <p>{card.word}</p>}</div>
			)}
			{activePlayer.role === "operative" && selectedCard === card && (
				<div style={{ border: "2px solid green" }}>
					{!card.isFaceUp && <p>{card.word}</p>}
				</div>
			)}
		</div>
	);
}

export default Card;
