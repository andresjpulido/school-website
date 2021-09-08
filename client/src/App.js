import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from './pages/home'
import Login from './pages/login' 

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route component={Home} path="/home" exact />
					<Route component={Login} path="/login" exact />
					<Route component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
	);
} 