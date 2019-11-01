import React, { useState, useEffect } from 'react';
import Checkerboard from '../components/checkerboard';
import Modal from '../components/modal';
import { PlayEnums, PlayStatus } from '../enums';
import webSocket from 'socket.io-client';
import Button from '../components/button';
import Loading from '../components/loading';
import './style.scss';

const {
	PLAY_1,
	PLAY_2,
} = PlayEnums;

const {
	NONE,
	LOADING,
	PLAYING,
} = PlayStatus;

const initCheckerboard = [['','',''],['','',''],['','',''],];

const propTypes = {};

function Layout() {
	const [checkerboard, setCheckerboard] = useState(initCheckerboard);
	const [play, setPlay] = useState('');
	const [nowPlay, setNowPlay] = useState('');
	const [message, setMessage] = useState('');
	const [isVisible, setVisible] = useState(false);
	const [playStatus, setPlayStatus] = useState(NONE);
	const [ws,setWs] = useState(null);

	function _handleConnectWebSocket() {
		//等待連線
		setWs(webSocket('http://localhost:8888'));
		setPlayStatus(LOADING);
	}

	function _handleDisconnectWebSocket() {
		//取消等待
		ws.close();
		setPlayStatus(NONE);
	}

	useEffect(() => {
		if (ws) {
			ws.on('startGame', () => {
				// 開始遊戲
				setPlayStatus(PLAYING);
			});
			// 玩家角色
			ws.on('PLAY_1', () => {
				setPlay(PLAY_1);
			});
			ws.on('PLAY_2', () => {
				setPlay(PLAY_2);
			});
			// 現在是哪一個玩家下棋
			ws.on('nowPlay', (nowPlay) => {
				setNowPlay(nowPlay);
			});
			ws.on('notNowPlay', (message) => {
				// 不是現在的玩家
				console.log(message);
			});
			ws.on('multipleAdd', (message) => {
				// 不是現在的玩家
				console.log(message);
			});
			ws.on('updateChess',(checkerboard) => {
				// 更新棋盤
				setCheckerboard(checkerboard);
			});
			ws.on('gameResult', () => {
				// 判斷勝利
			});
			ws.on('leaveGame', () => {
				// 離開遊戲
				setPlayStatus(NONE);
			});
		}
	},[ws]);

	function _handelClick(rowIndex, columnIndex) {
		if (!ws) return;
		// 下棋
		ws.emit('addChess', { play, rowIndex, columnIndex, });
		// if (checkerboard[rowIndex][columnIndex]) return;
		// const newCheckerboard = checkerboard.map(row => row.map(item => item));

		// newCheckerboard[rowIndex][columnIndex] = play;
		// setCheckerboard(newCheckerboard);
		// _handleChangePlay();
	}

	// function _handleChangePlay() {
	// 	if (play === PLAY_1) {
	// 		setPlay(PLAY_2);
	// 	} else {
	// 		setPlay(PLAY_1);
	// 	}
	// }

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

	function _renderTitle() {
		switch (playStatus) {
			case NONE: {
				return <div className="title"> 請按開始遊戲 </div>;
			}
			case LOADING: {
				return <div className="title title--loading"> 等待另一位玩家 <Loading/> </div>;
			}
			case PLAYING: {
				return (
					<div className="title">
						你是 <span className={`title--${play}`}>{play}</span>
						現在是 <span className={`title--${nowPlay}`}>{nowPlay}</span> 下
					</div>
				);
			}
			default: {
				return null;
			}
		}
	}

	function _renderButton() {
		if (playStatus === NONE) {
			return <Button 
				className="start-game-button"
				onClick={_handleConnectWebSocket}
			> 開始遊戲 </Button>;
		} 
		if (playStatus === LOADING) {
			return <Button 
				className="start-game-button"
				onClick={_handleDisconnectWebSocket}
			> 取消遊戲 </Button>;
		}

	}

	return (
		<div className="layout">
			{_renderTitle()}
			<Checkerboard
				checkerboard={checkerboard}
				onClick={_handelClick}
			/>
			{_renderButton()}
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