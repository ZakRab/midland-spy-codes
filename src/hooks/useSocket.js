import { io } from "socket.io-client";
import useGameContext from "../../src/context/GameContext";
import { useEffect, useRef } from "react";

export default function useSocket(lobby) {
  const {
    activePlayer,
    setPlayers,
    setWinningTeam,
    setActivePlayer,
    activeTeam,
    setClue,
    setCards,
    setActiveTeam,
    setSelectedCard,
    setGameStatus,
    setBtnCounter,
  } = useGameContext();

  const socketRef = useRef;
  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SOCKET_SERVER, {
      query: {
        name: activePlayer.name,
        isHost: activePlayer.isHost,
        lobby,
      },
    });

    socketRef.current.on("user connect", ({ name, isHost }) => {
      if (activePlayer.isHost) {
        setPlayers((curr) => {
          let newPlayers = [...curr, { name, isHost, team: null }];
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

    socketRef.current.on("join team", ({ player, team, role }) => {
      if (activePlayer.isHost) {
        setPlayers((curr) => {
          let newPlayers = curr.map((p) => {
            if (p.name === player.name) {
              p.team = team;
              p.role = role;
            }
            return p;
          });
          socketRef.current.emit("update players", newPlayers);
          return newPlayers;
        });
      }
    });

    socketRef.current.on("send clue", (clue) => {
      setClue(clue);
    });

    socketRef.current.on("send cards", (cards) => {
      if (!activePlayer.isHost) {
        setCards(cards);
        setGameStatus("started");
      }
    });

    socketRef.current.on("end turn", () => {
      setBtnCounter(3);
      setClue(null);
      setActiveTeam((curr) => (curr === "blue" ? "red" : "blue"));
    });

    socketRef.current.on("end game", (winningTeam) => {
      setGameStatus("game over");
      setWinningTeam(winningTeam);
    });

    socketRef.current.on("send selected card", ({ card, activeTeam }) => {
      if (card.type === "bomb") {
        let winningTeam = activeTeam === "blue" ? "red" : "blue";
        return endGame(winningTeam);
      }
      setSelectedCard(null);
      setCards((curr) =>
        curr.map((c) => {
          if (c.word === card.word) {
            c.isFaceUp = true;
          }
          return c;
        })
      );
      if (card.type !== activeTeam && activePlayer.isHost) {
        endTurn();
      } else {
        setBtnCounter((curr) => {
          if (curr === 1 && activePlayer.isHost) {
            endTurn();
            return 3;
          }
          return curr - 1;
        });
      }
    });
  }, []);

  function joinTeam(player, team, role) {
    setActivePlayer((curr) => ({ ...curr, role, team }));
    socketRef.current.emit("join team", {
      player,
      team,
      role,
    });
  }

  function sendClue(clue) {
    socketRef.current.emit("send clue", clue);
  }
  function sendCards(cards) {
    socketRef.current.emit("send cards", cards);
  }

  function sendSelectedCard(card) {
    socketRef.current.emit("send selected card", { card, activeTeam });
  }

  function endTurn() {
    socketRef.current.emit("end turn");
  }

  function endGame(winningTeam) {
    socketRef.current.emit("end game", winningTeam);
  }
  // delete me
  return { joinTeam, sendSelectedCard, sendCards, endGame, endTurn, sendClue };
}
