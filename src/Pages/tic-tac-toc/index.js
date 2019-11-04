import React, { useState, useEffect } from 'react';
import Checkerboard from '../../components/checkerboard';
import Modal from '../../components/modal';
import { PlayEnums, PlayStatus } from '../../enums';
import webSocket from 'socket.io-client';
import Button from '../../components/button';
import Message from '../../components/message';
import PlayTitle from '../../components/play-title';
import Lattice from '../../components/lattice';
import './style.scss';

const {
	PLAY_1,
	PLAY_2,
} = PlayEnums;

const {
	LatticeStatusEnums,
} = Lattice.TicTacToc;

const {
	CIRCLE,
	FORK,
} = LatticeStatusEnums;

const {
	NONE,
	LOADING,
	PLAYING,
} = PlayStatus;

const initCheckerboard = [['','',''],['','',''],['','',''],];
const socketUrl = 'https://kai-game-server.herokuapp.com/tic-tac-toc';

function TicTacToc() {
	const [checkerboard, setCheckerboard] = useState(initCheckerboard);
	const [play, setPlay] = useState('');
	const [nowPlay, setNowPlay] = useState('');
	const [modalMessage, setModalMessage] = useState('');
	const [isModalVisible, setModalVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isMessageVisible, setMessageVisible] = useState(false);
	const [playStatus, setPlayStatus] = useState(NONE);
	const [ws,setWs] = useState(null);

	function _handleConnectWebSocket() {
		//等待連線
		setWs(webSocket(socketUrl));
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
				_handleShowMessage(message);
			});
			ws.on('multipleAdd', (message) => {
				_handleShowMessage(message);
			});
			ws.on('updateChess',(checkerboard) => {
				setCheckerboard(checkerboard);
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

	function _renderPlay() {
		return (
			<span className={`tic-tac-toc--${play}`}>{play} </span>
		);
	}
	function _renderNowPlay() {
		return (
			<span className={`tic-tac-toc--${nowPlay}`}>{nowPlay}</span>
		);
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
		<div className="tic-tac-toc">
			<PlayTitle
				status={playStatus}
				play={_renderPlay()}
				nowPlay={_renderNowPlay()}
			/>
			<Checkerboard
				checkerboard={checkerboard}
				onClick={_handlePlayChess}
				Lattice={Lattice.TicTacToc}
				play1={CIRCLE}
				play2={FORK}
				type={Checkerboard.TypeEnums.TIC_TAC_TOC}
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

export default TicTacToc;