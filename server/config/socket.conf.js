import { io } from "socket.io-client";

const socketConf = (io) => {
  io.on("connection", (socket) => {
    const { name, isHost, lobby } = socket.handshake.query;
    isHost = isHost === "true";
    socket.join(lobby);
    io.to(lobby).emit("user connect", { name, isHost });
  });
  io.on("update players", (players) => {
    io.to(lobby).emit("update players", players);
  });
};
