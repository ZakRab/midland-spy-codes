import React, { useMemo, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useGameContext from "../../context/GameContext";
import { Grid, Typography } from "@mui/material";

import lobbyCode from "../../shared/functions/lobbyCode";

function HomePage() {
  const navigate = useNavigate();
  const { setActivePlayer, resetGame } = useGameContext();
  const [lobby, setLobby] = useState("");
  const [lobbyTouched, setLobbyTouched] = useState(false);
  const [userTouched, setUserTouched] = useState(false);
  const [name, setName] = useState("");
  const lobbyError = useMemo(() => lobby.length < 5, [lobby]);
  const nameError = useMemo(
    () => name.length === 0 || name.length > 10,
    [name]
  );

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div>
      <div className="image">
        <Grid
          textAlign="center"
          container
          direction="row"
          justifyContent="center"
          rowSpacing={2}
          alignItems="center"
        >
          <Grid item xs={12}>
            <h1 className="game-title">SPY CODE</h1>
          </Grid>
          <Grid
            className="background-card bg-white"
            md={4}
            item
            sx={{
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12}>
              <TextField
                id="Name"
                label="Name"
                variant="filled"
                size="small"
                fullWidth
                sx={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "#212121",
                  backgroundColor: "#e0e0e0",
                  margin: "10px 0",
                }}
                value={name}
                error={nameError && userTouched}
                helperText="Must be less than 10 characters"
                onChange={(e) => {
                  setUserTouched(true);
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Button
              variant="contained"
              color="error"
              size="large"
              fullWidth
              sx={{
                fontWeight: "bold",
                // color: "#212121",
                // backgroundColor: "#304ffe",
              }}
              disabled={nameError || (!nameError && !lobbyError)}
              onClick={(e) => {
                let lobby = lobbyCode(5);
                setActivePlayer({
                  name,
                  isHost: true,
                  team: null,
                  role: null,
                });
                navigate(`/game/${lobby}`);
              }}
            >
              Create Lobby
            </Button>
            <Grid item xs={12}>
              <TextField
                id="Lobby"
                label="Lobby"
                variant="filled"
                size="small"
                fullWidth
                sx={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "#212121",
                  backgroundColor: "#e0e0e0",
                  margin: "10px 0",
                }}
                value={lobby}
                error={lobbyError && lobbyTouched}
                helperText="Must be 5 characters"
                onChange={(e) => {
                  setLobbyTouched(true);
                  setLobby(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="error"
                size="large"
                fullWidth
                sx={{
                  fontWeight: "bold",
                  // color: "#212121",
                  // backgroundColor: "#304ffe",
                }}
                disabled={nameError || (!nameError && lobbyError)}
                onClick={(e) => {
                  setActivePlayer({
                    name,
                    isHost: false,
                    team: null,
                    role: null,
                  });
                  navigate(`/game/${lobby}`);
                }}
              >
                Go to Lobby
              </Button>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
        <Typography mt={2} variant="h6" align={"center"}>
          Created by
        </Typography>
      </div >
    </div >
  );
}

export default HomePage;
