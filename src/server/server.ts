import express from "express";
import os from "os";

import config from "./config";

const server = express();

server.use(express.static("dist"));

server.set("View engine", "ejs");

server.use("/", (req, res) => {
	res.render("index.ejs", {
		initialContent: "Loading...",
	});
});

server.listen(config.PORT, config.HOST, () => {
	console.info(
		`Express sever is listening at ${config.SERVER_URL}`,
		`Free Mem: ${os.freemem() / 1024 / 1024}`,
	);
});
