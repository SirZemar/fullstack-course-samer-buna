import express from "express";
import os from "os";

import config from "./config";
import apiRouter from "./api-router";

const server = express();

server.use(express.static("dist"));

server.set("View engine", "ejs");

server.use("/api", apiRouter);

server.get("/", (req, res) => {
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
