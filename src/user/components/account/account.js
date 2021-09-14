import React from "react";
import "./account.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Account() {
	return (
		<div className="profile">
			<div className="form">
				<h2 className="title">Profile</h2>
				<div className="form-body">
					<div className="form-item">
						<div className="form-label">Name</div>
						<div className="form-input">
							<input type="text" value=""></input>
						</div>
					</div>
					<div className="form-item">
						<div className="form-label">Email</div>
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
		</div>
	);
}
