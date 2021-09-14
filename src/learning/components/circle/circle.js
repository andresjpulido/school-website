import React, { useState } from "react";
import "./circle.css";

export default function Circle(props) {
	const [selectedNote, setSelectedNote] = useState(0);


	const click = (tonic, id) => {
		console.log("id ::", id);
		props.changeTonic(tonic);
		setSelectedNote(id)
	};

	return (
		<div className="circle">
			<svg version="1.1" id="svgcircle" viewBox="0 0 708.66141 708.66141">
				<defs id="defs4">
					<linearGradient id="linearGradient7240">
						<stop offset="0" id="stop7242" />
						<stop id="stop7258" offset="0.80153686" />
						<stop offset="1" id="stop7244" />
					</linearGradient>
					<filter id="filter5244">
						<feColorMatrix
							id="feColorMatrix5246"
							values="0.7064 0 0 0.209878 0.1468 0 0.7064 0 0.209878 0.1468 0 0 0.7064 0.209878 0.1468 0 0 0 1 0"
						/>
					</filter>
					<radialGradient
						id="radialGradient7246"
						cx="-646.13599"
						cy="-340.56314"
						fx="-646.13599"
						fy="-340.56314"
						r="154.63744"
						gradientUnits="userSpaceOnUse"
						gradientTransform="matrix(-0.94647102,0.25360615,-0.25882058,-0.96592541,-1195.2676,-577.02211)"
					/>
				</defs>

				<g id="layer1" transform="translate(-17.74223,-171.8247)">
					<g
						transform="matrix(0.83103448,0,0,0.83103448,609.48566,-186.91009)"
						id="g4171"
					>
						<path
							transform="matrix(0.96592583,-0.25881905,0.25881905,0.96592583,0,0)"
							d="M -83.779633,754.88995 A 414.28571,414.28571 0 0 1 -139.28339,962.03281 L -498.06534,754.88995 Z"
							id="1"
							onClick={() => {
								click(9, 1)								 
							}}
							fill={
								props.tonic === 9 || selectedNote === 1
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(0.96592583,-0.25881905,0.25881905,0.96592583,0,0)"
							id="2"
							d="m -912.35104,754.88993 a 414.28571,414.28571 0 0 1 55.50375,-207.14282 l 358.78195,207.14284 z"
							onClick={() => click(12, 2)	}
							fill={
								props.tonic === 12 || selectedNote === 2
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)"
							id="3"
							d="m -394.49646,404.72116 a 414.28571,414.28571 0 0 1 -55.50376,207.14286 L -808.78217,404.72116 Z"
							onClick={() => click(2, 3)	}
							fill={
								props.tonic === 2 || selectedNote === 3
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)"
							d="m -1223.0679,404.72114 a 414.28571,414.28571 0 0 1 55.5038,-207.14282 l 358.78193,207.14284 z"
							id="4"
							onClick={() => click(14, 4)	}
							fill={
								props.tonic === 14 || selectedNote === 4
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(0.25881905,-0.96592583,0.96592583,0.25881905,0,0)"
							id="5"
							d="M -488.50079,-53.892262 A 414.28571,414.28571 0 0 1 -544.00455,153.25059 L -902.7865,-53.892262 Z"
							onClick={() => click(7, 5)	}
							fill={
								props.tonic === 7 || selectedNote === 5
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(0.25881905,-0.96592583,0.96592583,0.25881905,0,0)"
							d="m -1317.0722,-53.892281 a 414.28571,414.28571 0 0 1 55.5037,-207.142819 l 358.782,207.142838 z"
							id="6"
							onClick={() => click(1, 6)	}
							fill={
								props.tonic === 1|| selectedNote === 6
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							d="m -340.60425,-498.06537 a 414.28571,414.28571 0 0 1 -55.50376,207.14286 l -358.78194,-207.14286 z"
							id="7"
							transform="matrix(-0.25881905,-0.96592583,0.96592583,-0.25881905,0,0)"
							onClick={() => click(0, 7)	}
							fill={
								props.tonic === 0|| selectedNote === 7
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							id="8"
							d="m -1169.1757,-498.06539 a 414.28571,414.28571 0 0 1 55.5038,-207.14282 l 358.78195,207.14284 z"
							transform="matrix(-0.25881905,-0.96592583,0.96592583,-0.25881905,0,0)"
							onClick={() => click(6, 8)	}
							fill={
								props.tonic === 6|| selectedNote === 8
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							d="M 9.5645447,-808.78217 A 414.28571,414.28571 0 0 1 -45.939216,-601.63931 L -404.72116,-808.78217 Z"
							id="9"
							transform="matrix(-0.70710678,-0.70710678,0.70710678,-0.70710678,0,0)"
							onClick={() => click(5, 9)	}
							fill={
								props.tonic === 5 || selectedNote === 9
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							id="10"
							d="m -819.00687,-808.78218 a 414.28571,414.28571 0 0 1 55.50376,-207.14282 l 358.78195,207.14283 z"
							transform="matrix(-0.70710678,-0.70710678,0.70710678,-0.70710678,0,0)"
							onClick={() => click(11, 10)	}
							fill={
								props.tonic === 11 || selectedNote === 10
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(-0.96592583,-0.25881905,0.25881905,-0.96592583,0,0)"
							id="11"
							d="m 468.17795,-902.78656 a 414.28571,414.28571 0 0 1 -55.50376,207.14285 L 53.892246,-902.78656 Z"
							onClick={() => click(13, 11)	}
							fill={
								props.tonic === 13 || selectedNote === 11
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(-0.96592583,-0.25881905,0.25881905,-0.96592583,0,0)"
							d="m -360.39346,-902.78658 a 414.28571,414.28571 0 0 1 55.50375,-207.14282 l 358.781956,207.14284 z"
							id="12"
							onClick={() => click(4, 12)	}
							fill={
								props.tonic === 4 || selectedNote === 12
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
					</g>
					<g
						id="g6146"
						transform="matrix(0,-0.58232795,0.58232795,0,-127.63468,359.80167)"
					>
						<path
							id="13"
							d="M -83.779633,754.88995 A 414.28571,414.28571 0 0 1 -139.28339,962.03281 L -498.06534,754.88995 Z"
							transform="matrix(0.96592583,-0.25881905,0.25881905,0.96592583,0,0)"
							onClick={() => click(9, 13)	}
							fill={
								  selectedNote === 13
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							d="m -912.35104,754.88993 a 414.28571,414.28571 0 0 1 55.50375,-207.14282 l 358.78195,207.14284 z"
							id="14"
							transform="matrix(0.96592583,-0.25881905,0.25881905,0.96592583,0,0)"
							onClick={() => click(3, 14)	}
							fill={
								 selectedNote === 14
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							d="m -394.49646,404.72116 a 414.28571,414.28571 0 0 1 -55.50376,207.14286 L -808.78217,404.72116 Z"
							id="15"
							transform="matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)"
							onClick={() => click(2, 15)	}
							fill={
								  selectedNote === 15
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							id="16"
							d="m -1223.0679,404.72114 a 414.28571,414.28571 0 0 1 55.5038,-207.14282 l 358.78193,207.14284 z"
							transform="matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)"
							onClick={() => click(8, 16)	}
							fill={
								 selectedNote === 16
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							d="M -488.50079,-53.892262 A 414.28571,414.28571 0 0 1 -544.00455,153.25059 L -902.7865,-53.892262 Z"
							id="17"
							transform="matrix(0.25881905,-0.96592583,0.96592583,0.25881905,0,0)"
							onClick={() => click(7, 17)	}
							fill={
								 selectedNote === 17
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							id="18"
							d="m -1317.0722,-53.892281 a 414.28571,414.28571 0 0 1 55.5037,-207.142819 l 358.782,207.142838 z"
							transform="matrix(0.25881905,-0.96592583,0.96592583,0.25881905,0,0)"
							onClick={() => click(1, 18)	}
							fill={
								 selectedNote === 18
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(-0.25881905,-0.96592583,0.96592583,-0.25881905,0,0)"
							id="19"
							d="m -340.60425,-498.06537 a 414.28571,414.28571 0 0 1 -55.50376,207.14286 l -358.78194,-207.14286 z"
							onClick={() => click(0, 19)	}
							fill={
								 selectedNote === 19
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>

						<path
							transform="matrix(-0.25881905,-0.96592583,0.96592583,-0.25881905,0,0)"
							d="m -1169.1757,-498.06539 a 414.28571,414.28571 0 0 1 55.5038,-207.14282 l 358.78195,207.14284 z"
							id="20"
							onClick={() => click(6, 20)	}
							fill={
								 selectedNote === 20
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>

						<path
							transform="matrix(-0.70710678,-0.70710678,0.70710678,-0.70710678,0,0)"
							id="21"
							d="M 9.5645447,-808.78217 A 414.28571,414.28571 0 0 1 -45.939216,-601.63931 L -404.72116,-808.78217 Z"
							onClick={() => click(5, 21)	}
							fill={
								 selectedNote === 21
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							transform="matrix(-0.70710678,-0.70710678,0.70710678,-0.70710678,0,0)"
							d="m -819.00687,-808.78218 a 414.28571,414.28571 0 0 1 55.50376,-207.14282 l 358.78195,207.14283 z"
							id="22"
							onClick={() => click(11, 22)	}
							fill={
								 selectedNote === 22
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							d="m 468.17795,-902.78656 a 414.28571,414.28571 0 0 1 -55.50376,207.14285 L 53.892246,-902.78656 Z"
							id="23"
							transform="matrix(-0.96592583,-0.25881905,0.25881905,-0.96592583,0,0)"
							onClick={() => click(10, 23)	}
							fill={
								 selectedNote === 23
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
						<path
							id="24"
							d="m -360.39346,-902.78658 a 414.28571,414.28571 0 0 1 55.50375,-207.14282 l 358.781956,207.14284 z"
							transform="matrix(-0.96592583,-0.25881905,0.25881905,-0.96592583,0,0)"
							onClick={() => click(4, 24)	}
							fill={
								 selectedNote === 24
									? "var(--tertiary-knob-color)"
									: "var(--primary-bg-color)"
							}
							stroke="var(--secundary-bg-color)"
						/>
					</g>
				</g>
				<g id="layer2" transform="translate(-17.74223,-171.8247)">
					<circle
						r="344.28571"
						cy="-411.95898"
						cx="-495.55573"
						transform="matrix(-0.96592583,-0.25881904,0.25881904,-0.96592583,0,0)"
						id="path4167-7"
						fill="none"
						stroke="none"
					/>
					<g
						transform="matrix(0.54500605,0.14603393,-0.14603393,0.54500605,647.24873,109.11264)"
						id="g5162"
					>
						<path d="m -899.03576,840.23015 1238.44702,0" id="path5150" />
						<path id="path5152" d="m -279.81225,221.00664 0,1238.44706" />
						<path id="path5154" d="M -816.07553,530.6184 256.45105,1149.8419" />
						<path
							d="M 29.799515,303.96686 -589.42402,1376.4935"
							id="path5156"
						/>
						<path
							d="M -589.42398,303.96687 29.799532,1376.4934"
							id="path5158"
						/>
						<path id="path5160" d="M 256.45107,530.6184 -816.07557,1149.8419" />
					</g>
					<circle
						id="circle5170"
						transform="matrix(-0.96592583,-0.25881904,0.25881904,-0.96592583,0,0)"
						cx="-495.55573"
						cy="-411.95898"
						r="241"
						fill="none"
						stroke="none"
					/>
					<circle
						r="152.63744"
						cy="-411.95898"
						cx="-495.55573"
						transform="matrix(-0.96592583,-0.25881903,0.25881903,-0.96592583,0,0)"
						id="circle5172"
						fill="var(--tertiary-knob-color)"
						stroke="var(--primary-bg-color)"
					/>
				</g>
				<g id="layer3" transform="translate(-17.74223,-171.8247)">
					<text x="188.58383" y="646.69849" id="text6338">
						<tspan id="tspan6340" x="188.58383" y="646.69849">
							f
						</tspan>
					</text>
					<text id="text6258" y="254.52745" x="350.71402">
						<tspan y="254.52745" x="350.71402" id="tspan6260">
							C
						</tspan>
					</text>
					<text x="476.94247" y="281.80154" id="text6262">
						<tspan id="tspan6264" x="476.94247" y="281.80154">
							G
						</tspan>
					</text>
					<text id="text6266" y="381.76605" x="593.15063">
						<tspan y="381.76605" x="593.15063" id="tspan6268">
							D
						</tspan>
					</text>
					<text x="643.6582" y="524.15698" id="text6270">
						<tspan id="tspan6272" x="643.6582" y="524.15698">
							A
						</tspan>
					</text>
					<text id="text6274" y="673.74078" x="614.36383">
						<tspan y="673.74078" x="614.36383" id="tspan6276">
							E
						</tspan>
					</text>
					<text x="520.41962" y="786.87787" id="text6278">
						<tspan id="tspan6280" x="520.41962" y="786.87787">
							B
						</tspan>
					</text>
					<text
						transform="scale(0.92918574,1.0762111)"
						id="text6282"
						y="784.65704"
						x="335.72534"
					>
						<tspan y="784.65704" x="335.72534" id="tspan6284">
							G♭
							<tspan id="tspan6691" />
						</tspan>
					</text>
					<text x="168.22937" y="787.19434" id="text6286">
						<tspan id="tspan6288" x="168.22937" y="787.19434">
							D♭
							<tspan id="tspan6689" />
						</tspan>
					</text>
					<text id="text6290" y="672.73059" x="70.901756">
						<tspan y="672.73059" x="70.901756" id="tspan6292">
							A♭
							<tspan id="tspan6687" />
						</tspan>
					</text>
					<text x="47.627644" y="524.23816" id="text6294">
						<tspan id="tspan6296" x="47.627644" y="524.23816">
							E♭
							<tspan id="tspan6683" />
						</tspan>
					</text>
					<text id="text6298" y="382.79654" x="98.155571">
						<tspan y="382.79654" x="98.155571" id="tspan6300">
							B♭
							<tspan id="tspan6685" />
						</tspan>
					</text>
					<text x="221.4754" y="280.75082" id="text6302">
						<tspan id="tspan6304" x="221.4754" y="280.75082">
							F
						</tspan>
					</text>
					<text x="356.43158" y="342.71564" id="text6306">
						<tspan id="tspan6308" x="356.43158" y="342.71564">
							a
						</tspan>
					</text>
					<text id="text6310" y="368.67764" x="455.01099">
						<tspan y="368.67764" x="455.01099" id="tspan6312">
							e
						</tspan>
					</text>
					<text x="526.56372" y="445.8093" id="text6314">
						<tspan id="tspan6316" x="526.56372" y="445.8093">
							b
						</tspan>
					</text>
					<text id="text6318" y="543.96124" x="545.50909">
						<tspan y="543.96124" x="545.50909" id="tspan6320">
							f♯
							<tspan id="tspan6693" />
						</tspan>
					</text>
					<text x="514.5509" y="649.88409" id="text6322">
						<tspan id="tspan6324" x="514.5509" y="649.88409">
							c♯
						</tspan>
					</text>
					<text id="text6326" y="712.58368" x="441.80423">
						<tspan y="712.58368" x="441.80423" id="tspan6328">
							g♯
							<tspan id="tspan6703" />
						</tspan>
					</text>
					<text x="332.2655" y="738.36554" id="text6330">
						<tspan id="tspan6332" x="332.2655" y="738.36554">
							e♭
							<tspan id="tspan7270" />
						</tspan>
					</text>
					<text id="text6334" y="708.73608" x="239.51712">
						<tspan y="708.73608" x="239.51712" id="tspan6336">
							b♭
							<tspan id="tspan7268" />
						</tspan>
					</text>
					<text id="text6342" y="545.35266" x="157.8896">
						<tspan y="545.35266" x="157.8896" id="tspan6344">
							c
						</tspan>
					</text>
					<text x="181.83133" y="438.21008" id="text6346">
						<tspan id="tspan6348" x="181.83133" y="438.21008">
							g
						</tspan>
					</text>
					<text id="text6350" y="371.7081" x="255.1403">
						<tspan y="371.7081" x="255.1403" id="tspan6352">
							d
						</tspan>
					</text>
					<text id="text7272" y="793.18408" x="244.17238">
						<tspan y="793.18408" x="244.17238" id="tspan7274">
							C♯
							<tspan id="tspan7276" />
						</tspan>
					</text>
					<text
						x="421.98813"
						y="755.75977"
						id="text7278"
						transform="scale(0.92918574,1.0762111)"
					>
						<tspan id="tspan7280" x="421.98813" y="755.75977">
							F♯
							<tspan id="tspan7282" />
						</tspan>
					</text>
					<text id="text7284" y="754.30377" x="382.69904">
						<tspan y="754.30377" x="382.69904" id="tspan7286">
							d♯
							<tspan id="tspan7288" />
						</tspan>
					</text>
					<text x="277.47723" y="737.65649" id="text7290">
						<tspan id="tspan7292" x="277.47723" y="737.65649">
							a♯
							<tspan id="tspan7294" />
						</tspan>
					</text>
				</g>
				<g id="layer5" transform="translate(-17.74223,-171.8247)">
					<text x="350" y="533" id="text7248">
						<tspan id="tspan7250" x="350" y="533">
							{props.tonic}
						</tspan>
					</text>
				</g>
				<g
					id="layer4"
					transform="translate(-17.74223,-171.8247)"
					display={props.config.showBlackKeys ? "block" : "none"}
				>
					<text x="522.85944" y="317.80942" id="text6589">
						<tspan id="tspan6591" x="522.85944" y="317.80942">
							1♯
						</tspan>
					</text>
					<text id="text6593" y="316.82901" x="184.32707">
						<tspan y="316.82901" x="184.32707" id="tspan6595">
							1♭
						</tspan>
					</text>
					<text x="618.24304" y="430.35333" id="text6639">
						<tspan id="tspan6641" x="618.24304" y="430.35333">
							2♯
						</tspan>
					</text>
					<text id="text6643" y="431.71011" x="90.668594">
						<tspan y="431.71011" x="90.668594" id="tspan6645">
							2♭
						</tspan>
					</text>
					<text id="text6651" y="573.54987" x="649.5484">
						<tspan y="573.54987" x="649.5484" id="tspan6653">
							3♯
						</tspan>
					</text>
					<text x="61.475739" y="574.21344" id="text6655">
						<tspan id="tspan6657" x="61.475739" y="574.21344">
							3♭
						</tspan>
					</text>
					<text id="text6659" y="719.92047" x="122.15668">
						<tspan y="719.92047" x="122.15668" id="tspan6661">
							4♭
						</tspan>
					</text>
					<text x="598.01031" y="727.09308" id="text6663">
						<tspan id="tspan6665" x="598.01031" y="727.09308">
							4♯
						</tspan>
					</text>
					<text id="text6671" y="821.90527" x="475.84277">
						<tspan y="821.90527" x="475.84277" id="tspan6673">
							5♯
						</tspan>
					</text>
					<text x="239.46709" y="829.48145" id="text6675">
						<tspan id="tspan6677" x="239.46709" y="829.48145">
							5♭
						</tspan>
					</text>
					<text x="392.96964" y="852.19897" id="text6679">
						<tspan id="tspan6681" x="392.96964" y="852.19897">
							6♭
						</tspan>
					</text>
				</g>
			</svg>
		</div>
	);
}
