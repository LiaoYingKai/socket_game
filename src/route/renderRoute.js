import React from 'react';
import { Route, Switch } from 'react-router-dom';

function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}

export function RenderRoute(routes) {
	return (
		<Switch>
			{
				routes.map(route => (
					<RouteWithSubRoutes key={route.path} {...route}/>
				))
			}
		</Switch>
	);
}