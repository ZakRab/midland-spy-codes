const socketConf = (io) => {
  io.on("connection", (socket) => {
    console.log("connected");
    const { name, lobby } = socket.handshake.query;
    let { isHost } = socket.handshake.query;
    isHost = isHost === "true";
    socket.join(lobby);
    io.to(lobby).emit("user connect", { name, isHost });

    socket.on("update players", (players) => {
      console.log("updating players");
      io.to(lobby).emit("update players", players);
    });

    socket.on("join team", ({ player, team, role }) => {
      io.to(lobby).emit("join team", { player, team, role });
    });

    socket.on("send cards", (cards) => {
      io.to(lobby).emit("send cards", cards);
      console.log(cards);
    });

    socket.on("send selected card", (card) => {
      io.to(lobby).emit("send selected card", card);
    });

    socket.on("end turn", () => {
      io.to(lobby).emit("end turn");
    });

    socket.on("end game", () => {
      io.to(lobby).emit("end game");
    });
  });
};
module.exports = socketConf;
