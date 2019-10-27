import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Checkerboard from '../components/checkerboard';
import { PlayEnums } from '../enums';
import '@babel/polyfill';
import './style.scss';

const {
	PLAY_1,
	PLAY_2,
} = PlayEnums;

const initCheckerboard = [['','',''],['','',''],['','',''],];

const propTypes = {};

function Layout() {
	const [checkerboard, setCheckerboard] = useState(initCheckerboard);
	const [play, setPlay] = useState(PLAY_1);

	async function _handelClick(rowIndex, columnIndex) {
		if (checkerboard[rowIndex][columnIndex]) return;
		checkerboard[rowIndex][columnIndex] = play;
		await setCheckerboard(Array.from(checkerboard));
		console.log(PLAY_1, _handleJudgeVictory(PLAY_1));
		console.log(PLAY_2, _handleJudgeVictory(PLAY_2));

		_handleChangePlay();
	}

	function _handleChangePlay() {
		if (play === PLAY_1) {
			setPlay(PLAY_2);
		} else {
			setPlay(PLAY_1);
		}
	}

	function _handleJudgeVictory(play) {
		let isWin = false;

		checkerboard.forEach((row , index) => {
			// row win
			if (row.every(item => item === play)) {
				isWin = true;
			}
			// column win
			if (checkerboard[0][index] === play && checkerboard[0][index] === checkerboard[1][index] && checkerboard[1][index] === checkerboard[2][index]) {
				isWin = true;
			}
		});
		// oblique win
		if (checkerboard[1][1] === play) {
			if (checkerboard[1][1] === checkerboard[0][2] && checkerboard[1][1] === checkerboard[2][0]) {
				isWin = true;
			}
			if (checkerboard[1][1] === checkerboard[0][0] && checkerboard[1][1] === checkerboard[2][2]) {
				isWin = true;
			}
		}

		return isWin;
	}

	return (
		<div className="layout">
			<Checkerboard
				checkerboard={checkerboard}
				onClick={_handelClick}
			/>
		</div>
	);
}

Layout.propTypes = propTypes;

export default Layout;