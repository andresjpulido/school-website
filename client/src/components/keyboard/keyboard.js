import React from "react";
import "./keyboard.css";

export default function keyboard() {
	return (
		<div className="keyboard">
			<svg version="1.0" width="1200px">
				<rect
					id="keyw"
					width="23"
					height="149"
					rx="2.4"
					ry="4.8"
					x="1.5"
					y="1.5"
					fill="#fffff0"
				/>
								<rect
					id="keywr"
					width="23"
					height="149"
					rx="2.4"
					ry="4.8"
					x="24"
					y="1.5"
					fill="red"
				/>
				<use x="24" href="#keyw" />
				<use x="48" href="#keyw" fill="red" stroke="red" />
				<use x="72" href="#keyw" />
				<use x="96" href="#keyw" />
				<use x="120" href="#keyw" />
				<use x="144" href="#keyw" />
				<use x="168" href="#keyw" />
				<use x="192" href="#keyw" />
				<use x="216" href="#keyw" />
				<use x="240" href="#keyw" />
				<use x="264" href="#keyw" />
				<use x="288" href="#keyw" />
				<use x="312" href="#keyw" />
				<use x="336" href="#keyw" />
				<use x="360" href="#keyw" />
				<use x="384" href="#keyw" />
				<use x="408" href="#keyw" />
				<use x="432" href="#keyw" />
				<use x="456" href="#keyw" />
				<use x="480" href="#keyw" />
				<use x="504" href="#keyw" />
				<use x="528" href="#keyw" />
				<use x="552" href="#keyw" />
				<use x="576" href="#keyw" />
				<use x="600" href="#keyw" />
				<use x="624" href="#keyw" />
				<use x="648" href="#keyw" />
				<use x="672" href="#keyw" />
				<use x="696" href="#keyw" />
				<use x="720" href="#keyw" />
				<use x="744" href="#keyw" />
				<use x="768" href="#keyw" />
				<use x="792" href="#keyw" />
				<use x="816" href="#keyw" />
				<use x="840" href="#keyw" />
				<use x="864" href="#keyw" />
				  
				<circle
					cx="565"
					cy="139"
					r="4"
					fill="white"
					fill-opacity="0.5"
					stroke="black"
				/>

				<rect
					id="keyb"
					width="9"
					height="99"
					rx="1"
					ry="1"
					x="20.75"
					y="1.75"
					fill="black"
				/>
				<use x="48" href="#keyb" />
				<use x="72" href="#keyb" />
				<use x="120" href="#keyb" />
				<use x="144" href="#keyb" />
				<use x="168" href="#keyb" />
				<use x="216" href="#keyb" />
				<use x="240" href="#keyb" />
				<use x="288" href="#keyb" />
				<use x="312" href="#keyb" />
				<use x="336" href="#keyb" />
				<use x="384" href="#keyb" />
				<use x="408" href="#keyb" />
				<use x="456" href="#keyb" />
				<use x="480" href="#keyb" />
				<use x="504" href="#keyb" />
				<use x="552" href="#keyb" />
				<use x="576" href="#keyb" />
				<use x="624" href="#keyb" />
				<use x="648" href="#keyb" />
				<use x="672" href="#keyb" />
				<use x="720" href="#keyb" />
				<use x="744" href="#keyb" />
				<use x="792" href="#keyb" />
				<use x="816" href="#keyb" />
				<use x="840" href="#keyb" />
				 
				 
			</svg>
		</div>
	);
}
