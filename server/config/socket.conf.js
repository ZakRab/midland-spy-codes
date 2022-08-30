const io = require("socket.io")(server, {
	cors: { origin: ["*", "http://localhost:3000"] },
});
