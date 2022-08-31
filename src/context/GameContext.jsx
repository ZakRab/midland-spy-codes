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
  const [selected, setSelected] = useState(null);
  const [isFaceUp, setIsFaceUp] = useState(false);
  const [words,setWords] = useState([])

  const getWords = useMemo( ()=> {
      let randomWords = require("random-words");
      return randomWords(16);
      
  },[gameStatus])
  console.log(words);

  function addCards(e) {
    e.preventDefault();
    let newCard = {
      words: getWords(),
      type: type,
      isFaceUp: isFaceUp,
      selected: selected,
    }
    setCards((curr) => [...curr, newCard]);

    setWords([]);
    setType("");
    setIsFaceUp("");
    setUser("");
    setSelected("")

  }

  // const makeCardsArray = useCallback( ()=>{
  //      setCards((curr) => {
  //       let newCard = current.map((c)=>(
  //         c.word = word,
  //         c.type = type,
  //         c.isFaceUp = isFaceUp,
  //         c.isSelected = isSelected
  //      ))})
  //   },[gameStatus]
  // )

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

