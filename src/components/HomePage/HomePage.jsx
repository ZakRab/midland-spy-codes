import React, { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useGameContext from "../../context/GameContext";
import { Grid, Typography } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();
  const { setActivePlayer } = useGameContext();
  const [lobby, setLobby] = useState("");
  const [name, setName] = useState("");
  const lobbyError = useMemo(() => lobby.length <= 4, [lobby]);
  const nameError = useMemo(
    () => name.length === 1 || name.length > 10,
    [name]
  );

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
            <div className="spacing picture2">
              <img src="https://czechgames.com/for-press/codenames/codenames-13.png"></img>
            </div>
          </Grid>
          <Grid
            className="background-card bg-white"
            md={4}
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
                error={nameError}
                helperText="Must be less than 10 characters"
                onChange={(e) => setName(e.target.value)}
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
              disabled={name.length === 0 || nameError || !(!nameError && lobbyError)}
              onClick={(e) => {
                let lobby = (Math.random() * 5).toString(36).substring(7);
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
                error={lobbyError}
                helperText="Must be 5 characters"
                onChange={(e) => setLobby(e.target.value)}
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
                disabled={name.length === 0 || (nameError || lobbyError)}
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
          Created by 1&&0
        </Typography>
      </div>
    </div>
  );
}

export default HomePage;
