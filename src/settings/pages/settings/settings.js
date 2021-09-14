import React from "react";
import "./settings.css";
import AudiooutputForm from "../../components/audiooutputForm";
import AudioInputForm from "../../components/audioinputForm";
 
export default function Settings() {
	return (
		<div className="settings">
			<div className="settings-column">				
				<AudiooutputForm />
			</div>
			<div className="settings-column">				
				<AudioInputForm />
			</div>
		</div>
	);
}
