import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import BackgroundDashLine from '../../images/90s-game/background-dash-line.png';
import Default from '../../images/90s-game/you-default.png';
import HP from './hp';
import Distance from './distance';
import StartView from './start-view';
import './style.scss';

const PREFIX_CLASS = "game-of-90s";

const propTypes = {};

function GameOf90s() {
	const [startGame, setStartGame] = useState(true);

	return (
		<div className={PREFIX_CLASS}>
			<HP nowHp={100}></HP>
			<img src={BackgroundDashLine}></img>
			<Distance nowTime={0}></Distance>
			<img src={Default} className={`${PREFIX_CLASS}__player`}></img>
			<StartView onClick={() => {setStartGame(false);}} isVisible={startGame}/>
		</div>
	);
}

GameOf90s.propTypes = propTypes;

export default GameOf90s;
