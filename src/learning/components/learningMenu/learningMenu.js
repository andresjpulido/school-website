import React from "react";
import "./learningMenu.css";

export default function LearningMenu(props) {

	const learningList = props.learningOptions.map((option, index) => {
		return (
			<div
				className={
					props.learning === index
						? "learning-menu-item active"
						: "learning-menu-item"
				}
				onClick={() => props.changeOption(index)} key={index}
			>
				{option}
			</div>
		);
	});

	return <div className="learning-menu non-selectable">{learningList}</div>;
}
