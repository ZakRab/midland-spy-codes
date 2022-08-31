import { io } from "socket.io-client";
import useGameContext from "../../src/context/GameContext";
import { useEffect, useRef } from "react";

export default function useSocket(lobby) {
  const { activePlayer, setPlayers, players } = useGameContext();
  const socketRef = useRef;
  useEffect(() => {
    socketRef.current = io("http://localhost:8080", {
      query: {
        name: activePlayer.name,
        isHost: activePlayer.isHost,
        lobby,
      },
    });

    socketRef.current.on("user connect", ({ name, isHost }) => {
      console.log("user connecting");
      console.log(name, isHost);
      if (activePlayer.isHost) {
        setPlayers((curr) => {
          let newPlayers = [...curr, { name, isHost, team: null }];
          socketRef.current.emit("update players", newPlayers);
          return newPlayers;
        });
      }
    });
    socketRef.current.on("update players", (newPlayers) => {
      console.log("sadfasdfz");
      if (!activePlayer.isHost) {
        setPlayers(newPlayers);
      }
    });
  }, []);
  function joinSMRed(activePlayer) {
    console.log(players);
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team = "red";
          player.role = "spymaster";
        }
        return player;
      });
      console.log(players);
    });
  }
  function joinOPRed(activePlayer) {
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team = "red";
          player.role = "operative";
        }
        return player;
      });
    });
  }
  function joinSMBlue(activePlayer) {
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team = "blue";
          player.role = "spymaster";
        }
        return player;
      });
    });
  }
  function joinOPBlue(activePlayer) {
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team = "blue";
          player.role = "spymaster";
        }
        return player;
      });
    });
  }
  return { joinOPBlue, joinOPRed, joinSMBlue, joinSMRed };
}
