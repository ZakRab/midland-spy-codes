import { io } from "socket.io-client";
import useGameContext from "../../src/context/GameContext";
import { useEffect } from "react";

export default function useSocket(lobby) {
  const { activePlayer, players, setPlayers } = useGameContext();
  const socketRef = useRef;
  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      query: {
        displayName: activePlayer.name,
        isHost: activePlayer.isHost,
      },
    });
    socketRef.current.on("");
  });
}
