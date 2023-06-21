import Header from "./header";
import ContestList from "./contest-list";

const App = ({ initialData }) => {
	console.log({ initialData });
	return (
		<div className="container" title="Hello React">
			<Header message="Naming Contests" />
			<ContestList contests={initialData.contests} />
		</div>
	);
};

export default App;
