import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { useDispatch } from "react-redux";
import {signIn} from "../../../redux/actions/authAction";

export default function Login() {
	 
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(signIn());
	};

	return (
		<div className="login">
			<div className="login-header">
				<div className="login-header-logo">
					<div className="login-header-logo-background">
						<div className="login-header-logo-font non-selectable">H</div>
					</div>
					<div className="login-header-logo-label non-selectable">
						Harmonies<div>&trade;</div>
					</div>
				</div>
			</div>

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
