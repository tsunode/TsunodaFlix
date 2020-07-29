import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterVideo from './pages/Register/Video';
import RegisterCategory from './pages/Register/Category';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={RegisterVideo} path="/cadastro-video" />
				<Route component={RegisterCategory} path="/cadastro-video" />
				<Route component={ () => (<div>Error</div>)}  />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
