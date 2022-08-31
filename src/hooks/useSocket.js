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

    socketRef.current.on("join team", ({ player, team, role }) => {
      if (activePlayer.isHost) {
        setPlayers((curr) => {
          let newPlayers = curr.map((p) => {
            if (p.name == player.name) {
              p.team = team;
              p.role = role;
            }
            socketRef.current.emit("update players", newPlayers);
            return player;
          });
        });
      }
    });
  }, []);

  function joinTeam(player, team, role) {
    socketRef.current.emit("join team", {
      player,
      team,
      role,
    });
  }

  return { joinTeam };
}
