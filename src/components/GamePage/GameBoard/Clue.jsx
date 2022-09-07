import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useGameContext from "../../../context/GameContext";

function Clue({ sendClue }) {
  const { activePlayer, setClue, clue, activeTeam } = useGameContext();
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    setHasClicked(false);
  }, [activeTeam]);

  return (
    <div style={{ margin: "5px" }}>
      <div>
        {activePlayer.role === "spymaster" && activeTeam === activePlayer.team && (
          <Grid mt={1} container justifyContent="space-between" spacing={1}>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="Clue"
                label="Enter Clue to Send"
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "#212121",
                  backgroundColor: "#e0e0e0",
                }}
                value={clue}
                onChange={(e) => setClue(e.target.value)}
              />
            </Grid>
            <Grid item alignSelf={"center"} xs={3}>
              <Button
                fullWidth
                endIcon={<SendIcon />}
                variant="contained"
                size="large"
                sx={{
                  fontWeight: "bold",
                  color: "#d50000",
                  backgroundColor: "#212121",
                }}
                disabled={
                  activePlayer.team !== activeTeam ||
                  hasClicked ||
                  clue.length === 0
                }
                onClick={() => {
                  setHasClicked(true);
                  sendClue(clue);
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
      {activePlayer.role === "operative" && <h1>{clue}</h1>}
      {activePlayer.role === "operative" &&
        activePlayer.team === activeTeam &&
        clue === "" && <h1> Waiting on clue </h1>}
      {activePlayer.team !== activeTeam && <h1>Waiting on other Team!</h1>}
    </div>
  );
}

export default Clue;
