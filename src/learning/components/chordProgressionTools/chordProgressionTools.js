import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chordProgressionTools.css";

export default function ChordProgressionBoxTools() {
	const [muted, setMuted] = useState(false);
	const handleVolumen = (muted) => {
		setMuted(muted);
	};

	return (
		<div className="chordProgressionBoxTools">
			<div className="chordProgressionBox-tool">
				<FontAwesomeIcon icon={["fas", "play"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBox-tool">
				<FontAwesomeIcon icon={["fas", "stop"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBox-tool">
				<FontAwesomeIcon icon={["far", "circle"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBox-tool">
				<FontAwesomeIcon icon={["fas", "pause"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBox-tool">
				<FontAwesomeIcon icon={["fas", "backward"]} className="tool-icon" />
			</div>
			<div className="chordProgressionBox-tool">
				<FontAwesomeIcon icon={["fas", "forward"]} className="tool-icon" />
			</div>
			<div
				className={
					muted ? "chordProgressionBox-tool-active" : "chordProgressionBox-tool"
				}
				onClick={() => {
					handleVolumen(true);
				}}
			>
				<FontAwesomeIcon icon={["fas", "volume-mute"]} className="tool-icon" />
			</div>
			<div
				className={
					muted ? "chordProgressionBox-tool" : "chordProgressionBox-tool-active"
				}
				onClick={() => {
					handleVolumen(false);
				}}
			>
				<FontAwesomeIcon icon={["fas", "volume-up"]} className="tool-icon" />
			</div>
		</div>
	);
}
