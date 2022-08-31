import React from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";

function GamePage() {

  const {gameStatus} = useGameContext;
  return (
    <div>
      <h1>Game</h1>
      <TeamSelect/>
      {(gameStatus == "started") && <Clue></Clue>}
      {(gameStatus == "started") && <GameBoard></GameBoard>}
    </div>
  );
}

export default GamePage;
