import React, { createContext, useContext, useState } from "react";

export const GameContext = createContext(null);
const [cards, setCards] = useState([]);
const [activePlayer, setActivePlayer] = useState({
  name: null,
  isHost: false,
  team: null,
});
const [gameStatus, setGameStatus] = useState(null);
const [players, setPlayers] = useState([]);
const [activeTeam, setActiveTeam] = useState(null);

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider(props) {
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

export default useGameContext;
