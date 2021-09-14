import React from "react";
import "./notes.css";

export default function notes(props) {
	if (!props.data) return <div></div>;

	const notelist = props.data.map((item, index) => {
		return (
			<div
				key={index}
				onClick={() => props.changeTonic(index)}
				className={props.tonic === index ? "note active" : "note" }
				title={item.label}
			>
				<p className="non-selectable">{item.label}</p>
			</div>
		);
	});

	return <div className="notes">{notelist}</div>;
}
