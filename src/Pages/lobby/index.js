import React from 'react';
import PropTypes from 'prop-types';
import { PathEnums } from '../../route/config';
import ImageLink from '../../components/image-link';
import Game from '../../images/finish.gif';
import './style.scss';

const {
	TIC_TAC_TOC,
	GOMOKU,
	POKER_BOAST,
	GAME_OF_90S,
} = PathEnums;

const propTypes = {
	history: PropTypes.object,
};

function Lobby({ history }) {

	function redirectPage(url) {
		history.push(url);
	}

	return (
		<div className="lobby">
			<div className="lobby__title"> 請選擇遊戲 </div>
			<div className="lobby__content">
				<ImageLink
					imageSrc={'https://lh3.googleusercontent.com/AswZr3s2goU6BxNLCcPkV9AANJEIGh7we_8tv5LS7d6vCiyTGeS67nVfVSbZJEzC4mw'}
					onClick={() => {redirectPage(TIC_TAC_TOC);}}
				/>
				<ImageLink
					imageSrc={'http://587.renju.org.tw/p/4.jpg'}
					onClick={() => {redirectPage(GOMOKU);}}
				/>
				<ImageLink
					imageSrc={'https://photo.macdown.com/180830/EPS-180830_289/KLpWfrgizk_small.jpg'}
					onClick={() => {redirectPage(POKER_BOAST);}}
				/>
				<ImageLink
					imageSrc={Game}
					onClick={() => {redirectPage(GAME_OF_90S);}}
				/>
			</div>
		</div>
	);
}

Lobby.propTypes = propTypes;

export default Lobby;
