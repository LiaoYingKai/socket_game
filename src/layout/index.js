import React, { useState, useEffect } from 'react';
import Checkerboard from '../components/checkerboard';
import Modal from '../components/modal';
import { PlayEnums } from '../enums';
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
	const [message, setMessage] = useState('');
	const [isVisible, setVisible] = useState(false);

	function _handelClick(rowIndex, columnIndex) {
		if (checkerboard[rowIndex][columnIndex]) return;
		const newCheckerboard = checkerboard.map(row => row.map(item => item));

		newCheckerboard[rowIndex][columnIndex] = play;
		setCheckerboard(newCheckerboard);
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

		// console.table(checkerboard)
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

	function isFlat() {
		return checkerboard.every(row => (
			row.every(column => column)
		));
	}

	useEffect(() => {
		if (isFlat()) {
			setVisible(true);
			setMessage('平手');
		}
		if (_handleJudgeVictory(PLAY_1)) {
			setVisible(true);
			setMessage('o 獲勝');
		}
		if (_handleJudgeVictory(PLAY_2)) {
			setVisible(true);
			setMessage('x 獲勝');
		}
	});

	return (
		<div className="layout">
			<div className="title">
				換 <span className={`title--${play}`}>{play}</span> 下
			</div>
			<Checkerboard
				checkerboard={checkerboard}
				onClick={_handelClick}
			/>
			<Modal 
				onReset={() => {setCheckerboard(initCheckerboard);}}
				onVisible={() => {setVisible(false); setPlay(PLAY_1);}}
				isVisible={isVisible}
				message={message}
			></Modal>
		</div>
	);
}

Layout.propTypes = propTypes;

export default Layout;