import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import BackgroundDashLine from '../../images/90s-game/background-dash-line.png';
import Default from '../../images/90s-game/you-default.png'
import './style.scss';

const PREFIX_CLASS = "game-of-90s";

const propTypes = {};

function GameOf90s() {
	return (
		<div className={PREFIX_CLASS}>
			<img src={BackgroundDashLine}></img>
			<img src={Default} className={`${PREFIX_CLASS}__player`}></img>
		</div>
	);
}

GameOf90s.propTypes = propTypes;

export default GameOf90s;
