import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useGameContext from "../../../context/GameContext";

function Clue({ sendClue }) {
  const { activePlayer, setClue, clue } = useGameContext();

  return (
    <div>
      <div>
        {activePlayer.role === "spymaster" && (
          <TextField
            id="Clue"
            label="Clue"
            variant="contained"
            value={clue}
            onChange={(e) => setClue(e.target.value)}
          />
        )}
      </div>
      <Button variant="contained" onClick={() => sendClue(clue, activePlayer)}>
        Send Clue
      </Button>
      {activePlayer.role === "operative" && <p>{clue}</p>}
    </div>
  );
}

export default Clue;
