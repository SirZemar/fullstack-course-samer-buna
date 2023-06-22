import express from "express";
import cors from "cors";

import { connectClient } from "./db";

// import testData from "../test-data.json";

const router = express.Router();

router.use(cors());
router.get("/contests", async (req, res) => {
	const client = await connectClient();

	const contests = await client
		.collection("contests")
		.find()
		.project({
			id: 1,
			categoryName: 1,
			contestName: 1,
			_id: 0,
		})
		.toArray();

	res.send({ contests });
});

router.get("/contest/:contestId", async (req, res) => {
	const client = await connectClient();

	const contest = await client
		.collection("contests")
		.find({ id: req.params.contestId });

	req.send({ contest });
});

export default router;
