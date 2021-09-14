import React, { useState } from "react";
import Circle from "../../../components/circle";
import Intervals from "../../../components/intervals";
import Notes from "../../../components/notes";
import Keyboard from "../../../components/keyboard";
import Sheet from "../../../components/sheet";
import ChordProgression from "../../../components/chordProgressionBox";
import ChordProgressionBoxTools from "../../../components/chordProgressionTools";
import "./circlekeyboard.css";

export default function CircleKeyboard() {
	const notes = [
		{ id: 0, label: "C" },
		{ id: 1, label: "C#" },
		{ id: 2, label: "D" },
		{ id: 3, label: "D#" },
		{ id: 4, label: "E" },
		{ id: 5, label: "F" },
		{ id: 6, label: "F#" },
		{ id: 7, label: "G" },
		{ id: 8, label: "G#" },
		{ id: 9, label: "A" },
		{ id: 10, label: "A#" },
		{ id: 11, label: "B" },
		{ id: 12, label: "Eb" },
		{ id: 13, label: "Bb" },
		{ id: 14, label: "Ab" },
	];

	const [tonic, settonic] = useState(0);
	const [config, setconfig] = useState({
		showBlackKeys: false,
	});

	const [progression, setProgression] = useState(["Dm7", "CM7", "Fm"]);

	const changeTonic = (id) => {
		let tonic = notes[id];
		settonic(id);
		console.log("setting ", tonic);
	};

	const addChord = (chord) => {
		setProgression([...progression, chord]);
	};

	const delChord = (chord) => {
		const newTodos = progression.filter((t) => t !== chord);
		setProgression(newTodos);
	};

	const updChord = (index, chord) => {
		const newTodos = [...progression];
		newTodos[index] = chord;
		setProgression(newTodos);
	};

	return (
		<div className="circleKeyboard">
			<Notes changeTonic={changeTonic} data={notes} tonic={tonic} />
			<Circle changeTonic={changeTonic} tonic={tonic} config={config} />
			<div>
				Armonizacion de la escala
				<Intervals
					addChord={addChord}
					delChord={delChord}
					updChord={updChord}
				/>
				Creacion de progresion
				<div className="chordprogressionDiv">
					<ChordProgressionBoxTools />
					<ChordProgression
						progression={progression}
						addChord={addChord}
						delChord={delChord}
						updChord={updChord}
					/>
				</div>
				<div>
					<Sheet />
					write midi choose scales show imagescreate samples create secuence how
					improvisa chords ...
				</div>
			</div>
		</div>
	);
}
