const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const server = require("http").createServer(app);

app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
	return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

server.listen(PORT, () => {
	console.log(
		`The server is up and running. The app is listening on Port ${PORT}`,
	);
});
