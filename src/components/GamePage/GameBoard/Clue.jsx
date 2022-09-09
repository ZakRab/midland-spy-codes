import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useGameContext from "../../../context/GameContext";

function Clue({ sendClue }) {
  const { activePlayer, clue, activeTeam, btnCounter } = useGameContext();
  const [clueInput, setClueInput] = useState("");

  return (
    <div style={{ margin: "5px", textAlign: "center" }}>
      <Typography
        style={{
          color: "black",
          marginTop: "0",
          paddingBottom: "0",
          display: "inline",
          variant: "h2",
          fontSize: "25px",
          textAlign: "center",
        }}
      >
        {activeTeam === activePlayer.team ? "Your" : "Their"} turn!
      </Typography>
      <div>
        {activePlayer.role === "spymaster" &&
          activeTeam === activePlayer.team &&
          !clue && (
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
                  value={clueInput}
                  onChange={(e) => setClueInput(e.target.value)}
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
                    activePlayer.team !== activeTeam || clueInput.length === 0
                  }
                  onClick={() => {
                    sendClue(clueInput);
                    setClueInput(null);
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          )}
      </div>

      {activePlayer.team === activeTeam && clue && (
        <Typography
          style={{
            color: "black",
            display: "inline",
            textAlign: "center",
            variant: "h2",
            fontSize: "25px",
            lineHeight: "64px",
            height: "64px",
          }}
        >
          Your clue is: {clue}
        </Typography>
      )}
      {activePlayer.team !== activeTeam && clue && (
        <Typography
          style={{
            color: "black",
            textAlign: "center",
            display: "inline",
            variant: "h2",
            fontSize: "25px",
            lineHeight: "64px",
            height: "64px",
          }}
        >
          Their clue is: {clue}
        </Typography>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0",
        }}
      >
        <div>
          {!clue &&
            (activePlayer.team !== activeTeam ||
              activePlayer.role !== "spymaster") && (
              <Typography
                style={{
                  color: "black",
                  marginTop: "0",
                  textAlign: "center",
                  marginBottom: "0",
                  display: "inline",
                  variant: "h2",
                  fontSize: "25px",
                  lineHeight: "64px",
                  height: "64px",
                }}
              >
                Waiting on clue{" "}
              </Typography>
            )}
        </div>
        <div style={{ marginTop: "0", paddingBottom: "0" }}>
          <Typography
            style={{
              color: "black",
              marginTop: "0",
              paddingBottom: "0",
              display: "inline",
              variant: "h2",
              fontSize: "15px",
            }}
          >
            Flips remaining: {btnCounter}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Clue;
