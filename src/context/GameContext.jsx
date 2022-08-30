import React, { createContext, useContext, useState } from "react";

export const GameContext = createContext(null);

export function useGameContext() {
  const [players, setPlayers] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);

  return useContext(GameContext);
}

export function GameProvider(props) {
  return (
    <GameContext.Provider
      value={{ players, setPlayers, activeTeam, setActiveTeam }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
