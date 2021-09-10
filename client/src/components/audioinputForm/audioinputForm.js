import React from "react";
import "./audioinputForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AudioInputForm() {
	return (
		<div className="form">
			<h2>Audio Input</h2>
			<div className="form-body">
				<div className="form-item">
					<div className="form-label">App sound</div>
					<div className="form-input"></div>
				</div>
				<div className="form-item">
					<div className="form-label">Select Device</div>
					<div className="form-input">
						<select>
							<option>xxx</option>
							<option>xxx</option>
							<option>xxx</option>
						</select>
					</div>
					<div className="form-select-icon">
						<FontAwesomeIcon icon={["fas", "angle-down"]} />
					</div>
				</div>
			</div>
		</div>
	);
}
