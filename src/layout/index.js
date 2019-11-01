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
				setPlayStatus(PLAYING);
			});
			ws.on('PLAY_1', () => {
				setPlay(PLAY_1);
			});
			ws.on('PLAY_2', () => {
				setPlay(PLAY_2);
			});
			ws.on('nowPlay', (nowPlay) => {
				setNowPlay(nowPlay);
			});
			ws.on('notNowPlay', (message) => {
				console.log(message);
			});
			ws.on('multipleAdd', (message) => {
				console.log(message);
			});
			ws.on('updateChess',(checkerboard) => {
				setCheckerboard(checkerboard);
			});
			ws.on('gameResult', (result) => {
				_handleShowMessage(result);
			});
			ws.on('leaveGame', () => {
				setPlayStatus(NONE);
			});
		}
	},[ws]);

	function _handelClick(rowIndex, columnIndex) {
		if (!ws) return;
		// 下棋
		ws.emit('addChess', { play, rowIndex, columnIndex, });
	}

	function _handleShowMessage(result) {
		if (result === 'flat') {
			setVisible(true);
			setMessage('平手');
		} else {
			setVisible(true);
			setMessage(`${result} 獲勝`);
		}
	}

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