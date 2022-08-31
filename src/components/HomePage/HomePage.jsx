import React, { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useGameContext from "../../context/GameContext";
import { Grid } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();
  const { setActivePlayer } = useGameContext();
  const [lobby, setLobby] = useState("");
  const [name, setName] = useState("");
  const lobbyError = useMemo(() => lobby.length <= 3, [lobby]);
  const nameError = useMemo(() => name.length == 0, [name]);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <h1 className="">Welcome to Codename</h1>
        <div>
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>Must have a name</div>
        </div>
        <div>
          <TextField
            id="Lobby"
            label="Lobby"
            variant="outlined"
            value={lobby}
            onChange={(e) => setLobby(e.target.value)}
          />
          <div>Must be 4 characters or click CREATE LOBBY</div>
        </div>
        <Button
          variant="outlined"
          disabled={nameError || lobbyError}
          onClick={(e) => {
            setActivePlayer({ name, isHost: false, team: null });
            navigate(`/game/:${lobby}`);
          }}
        >
          Go to Lobby
        </Button>
        <Button
          variant="outlined"
          disabled={nameError || !(!nameError && lobbyError)}
          onClick={(e) => {
            let lobby = (Math.random() + 1).toString(36).substring(7);
            setActivePlayer({ name, isHost: true, team: null });
            navigate(`/game/:${lobby}`);
          }}
        >
          Create Lobby
        </Button>
        <footer>Created by 1&&0</footer>
      </Grid>
    </Grid>
  );
}

export default HomePage;
