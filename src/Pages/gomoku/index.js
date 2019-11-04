import React, { useState, } from 'react';
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
	GomokuStatusEnums,
} = Lattice.Gomoku;

const {
	BLOCK,
	WHITE,
} = GomokuStatusEnums;

const propTypes = {};
const initCheckerboard = createCheckerboard();
// const socketUrl = 'https://kai-game-server.herokuapp.com/tic-tac-toc';
const socketUrl = 'http://localhost:8888/gomoku';

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
		console.log(rowIndex, columnIndex);
	}
	function _handleClickBack() {
		// if (!ws) return;

		// ws.emit('init');
		// setPlayStatus(NONE);
		// setModalVisible(false);
	}

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

	return (
		<div className="gomoku">
			<PlayTitle
				status={playStatus}
			/>
			<Checkerboard
				checkerboard={initCheckerboard}
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
