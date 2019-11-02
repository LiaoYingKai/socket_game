import React from 'react';
import { config } from './config';
import { RenderRoute } from './renderRoute';

function RouteLayout() {
	return (
		<React.Fragment>
			{RenderRoute(config)}
		</React.Fragment>
	);
}


export default RouteLayout;