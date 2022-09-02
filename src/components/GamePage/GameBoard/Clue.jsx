import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useGameContext from "../../../context/GameContext";

function Clue({ sendClue }) {
  const { activePlayer, setClue, clue, activeTeam } = useGameContext();
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <div style={{ margin: "5px" }}>
      <div>
        {activePlayer.role === "spymaster" && (
          <Grid mt={1} container justifyContent="space-between" spacing={1}>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="Clue"
                label="Enter Clue to Send"
                variant="outlined"
                value={clue}
                onChange={(e) => setClue(e.target.value)}
              />
            </Grid>
            <Grid item alignSelf={"center"} xs={3}>
              <Button
                fullWidth
                endIcon={<SendIcon />}
                variant="contained"
                disabled={
                  activePlayer.team !== activeTeam ||
                  hasClicked ||
                  clue.length === 0
                }
                onClick={() => (setHasClicked(true), sendClue(clue))}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
      {activePlayer.role === "operative" && <h1>{clue}</h1>}
    </div>
  );
}

export default Clue;
