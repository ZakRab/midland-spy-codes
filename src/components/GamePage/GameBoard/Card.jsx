import React, { useState } from "react";
import useGameContext from "../../../context/GameContext";

function Card({ card }) {
	const { activePlayer, setSelectedCard, selectedCard } = useGameContext();
	const spyStyle = {
		backgroundColor: card.color,
		aspectRatio: "1/1",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "1.5em",
		color: "#fff",
		textTransform: "uppercase",
		fontFamily: "Poppins, sans serif",
	};
	const opStyle = {
		aspectRatio: "1/1",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "1.5em",
		color: "#212020",
		textTransform: "uppercase",
	};
	return (
		<div onClick={() => setSelectedCard(card)}>
			{activePlayer.role === "spymaster" && (
				<div style={spyStyle}>
					{!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}
				</div>
			)}
			{activePlayer.role === "operative" && selectedCard !== card && (
				<div style={opStyle}>
					{!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}
				</div>
			)}
			{activePlayer.role === "operative" &&
				selectedCard === card &&
				!card.isFaceUp && (
					<div>{!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}</div>
				)}
			{activePlayer.role === "operative" && card.isFaceUp && (
				<div>{!card.isFaceUp ? <p>{card.word}</p> : <p>fliped</p>}</div>
			)}
		</div>
	);
}

export default Card;
