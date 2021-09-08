import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './chordProgressionTools.css';
 
export default function chordProgressionBoxTools() {
	return (
		<div className="chordProgressionBoxTools">
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["far", "play-circle"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["fas", "stop"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["far", "circle"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["far", "pause-circle"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["fas", "backward"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["fas", "forward"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["fas", "volume-mute"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBoxTools tool">
				<FontAwesomeIcon icon={["fas", "volume-up"]} className="tool-icon" />
			</div>
		</div>
	);
}
