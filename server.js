require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname + "/build"));

//TODO Routes
app.use("/api/welcome", routeHere);
app.use("/api/game", routeHere);
app.use("/api/rules", routeHere);
app.use("/api/about", routeHere);

//** Uncomment for deployment: */
// app.get("*", (req, res) => {
// 	return res.sendFile("/build/index.html", { root: __dirname + "/" });
// });

app.listen(PORT, () => {
	console.log(
		`The server is up and running. The app is listening on Port ${PORT}`,
	);
});
