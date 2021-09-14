import React from "react";
import "./progressionsHistory.css";

export default function ProgressionsHistory(props) {
	let progressionHistoryList = props.data.map((item, index) => {
		return (
			<div className="progression-history-item" key={index}>
				{item.title} - {item.description}
				<div className="progression-history-item-chords">
					{item.chords.map((chord, chordIndex) => {
						return (
							<div key={chordIndex} className="progression-history-item-chord">
								{chord}
							</div>
						);
					})}
				</div>
			</div>
		);
	});
	if (progressionHistoryList.length === 0)
		progressionHistoryList = <div>There is no information available.</div>;

	return (
		<div className="progression-history">
			<h3 className="title">My progressions saved</h3>
			<div className="progression-history-list">{progressionHistoryList}</div>
		</div>
	);
}
