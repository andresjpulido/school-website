import "./intervals.css";

function Intervals() {
	const intervalIdData = ["I", "II", "III", "IV", "V", "VI", "VII"];
	const intervalId = intervalIdData.map((interval, index) => {
		return <div className="intervals-item" key={index}>{interval}</div>;
	});

	const intervalNotesData = ["C", "D", "E", "F", "G", "A", "B"];
	const intervalNotes = intervalNotesData.map((note, index) => {
		return <div className="intervals-item" key={index}>{note}</div>;
	}); 

	return (
		<div className="intervals">
			{intervalId} {intervalNotes}
		</div>
	);
}

export default Intervals;
