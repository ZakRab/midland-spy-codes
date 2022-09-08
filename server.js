const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const server = require("http").createServer(app);
const socketIO = require("socket.io");
const socketConf = require("./server/config/socket.conf");

const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(express.static(__dirname + "/build"));
socketConf(io);

if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
  });
}

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

server.listen(PORT, () => {
  console.log(
    `The server is up and running. The app is listening on Port ${PORT}`
  );
});
