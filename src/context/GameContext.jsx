import React, { createContext, useContext, useState } from "react";

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
  const [activeTeam, setActiveTeam] = useState(blue);
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
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
