import "./header.css";

export default function header() {
	return (
		<div className="header">
			<div className="logo">
				<div className="logo-background">
					<div className="logo-font non-selectable">H</div>
				</div>
				<div className="logo-label non-selectable">Harmonies&trade;</div>
			</div>
			<div className="nav">
				<div className="nav-item">Home</div>
				<div className="nav-item">Learning</div>
				<div className="nav-item">You</div>
				<div className="nav-item">Settings</div>
			</div>
		</div>
	);
}
