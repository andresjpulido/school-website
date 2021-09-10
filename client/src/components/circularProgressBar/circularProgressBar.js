import React, { useState, useEffect } from "react";
import "./circularProgressBar.css";

export default function CircularProgressBar() {
	const [form, setForm] = useState({ progress: 10 });

	let r = 90;
	let c = 0;
	var pct = 0;
	 
	c = Math.PI * (r * 2);
 
	if (form.progress < 0) {
		setForm((form) => ({ ...form, "progress": 0 }));
	}
	if (form.progress > 100) {
        setForm((form) => ({ ...form, "progress": 10 }));
	}

	pct = ((100 - form.progress) / 100) * c;
 

	const handleChange = (ev) => {
		ev.persist();
		setForm((form) => ({ ...form, [ev.target.name]: ev.target.value }));
	};

	return (
		<div id="cont" data-pct={form.progress} pct={pct}>
			<svg
				id="svg"
				width="200"
				height="200"
				viewport="0 0 100 100"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					r="90"
					cx="100"
					cy="100"
					fill="transparent"
					strokeDasharray="565.48"
					strokeDashoffset="0"
				></circle>
				<circle
					id="bar"
					r="90"
					cx="100"
					cy="100"
					fill="transparent"
					strokeDasharray="565.48" 
                    strokeDashoffset={pct}                    
				></circle>
			</svg>
			 
		</div>
	);
}