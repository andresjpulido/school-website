import React, { useState, useEffect } from "react";
import ProgressionsHistory from "../../components/progressionsHistory";
import './home.css';

export default function Home() {
	useEffect(
		() => {
			//
			return () => {
				//cleanup;
			};
		},
		[
			/**/
		]
	);

	let data = [
		{
			title: "title 1",
			description: "description",
			chords: ["CM7", "Dm", "GM"],
		},
        {
			title: "title 2",
			description: "description",
			chords: ["CM7", "Dm", "GM"],
		},
        {
			title: "title 3",
			description: "description",
			chords: ["CM7", "Dm", "GM"],
		},
        {
			title: "title 4",
			description: "description",
			chords: ["CM7", "Dm", "GM"],
		},
	];
	data =[]
	return (
		<div className="home">
			<h2 className="title">Home</h2>
			<ProgressionsHistory data={data} />
		</div>
	);
}
