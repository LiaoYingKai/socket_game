import React from 'react';
import './style.scss';
const propTypes = {};

function Loading() {
	return (
		<div className="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

Loading.propTypes = propTypes;

export default Loading;