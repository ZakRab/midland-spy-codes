import React, { useMemo, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, navigate } from "react-router-dom";
import useGameContext from "../../context/GameContext"

function HomePage() {
  const navigate = useNavigate();
  const { lobby, setLobby, setActivePlayer } = useGameContext;
  // const lobbyError = useMemo(
  //   () => lobby.length = 4
  //   [lobby]
  // );
  const { name, setName } = useState("");
  return (
    <div>
      <h1 className="">Welcome to Codename</h1>
      <div>
        <TextField
          id="Name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName((e.target.value))}
        />
      </div>
      <div>
        <TextField
          id="Lobby"
          label="Lobby"
          variant="outlined"
          value={lobby}
          onChange={(e) => setLobby(e.target.value)} />
      </div>
      <Button
        variant="outlined"
        // disabled={nameError || lobbyError}
        onClick={(e) => {
          setActivePlayer({ name, isHost: false, team: null })
          navigate(`/game/:${lobby}`)
        }
        }
      >Go to Lobby</Button>
      <Button
        variant="outlined"
        // disabled={nameError || lobbyError}
        onClick={(e) => {
          navigate("/game")
          setActivePlayer({ name, isHost: true, team: null })
        }}
      >Create Lobby</Button>
      <footer>Created by 1&&0</footer>
    </div >
  );
}

export default HomePage;


