import React from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";
import { useParams } from "react-router-dom";
import useSocket from "../../hooks/useSocket";

function GamePage() {
  const { lobby } = useParams();
  const { joinOPBlue, joinOPRed, joinSMBlue, joinSMRed } = useSocket(lobby);
  const { gameStatus, players } = useGameContext();
  return (
    <div>
      <h1>Game</h1>
      <TeamSelect
        joinOPBlue={joinOPBlue}
        joinSMBlue={joinSMBlue}
        joinSMRed={joinSMRed}
        joinOPRed={joinOPRed}
        players={players}
      />
      {gameStatus == "started" && <Clue></Clue>}
      {gameStatus == "started" && <GameBoard></GameBoard>}
    </div>
  );
}

export default GamePage;
