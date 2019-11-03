import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { PathEnums } from '../../route/config';
import ImageLink from '../../components/image-link';
import './style.scss';

const {
	TIC_TAC_TOC,
	GOMOKU
} = PathEnums;

const propTypes = {};

function Lobby() {
	return (
		<div className="lobby">
			<div className="lobby__title"> 請選擇遊戲 </div>
			<div className="lobby__content">
				<ImageLink
					imageSrc={'https://lh3.googleusercontent.com/AswZr3s2goU6BxNLCcPkV9AANJEIGh7we_8tv5LS7d6vCiyTGeS67nVfVSbZJEzC4mw'}
				/>
				<ImageLink
					imageSrc={'http://587.renju.org.tw/p/4.jpg'}
				/>
			</div>
		</div>
	);
}

Lobby.propTypes = propTypes;

export default Lobby;
