import React, { createContext, useContext } from "react";

export const GameContext = createContext(null);


export function useGameContext() {

  const [cards, setCards] = useState([]);
  const [activePlayer, setActivePlayer] = useState({ name: null, host: null, team: null });
  const [gameStatus, setGameStatus] = useState(null);



  return useContext(GameContext);
}

export function GameProvider(props) {
  return (
    <GameContext.Provider value={{ cards, serCards, activePlayer, setActivePlayer, setStatus, setGameStatus }}>{props.children}</GameContext.Provider>
  );
}

export default useGameContext