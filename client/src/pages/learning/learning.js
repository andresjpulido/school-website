import React, { useState } from "react";
import LearningMenu from "../../components/learningMenu";
import Courses from "../../components/courses";
import Lessons from "../../components/lessons";
import "./learning.css";

export default function Learning() {
	const [learning, setLearning] = useState(0);
	const changeOption = (option) => {
		setLearning(option);
	};
	const learningOptions = ["Lessons", "Courses", "Exercises", "Guided"];

	return (
		<div>
			<LearningMenu
				learning={learning}
				changeOption={changeOption}
				learningOptions={learningOptions}
			/>

			{learning === 1 && <Courses />}
			{learning === 0 && <Lessons />}
			{learning === 2 && <Lessons />}
			{learning === 3 && <Lessons />}
		</div>
	);
}
