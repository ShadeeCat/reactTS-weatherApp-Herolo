import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import { Favorites } from "./Components/Favorites/Favorites"

import './App.css';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route exact path="/favorites">
					<Favorites />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;