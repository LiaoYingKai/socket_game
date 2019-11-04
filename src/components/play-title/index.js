import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { PlayStatus } from '../../enums';
import Loading from '../loading';
import './style.scss';

const {
	NONE,
	LOADING,
	PLAYING,
} = PlayStatus;

const propTypes = {
	status: PropTypes.oneOf([NONE,LOADING,PLAYING,]),
	play: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
	nowPlay: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
};

function PlayTitle({ status, play, nowPlay }) {
	function _renderTitle() {
		switch (status) {
			case NONE: {
				return <> 請按開始遊戲 </>;
			}
			case LOADING: {
				return <div className="play-title--loading"> 等待另一位玩家 <Loading/> </div>;
			}
			case PLAYING: {
				return (
					<>
						你是 {play} <br/>
						現在是 {nowPlay} 下
					</>
				);
			}
			default: {
				return null;
			}
		}
	}
	return (
		<div className="play-title">
			{_renderTitle()}
		</div>
	);
}

PlayTitle.propTypes = propTypes;

export default PlayTitle;
