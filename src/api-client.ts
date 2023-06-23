import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContestList = async () => {
	const res = await axios.get(`${API_SERVER_URL}/contests`);
	return res.data.contests;
};

export const fetchContest = async (contestId) => {
	const res = await axios.get(
		`${API_SERVER_URL}/contest/${contestId}`,
	);
	// console.log(contestId);
	return res.data.contest;
};
