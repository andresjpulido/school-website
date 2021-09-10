import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Settings from "./pages/settings"; 
import Lessons from "./pages/lessons";
import Profile from "./pages/lessons";
import Learning from "./pages/learning";
import Circle from "./pages/circle";

export default function App() {
	const pending = useSelector((state) => state.commonReducer.pending);
	const redirectTo = useSelector((state) => state.commonReducer.redirectTo);
	const user = useSelector(state => state.authReducer.user)
 
	return (
		<BrowserRouter>
			<div className="App">
				{
					user.active && <Header />
				}
				 
				<Switch>
					<Route component={Home} path="/home" exact />
					<Route component={Login} path="/login" exact />
					<Route component={Settings} path="/settings" exact />
					<Route component={Lessons} path="/lessons" exact />
					<Route component={Learning} path="/learning" exact />
					<Route component={Profile} path="/profile" exact />
					<Route component={Circle} path="/circle" exact />
					<Route component={Login} />
				</Switch>
				{pending && (
					<div className="d-flex justify-content-center">
						<div className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				)}
				{redirectTo && <Redirect to={redirectTo} />}
			</div>
		</BrowserRouter>
	);
}
