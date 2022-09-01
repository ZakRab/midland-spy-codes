import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, useContext, useState, useCallback } from "react";

export const GameContext = createContext(null);

export default function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider(props) {
  const [cards, setCards] = useState([]);
  const [activePlayer, setActivePlayer] = useState({
    name: null,
    isHost: false,
    team: null,
    role: null,
  });
  const [gameStatus, setGameStatus] = useState(null);
  const [players, setPlayers] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);
  const [selected, setSelected] = useState(null);

  let types = [
    "red",
    "blue",
    "red",
    "bomb",
    "red",
    "red",
    "blue",
    "safe",
    "red",
    "safe",
    "blue",
    "blue",
    "blue",
    "blue",
    "red",
    "safe",
  ];

  function createCards(words) {
    words.map((word) => {
      let newCard = {
        key: word,
        word: word,
        type: types.pop(),
        isFaceUp: false,
      };
      setCards((curr) => [...curr, newCard]);
    });
  }

  return (
    <GameContext.Provider
      value={{
        cards,
        setCards,
        activePlayer,
        setActivePlayer,
        gameStatus,
        setGameStatus,
        players,
        setPlayers,
        activeTeam,
        setActiveTeam,
        createCards,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
