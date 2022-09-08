const socketConf = (io) => {
  io.on("connection", (socket) => {
    const { name, lobby } = socket.handshake.query;
    let { isHost } = socket.handshake.query;
    isHost = isHost === "true";
    socket.join(lobby);
    io.to(lobby).emit("user connect", { name, isHost });

    socket.on("update players", (players) => {
      io.to(lobby).emit("update players", players);
    });

    socket.on("join team", ({ player, team, role }) => {
      io.to(lobby).emit("join team", { player, team, role });
    });

    socket.on("send clue", (clue) => {
      io.to(lobby).emit("send clue", clue);
    });

    socket.on("send cards", (cards) => {
      io.to(lobby).emit("send cards", cards);
    });

    socket.on("send selected card", ({ card, activeTeam }) => {
      io.to(lobby).emit("send selected card", { card, activeTeam });
    });

    socket.on("end turn", () => {
      io.to(lobby).emit("end turn");
    });

    socket.on("end game", (winningTeam) => {
      io.to(lobby).emit("end game", winningTeam);
    });
  });
};
module.exports = socketConf;
