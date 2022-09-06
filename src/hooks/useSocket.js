import { io } from "socket.io-client";
import useGameContext from "../../src/context/GameContext";
import { useEffect, useRef } from "react";

export default function useSocket(lobby) {
  const {
    activePlayer,
    setPlayers,
    players,
    setActivePlayer,
    activeTeam,
    setClue,
    cards,
    setCards,
    setActiveTeam,
    setGameStatus,
  } = useGameContext();

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
        console.log(player, team, role);
        setPlayers((curr) => {
          let newPlayers = curr.map((p) => {
            if (p.name === player.name) {
              p.team = team;
              p.role = role;
              console.log(p);
            }
            return p;
          });
          socketRef.current.emit("update players", newPlayers);
          return newPlayers;
        });
      }
    });

    socketRef.current.on("send clue", (clue) => {
      console.log(clue);
      setClue(clue);
    });

    socketRef.current.on("send cards", (cards) => {
      if (!activePlayer.isHost) {
        setCards(cards);
        setGameStatus("started");
        console.log(cards);
      }
    });

    socketRef.current.on("end turn", () =>
      setActiveTeam((curr) => {
        if (curr === "blue") {
          return "red";
        } else {
          return "blue";
        }
      })
    );
    socketRef.current.on("end game", () => setGameStatus("game over"));

    socketRef.current.on("send selected card", (card) => {
      console.log(card);
      if (card.type === activeTeam) {
        setCards((curr) =>
          curr.map((c) => {
            if (c.word === card.word) {
              c.isFaceUp = true;
            }
            return c;
          })
        );
      } else if (card.type === "bomb") {
        endGame();
      } else {
        setCards((curr) =>
          curr.map((c) => {
            if (c.word === card.word) {
              c.isFaceUp = true;
            }
            return c;
          })
        );
        endTurn();
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
    console.log(clue);
    socketRef.current.emit("send clue", clue);
  }
  function sendCards(cards) {
    console.log(cards);
    socketRef.current.emit("send cards", cards);
  }

  function sendSelectedCard(card) {
    socketRef.current.emit("send selected card", card);
  }

  function endTurn() {
    socketRef.current.emit("end turn");
  }

  function endGame() {
    socketRef.current.emit("end game");
  }
  // delete me
  return { joinTeam, sendSelectedCard, sendCards, endGame, endTurn, sendClue };
}
