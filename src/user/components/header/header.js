import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useDispatch } from "react-redux";
import {signOut} from "../../../redux/actions/authAction";

export default function Header() {
	let history = useHistory();
	const dispatch = useDispatch();
	const [mainMenu, setMainMenu] = useState(0);
	const mainMenuOptions = [{id:0, path:"/home", label:"Home"}, {id:0, path:"/learning", label:"Learning"}, {id:0, path:"/profile", label:"Profile"}, {id:0, path:"/settings", label:"Settings"}];
	const mainMenuList = mainMenuOptions.map((option, index) => {
		return (
			<div
				className={
					mainMenu === index
						? "nav-item-active"
						: "nav-item"
				}
				onClick={() => go(option.path, index)} key={index}
			>
				{option.label}
			</div>
		);
	});
	const go = (path, id) => {
		history.push(path);
		setMainMenu(id);
	};

	const handleSignOut=()=>{		 
		dispatch(signOut());
	}

	return (
		<div className="header">
			<div className="logo">
				<div className="logo-background">
					<div className="logo-font non-selectable">H</div>
				</div>
				<div className="logo-label non-selectable">Harmonies</div>
			</div>
			<div className="nav">
			 {mainMenuList}
			</div>
			<div className="">
				<FontAwesomeIcon icon={["fas", "sign-out-alt"]} className="logo-sign-out" onClick={()=>{handleSignOut()}}/>
			</div>
			<div> </div>
		</div>
	);
}
