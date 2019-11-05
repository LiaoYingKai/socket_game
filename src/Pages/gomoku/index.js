import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlayTitle from '../../components/play-title';
import { PlayEnums, PlayStatus } from '../../enums';
import webSocket from 'socket.io-client';
import Lattice from '../../components/lattice';
import Message from '../../components/message';
import Modal from '../../components/modal';
import Button from '../../components/button';
import Checkerboard from '../../components/checkerboard';
import './style.scss';

const {
	NONE,
	LOADING,
	PLAYING,
} = PlayStatus;
const {
	PLAY_1,
	PLAY_2,
} = PlayEnums;
const {
	GomokuStatusEnums,
} = Lattice.Gomoku;

const {
	BLOCK,
	WHITE,
} = GomokuStatusEnums;

const propTypes = {};
const initCheckerboard = createCheckerboard();
const socketUrl = 'https://kai-game-server.herokuapp.com/gomoku';

function createCheckerboard() {
	let checkerboard = [];

	for (let i = 0; i < 20; i++) {
		checkerboard[i] = [];
		for (let j = 0; j < 20; j++) {
			checkerboard[i][j] = '';
		}
	}
	return checkerboard;
}
function Gomoku() {
	const [playStatus, setPlayStatus] = useState(NONE);
	const [play, setPlay] = useState('');
	const [nowPlay, setNowPlay] = useState('');
	const [checkerboard, setCheckerboard] = useState(initCheckerboard);
	const [modalMessage, setModalMessage] = useState('');
	const [isModalVisible, setModalVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isMessageVisible, setMessageVisible] = useState(false);
	const [ws,setWs] = useState(null);

	function _handleConnectWebSocket() {
		setWs(webSocket(socketUrl));
		setPlayStatus(LOADING);
	}

	function _handleDisconnectWebSocket() {
		ws.close();
		setPlayStatus(NONE);
	}
	function _handlePlayChess(rowIndex, columnIndex) {
		if (!ws) return;
		// 下棋
		ws.emit('addChess', { play, rowIndex, columnIndex, });
	}
	function _handleClickBack() {
		if (!ws) return;

		ws.emit('init');
		setPlayStatus(NONE);
		setModalVisible(false);
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
			ws.on('updateChess',(checkerboard) => {
				setCheckerboard(checkerboard);
			});
			ws.on('notNowPlay', (message) => {
				_handleShowMessage(message);
			});
			ws.on('multipleAdd', (message) => {
				_handleShowMessage(message);
			});
			ws.on('gameResult', (result) => {
				_handleShowModal(result);
			});
			ws.on('init', (checkerboard) => {
				setCheckerboard(checkerboard);
			});
			ws.on('leaveGame', () => {
				setModalVisible(true);
				setModalMessage('對方已離開');
				setPlayStatus(NONE);
			});
		}
	},[ws]);

	function _renderButton() {
		if (playStatus === NONE) {
			return <Button 
				onClick={_handleConnectWebSocket}
			> 開始遊戲 </Button>;
		} 
		if (playStatus === LOADING) {
			return <Button 
				onClick={_handleDisconnectWebSocket}
			> 取消遊戲 </Button>;
		}
	}
	function _handleShowModal(result) {
		if (result === 'flat') {
			setModalVisible(true);
			setModalMessage('平手');
		} else {
			setModalVisible(true);
			setModalMessage(`${result} 獲勝`);
		}
	}
	function _handleShowMessage(message) {
		setMessageVisible(true);
		setMessage(message);
		setTimeout(() => {
			setMessageVisible(false);
		}, 1000);
	}
	return (
		<div className="gomoku">
			<PlayTitle
				status={playStatus}
				play={play === PLAY_1 ? '黑棋': '白棋'}
				nowPlay={nowPlay === PLAY_1 ? '黑棋': '白棋'}
			/>
			<Checkerboard
				checkerboard={checkerboard}
				onClick={_handlePlayChess}
				Lattice={Lattice.Gomoku}
				play1={BLOCK}
				play2={WHITE}
				type={Checkerboard.TypeEnums.GOMOKU}
			/>
			{_renderButton()}
			<Modal 
				onClick={_handleClickBack}
				isVisible={isModalVisible}
				message={modalMessage}
			/>
			<Message
				isVisible={isMessageVisible}
				message={message}
			/>
		</div>
	);
}

Gomoku.propTypes = propTypes;

export default Gomoku;
