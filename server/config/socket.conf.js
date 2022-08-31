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
  });
};
module.exports = socketConf;
