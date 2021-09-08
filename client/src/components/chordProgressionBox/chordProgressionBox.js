import React, { useState } from "react";
import "./chordProgressionBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChordProgression() {
	const [progression, setprogression] = useState([
		"Cmaj7",
		"E7",
		"Am",
		"",
		"",
		"",
	]);

	const addChord = (chord) => {
		setprogression(...progression, chord);
	}; 

	const chordList = progression.map((chord, index) => {
		return (
			<div className="chordProgression" key={index}>
				{chord}
			</div>
		);
	});
	return (
		<div class="chordProgressionBox">
			<svg viewBox="0 0 297 70" id="svgchords" version="1.1">
				<defs id="defs2" />

				<g
					groupmode="layer"
					id="layer6"
					label="Layer 0"
					transform="translate(0,-20)"
					stroke="var(--primary-bg-color)" 
				>
					<rect
						id="rect826"
						width="296.33334"
						height="63.865131"
						x="0.5291667"
						y="23.325001"
						fill="var(--secundary-bg-color)"
					/>
				</g>
				<g
					groupmode="layer"
					id="layer3"
					label="Layer 1"
					transform="translate(0,-20)"
				>
					<rect
						id="rect817"
						width="296.33334"
						height="31.75"
						x="0.5291667"
						y="39.200016"
						fill="var(--fourth-bg-color)"
					/>
				</g>
				<g
					groupmode="layer"
					id="layer4"
					label="Layer 2"
					transform="translate(0,-20)"
				/>
				<g
					groupmode="layer"
					id="layer7"
					label="verticalbars"
					transform="translate(0,-20)"
				>
					<path
						d="M 21.695834,23.325009 V 86.825013"
						id="path835"
						connector-curvature="0" 
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 42.862501,23.325009 V 86.825013"
						id="path837"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 64.029169,23.325009 V 86.825013"
						id="path839"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 85.195836,23.325009 V 86.825013"
						id="path991"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 106.36251,23.325009 V 86.825013"
						id="path993"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 127.52917,23.325009 V 86.825013"
						id="path995"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 148.69584,23.325009 V 86.825013"
						id="path997"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 169.86251,23.325009 V 86.825013"
						id="path999"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 191.02917,23.325009 V 86.825013"
						id="path1001"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 212.19584,23.325009 V 86.825013"
						id="path1003"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 233.36251,23.325009 V 86.825013"
						id="path1005"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 254.52918,23.325009 V 86.825013"
						id="path1007"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
					<path
						d="M 275.69584,23.325009 V 86.825013"
						id="path1009"
						connector-curvature="0"
						stroke="var(--primary-bg-color)"
					/>
				</g>
				<g
					groupmode="layer"
					id="layer8"
					label="text"
					transform="translate(0,-20)"
				>
					<g groupmode="layer" id="layer9" label="selectedBar">
						<rect
							id="rect983"
							width="17.999607"
							height="42.333336"
							x="-20.108334"
							y="33.908348"
							transform="scale(-1,1)"
							 fill="none"
							stroke="var(--tertiary-knob-color)"
						/>
					</g>
					<text space="preserve" x="3.7041669" y="57.191689" id="text864">
						<tspan role="line" id="tspan862" x="3.7041669" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="24.11412" y="57.191689" id="text864-1">
						<tspan role="line" id="tspan862-5" x="24.11412" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="45.280788" y="57.191689" id="text864-0">
						<tspan role="line" id="tspan862-4" x="45.280788" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="67.164482" y="56.839794" id="text864-19">
						<tspan role="line" id="tspan862-44" x="67.164482" y="56.839794">
							Text
						</tspan>
					</text>
					<text space="preserve" x="87.979248" y="57.191689" id="text864-2">
						<tspan role="line" id="tspan862-1" x="87.979248" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="109.83646" y="56.839794" id="text864-4">
						<tspan role="line" id="tspan862-2" x="109.83646" y="56.839794">
							Text
						</tspan>
					</text>
					<text space="preserve" x="131.00314" y="56.839794" id="text864-00">
						<tspan role="line" id="tspan862-6" x="131.00314" y="56.839794">
							Text
						</tspan>
					</text>
					<text space="preserve" x="152.53493" y="57.191689" id="text864-40">
						<tspan role="line" id="tspan862-55" x="152.53493" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="173.3497" y="57.191689" id="text864-5">
						<tspan role="line" id="tspan862-3" x="173.3497" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="194.51637" y="56.839794" id="text864-42">
						<tspan role="line" id="tspan862-31" x="194.51637" y="56.839794">
							Text
						</tspan>
					</text>
					<text space="preserve" x="216.38683" y="57.543583" id="text864-57">
						<tspan role="line" id="tspan862-39" x="216.38683" y="57.543583">
							Text
						</tspan>
					</text>
					<text space="preserve" x="236.83647" y="56.839794" id="text864-8">
						<tspan role="line" id="tspan862-30" x="236.83647" y="56.839794">
							Text
						</tspan>
					</text>
					<text space="preserve" x="258.36829" y="57.191689" id="text864-3">
						<tspan role="line" id="tspan862-57" x="258.36829" y="57.191689">
							Text
						</tspan>
					</text>
					<text space="preserve" x="278.81793" y="57.191689" id="text864-6">
						<tspan role="line" id="tspan862-41" x="278.81793" y="57.191689">
							Text
						</tspan>
					</text>
				</g>
			</svg>
		</div>
	);
}
