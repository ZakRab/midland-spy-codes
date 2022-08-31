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
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team == "red";
          player.role == "spymaster";
        }
      });
    });
  }
  function joinOPRed(activePlayer) {
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team == "red";
          player.role == "operative";
        }
      });
    });
  }
  function joinSMBlue(activePlayer) {
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team == "blue";
          player.role == "spymaster";
        }
      });
    });
  }
  function joinOPBlue(activePlayer) {
    setPlayers((curr) => {
      curr.map((player) => {
        if (player.name == activePlayer.name) {
          player.team == "blue";
          player.role == "spymaster";
        }
      });
    });
  }
  return { joinOPBlue, joinOPRed, joinSMBlue, joinSMRed };
}
