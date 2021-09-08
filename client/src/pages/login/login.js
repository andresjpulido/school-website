import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';

export default function Login() {
	
	let history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		history.push('/home');
	}

	return (
		<div className="login">
			<div className="login-form">
				<div className="login-service">
					<div className="login-service-logo">
						<FontAwesomeIcon icon={["fab", "google"]} />
					</div>
					<div className="login-service-label">Login in with google</div>
				</div>
				<div className="login-service">
					<div className="login-service-logo">
						<FontAwesomeIcon icon={["fab", "facebook-f"]} />
					</div>
					<div className="login-service-label">Login in with google</div>
				</div>
				<div className="login-service" onClick={handleSubmit}>
					<div className="login-service-logo">
						<FontAwesomeIcon icon={["far", "user"]} />
					</div>
					<div className="login-service-label">Anonymous user</div>
				</div>
			</div>
		</div>
	);
}
