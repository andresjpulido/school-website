import React from "react";
import "./profile.css";

import Account from "../../components/account";
import Media from "../../components/media";

export default function Profile() {
	return (
		<div className="settings">
			<div className="settings-column">				
				<Account />
			</div>
			<div className="settings-column">				
				<Media />
			</div>
		</div>
	);
}
