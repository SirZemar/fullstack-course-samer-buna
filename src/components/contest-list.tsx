import { useEffect, useState } from "react";
// Components
import ContestPreview from "./contest-preview";
// API
import { fetchContestList } from "../api-client";
import Header from "./header";

const ContestList = ({ initialContests, onContestClick }) => {
const [contestList, setContestList] = useState(
	initialContests ?? [],
);

useEffect(() => {
	if (!initialContests) {
		fetchContestList().then((contests) => {
			setContestList(contests);
		});
	}
}, []);

	return (
		<>
			<Header message="Naming Contests" />

			<div className="contest-list">
				{contestList.map((contest) => {
					return (
						<ContestPreview
							key={contest.id}
							contest={contest}
							onClick={onContestClick}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ContestList;
