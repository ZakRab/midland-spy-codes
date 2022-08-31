import { io } from "socket.io-client";
import useGameContext from "../../src/context/GameContext";
import { useEffect } from "react";

export default function useSocket(lobby) {
  const { activePlayer, setPlayers } = useGameContext();
  const socketRef = useRef;
  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      query: {
        name: activePlayer.name,
        isHost: activePlayer.isHost,
        lobby,
      },
    });

    socketRef.current.on("user connect", ({ name, isHost }) => {
      if (activePlayer.isHost) {
        setPlayers((curr) => {
          let newPlayers = [...curr, { name, isHost }];
          socketRef.current.emit("update players", newPlayers);
          return newPlayers;
        });
      }
    });
    socketRef.current.on("update players", (newPlayers) => {
      if (!activePlayer.isHost) {
        setPlayers(newPlayers);
      }
    });
  });
}
