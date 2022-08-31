const socketConf = (io) => {
  io.on("connection", (socket) => {
    console.log("connected");
    const { name, isHost, lobby } = socket.handshake.query;
    isHost = isHost === "true";
    socket.join(lobby);
    io.to(lobby).emit("user connect", { name, isHost });
  });
  io.on("update players", (players) => {
    io.to(lobby).emit("update players", players);
  });
};
module.exports = socketConf;
