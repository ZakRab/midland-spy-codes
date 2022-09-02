import React, { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useGameContext from "../../context/GameContext";
import { Grid } from "@mui/material";
import { yellow, black } from "@mui/material/colors";
import { Bloodtype, BoltRounded } from "@mui/icons-material";

function HomePage() {
  const navigate = useNavigate();
  const { setActivePlayer } = useGameContext();
  const [lobby, setLobby] = useState("");
  const [name, setName] = useState("");
  const lobbyError = useMemo(() => lobby.length <= 4, [lobby]);
  const nameError = useMemo(() => name.length === 0, [name]);

  return (
    <div>
      <Grid
        textAlign="center"
        container
        direction="row"
        justifyContent="center"
        rowSpacing={2}
        alignItems="center"
      >
        <Grid item xs={12}>
          <div className="">
            <img src="https://czechgames.com/for-press/codenames/codenames-13.png"></img>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            sx={{
              fontWeight: "bold",
              color: "#212121",
              backgroundColor: "#ffea00",
            }}
            value={name}
            error={nameError}
            helperText="Must have name"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Lobby"
            label="Lobby"
            variant="outlined"
            sx={{
              fontWeight: "bold",
              color: "#212121",
              backgroundColor: "#ffea00",
            }}
            value={lobby}
            error={lobbyError}
            helperText="Must be 5 characters"
            onChange={(e) => setLobby(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              color: "#212121",
              backgroundColor: "#ffea00",
            }}
            disabled={nameError || lobbyError}
            onClick={(e) => {
              setActivePlayer({ name, isHost: false, team: null, role: null });
              navigate(`/game/${lobby}`);
            }}
          >
            Go to Lobby
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              color: "212121",
              backgroundColor: "#ffea00",
            }}
            disabled={nameError || !(!nameError && lobbyError)}
            onClick={(e) => {
              let lobby = (Math.random() + 1).toString(36).substring(7);
              setActivePlayer({ name, isHost: true, team: null, role: null });
              navigate(`/game/${lobby}`);
            }}
          >
            Create Lobby
          </Button>
        </Grid>
      </Grid>
      {/* <div className="picture1">
        <img src="https://www.pinclipart.com/picdir/big/1-14882_detective-clipart-secret-agent-clipart-silhouette-png-download.png"></img>
      </div> */}
      {/* <div>
        <img
          // style="float: right"
          src="https://www.pinclipart.com/picdir/big/1-14882_detective-clipart-secret-agent-clipart-silhouette-png-download.png"
        ></img>
      </div> */}
    </div>
  );
}

export default HomePage;
