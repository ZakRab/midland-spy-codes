import React, { createContext, useContext } from "react";

export const GameContext = createContext(null);

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider(props) {
  return (
    <GameContext.Provider value={{}}>{props.children}</GameContext.Provider>
  );
}
