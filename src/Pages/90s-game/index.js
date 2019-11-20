import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BackgroundDashLine from '../../images/90s-game/background-dash-line.png';
import Default from '../../images/90s-game/you-default.png';
import TurnLeft from '../../images/90s-game/you-turnleft.png';
import TurnRight from '../../images/90s-game/you-turnright.png';
import HP from './hp';
import Distance from './distance';
import StartView from './start-view';
import './style.scss';

const PREFIX_CLASS = "game-of-90s";

const Turn = {
	LEFT: 'left',
	RIGHT: 'right',
};

const {
	LEFT,
	RIGHT,
} = Turn;

const propTypes = {};

function GameOf90s() {
	const [startGame, setStartGame] = useState(false);
	const [directionImage, setDirectionImage] = useState(Default);
	const [offset, setOffset] = useState();
	const [roadWidth, setRoadWidth] = useState(0);
	const player = useRef(null);

	function move(path) {
		const offset = player.current.offsetLeft;
		const moveDistance = 30;

		if (path === LEFT) {
			return offset + moveDistance;
		} else if (path === RIGHT) {
			return offset - moveDistance;
		}
	}

	function changeDirection(event) {
		const keyCode = event.keyCode;

		if (keyCode === 39) {
			setDirectionImage(TurnLeft);
			if (roadWidth < (move(LEFT))) return;
			setOffset(move(LEFT));
		} else if (keyCode === 37) {
			setDirectionImage(TurnRight);
			if (20 > (move(RIGHT))) return;
			setOffset(move(RIGHT));
		} else {
			setDirectionImage(Default);
		}
	}

	useEffect(() => {
		const playerWidth = player.current.width;
		const viewportWidth = window.innerWidth;

		setRoadWidth(viewportWidth - playerWidth);
	}, []);

	return (
		<div className={PREFIX_CLASS} onKeyDown={changeDirection} onKeyUp={() => {setDirectionImage(Default);}} tabIndex="0">
			<HP nowHp={100}></HP>
			<img src={BackgroundDashLine}></img>
			<Distance nowTime={0}></Distance>
			<img src={directionImage} className={`${PREFIX_CLASS}__player`} ref={player} style={{ left: offset }}></img>
			<StartView onClick={() => {setStartGame(false);}} isVisible={startGame}/>
		</div>
	);
}

GameOf90s.propTypes = propTypes;

export default GameOf90s;
