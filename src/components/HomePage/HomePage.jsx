import React, { useMemo, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useNavigate, Navigate } from "react-router-dom";


function HomePage() {

  // const lobbyError = useMemo(
  //   () => Lobby.length = 4
  //   [Lobby]
  // );

  return (
    <div>
      <h1 className="">Welcome to Codename</h1>
      <div>
        <TextField
          id="Name"
          label="Name"
          variant="outlined"
          // value="name"
          onChange={(e) => setActivePlayer({ name: e.target.value, isHost(false) })} />
      </div>
      <div>
        <TextField
          id="Lobby"
          label="Lobby"
          variant="outlined"
          // value="lobby"
          onChange={(e) => setLobby(e.target.value)} />
      </div>
      <Button
        variant="outlined"
        // disabled={nameError || lobbyError}
        onClick={() => { Navigate("/game") }}
      >Go to Lobby</Button>
      <Button
        variant="outlined"
        // disabled={nameError || lobbyError}
        onClick={() => { Navigate("/game") }}
        onChange={(e) => { setIsHost(true) }}
      >Create Lobby</Button>
      <footer>Created by 1&&0</footer>
    </div>
  );
}

export default HomePage;