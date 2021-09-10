import React from "react";
import { useHistory } from "react-router-dom";
import CircularProgressBar from "../circularProgressBar";
import "./courses.css";

export default function Courses() {
    let history = useHistory();

	const go = (path) => {
		history.push(path);
	};

	const courses = [
		{
			name: "Circle of fifths",
			description: "",
			author: "Andres Pulido",
			backcover: "/images/courses/cover1.jpeg",
			frontcover: "/images/courses/cover2.jpeg",
			lessons: [
				{
					name: "",
					score: 0,
					description: "",
				},
				{
					name: "",
					score: 0,
					description: "",
				},
			],
		},
		{
			name: "Test",
			description: "This is a test",
			author: "Andres Pulido",
			backcover: "/images/courses/cover3.jpeg",
			frontcover: "/images/courses/cover4.jpeg",
			lessons: [
				{
					name: "",
					score: 0,
					description: "",
				},
				{
					name: "",
					score: 0,
					description: "",
				},
			],
		},
	];

	const coursesList = courses.map((course, index) => {
		return (
			<div className="courses-item" key={index}>
				<div
					className="courses-item-fcover"
					style={{
						backgroundImage: `url("${course.frontcover}")`,
					}}
				>
					<div>
					<CircularProgressBar />
					</div>
					
                    <div className="form-button" onClick={()=>{go('/circle')}}>Visit</div>
                </div>
				<div
					className="courses-item-bcover"
					style={{
						backgroundImage: `url("${course.backcover}")`,
					}}
				>
					<div className="courses-item-title">{course.name}</div>
					<div className="courses-item-author">by {course.author}</div>
					<div className="courses-item-description">{course.description}</div>
				</div>
			</div>
		);
	});
	return <div className="courses">{coursesList}</div>;
}
