import "./intervals.css";

function Intervals(props) {

	const intervalIdData = ["I", "II", "III", "IV", "V", "VI", "VII"];
	const intervalId = intervalIdData.map((interval, index) => {
		return (
			<div className="intervals-item" key={index}>
				{interval}
			</div>
		);
	});

	const intervalNotesData = ["C", "D", "E", "F", "G", "A", "B"];
	const intervalNotes = intervalNotesData.map((note, index) => {
		return (
			<div className="intervals-item" key={index} onClick={()=>props.addChord(note)}>
				{note}
			</div>
		);
	});

	const chords = ["CM", "DM", "Em", "FM", "G", "Am", "Bmo"];
	const chordsList = chords.map((note, index) => {
		return (
			<div className="intervals-item" key={index} onClick={()=>props.addChord(note)}>
				{note}
			</div>
		);
	});

	const chords7 = ["CM7", "DM7", "Em7", "FM7", "G7", "Am7", "Bm7b5"];
	const chords7List = chords7.map((note, index) => {
		return (
			<div className="intervals-item" key={index} onClick={()=>props.addChord(note)}>
				{note}
			</div>
		);
	});

	return (
		<div className="intervals">
			{intervalId} {intervalNotes} {chordsList} {chords7List}
		</div>
	);
}

export default Intervals;
