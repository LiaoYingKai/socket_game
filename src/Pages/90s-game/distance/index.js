import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Corp from '../../../images/90s-game/Corp.png';
import Home from '../../../images/90s-game/home.png';

import './style.scss';

const propTypes = {
	nowTime: PropTypes.number
};

const defaultProps = {
	nowTime: 0
};

function Distance({ nowTime }) {

	return (
		<div className='distance'>
			<div className="image-icon">
				<img src={Home}></img>
				<img src={Corp}></img>
			</div>
			<div className="progress-bar">
				<div style={{ width: `${nowTime/90 * 100}%` }}></div>
			</div>
		</div>
	);
}

Distance.propTypes = propTypes;
Distance.defaultProps = defaultProps;

export default Distance;
