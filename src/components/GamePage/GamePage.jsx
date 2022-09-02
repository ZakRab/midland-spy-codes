import React from "react";
import useGameContext from "../../context/GameContext";
import Clue from "./GameBoard/Clue";
import GameBoard from "./GameBoard/GameBoard";
import TeamSelect from "./TeamSelect/TeamSelect";
import { useParams } from "react-router-dom";
import useSocket from "../../hooks/useSocket";

function GamePage() {
  const { lobby } = useParams();

  const { joinTeam, sendClue, sendCards, sendSelectedCard } = useSocket(lobby);

  const { gameStatus, players } = useGameContext();
  return (
    <div>
      <div className="">
        <img src="https://czechgames.com/for-press/codenames/codenames-13.png"></img>
      </div>
      <TeamSelect joinTeam={joinTeam} sendCards={sendCards} players={players} />
      {gameStatus == "started" && <Clue sendClue={sendClue}></Clue>}
      {gameStatus == "started" && (
        <GameBoard sendSelectedCard={sendSelectedCard}></GameBoard>
      )}
    </div>
  );
}

export default GamePage;
