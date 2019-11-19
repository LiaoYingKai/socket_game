import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import BackgroundRoad from '../../images/90s-game/background-road.png';
import BackgroundDashLine from '../../images/90s-game/background-dash-line.png';
import './style.scss';

const PREFIX_CLASS = "game-of-90s";

const propTypes = {};

function GameOf90s() {
	return (
		<div className={PREFIX_CLASS}>
			<img src={BackgroundDashLine} className={`${PREFIX_CLASS}__dash-line`}></img>
		</div>

	);
}

GameOf90s.propTypes = propTypes;

export default GameOf90s;
