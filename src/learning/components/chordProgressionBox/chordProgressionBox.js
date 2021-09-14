import React, { useState, useEffect } from "react";
import "./chordProgressionBox.css";

export default function ChordProgressionBox(props) {
	const [positionX, setPositionX] = useState(0.5);
	const [idX, setIdX] = useState(0);

	useEffect(() => {

		const interval = setInterval(() => {
			console.log('This will run every second!');

			if(idX < props.progression.length-1){
				setPositionX(positionX+4.5)
				setIdX(idX+1)
			}
			

		  }, 2000);
		  return () => clearInterval(interval);

	});

	const chordList = props.progression.map((chord, index) => {
		return (
			<div className="chordProgressionBox-chord" key={index}>
				<div className="chord-band"></div>
				<div className="chord-middle">{chord}</div>
				<div className="chord-band"></div>
			</div>
		);
	});
	return (
		<div className="chordProgressionBox">
			<div className="chordProgressionBox2">
				<div className="chordProgressionBox-chord-active" style={{marginLeft:`${positionX}rem`}}></div>
				{chordList}
			</div>

			 
		</div>
	);
}
