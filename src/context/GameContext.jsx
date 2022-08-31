import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

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
  });
  const [gameStatus, setGameStatus] = useState(null);
  const [players, setPlayers] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);

  const words = useMemo( ()=> {
      let randomWords = require("random-words");
      return randomWords(16);
      
  },[gameStatus])
  console.log(words);

  const makeCardsArray = useCallback( ()=>{

    },[]
  )

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
        words
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

