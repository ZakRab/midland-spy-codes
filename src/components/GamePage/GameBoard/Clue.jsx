import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useGameContext from "../../../context/GameContext";

function Clue({ sendClue }) {
  const { activePlayer, setClue, clue, activeTeam } = useGameContext();
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <div>
      <div>
        {activePlayer.role === "spymaster" && (
          <>
            <TextField
              id="Clue"
              label="Enter Clue to Send"
              variant="outlined"
              value={clue}
              onChange={(e) => setClue(e.target.value)}
            />
            <Button
              variant="contained"
              disabled={
                activePlayer.team !== activeTeam ||
                hasClicked === true ||
                clue === ""
              }
              onClick={() => (setHasClicked(true), sendClue(clue))}
            >
              Send Clue
            </Button>
          </>
        )}
      </div>
      {activePlayer.role === "operative" && <h1>{clue}</h1>}
    </div>
  );
}

export default Clue;
