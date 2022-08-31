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
    role: null,
  });
  const [gameStatus, setGameStatus] = useState(null);
  const [players, setPlayers] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);
  const [selected, setSelected] = useState(null);
  const [isFaceUp, setIsFaceUp] = useState(false);
  const [words,setWords] = useState([])
  const [type, setType] = useState(null)


  const getWords = useMemo( ()=> {
      let randomWords = require("random-words");
      return setWords(randomWords(16));
      
  },[gameStatus])
  console.log(words);

  function addCards(words) {
    let newCard = {}
      words.map((w,idx)=>(
          newCard = {
            word: words[w],
            type: type,
            isFaceUp: isFaceUp,
            selected: selected,
            key: idx
          }
      )
    )
    return setCards((curr) => [...curr, newCard]);
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
        words,
        addCards
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
