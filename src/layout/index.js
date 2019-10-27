import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Checkerboard from '../components/checkerboard';
import { PlayEnums } from '../enums';
import './style.scss';

const {
	PLAY_1,
	PLAY_2,
} = PlayEnums;

const propTypes = {};

function Layout() {
	const [checkerboard, setCheckerboard] = useState([['','',''],['','',''],['','',''],]);
	const [play, setPlay] = useState(PLAY_1);

	function _handelClick(rowIndex, columnIndex) {
		checkerboard[rowIndex][columnIndex] = play;
		setCheckerboard(Array.from(checkerboard));
		if (play === PLAY_1) {
			setPlay(PLAY_2);
		} else {
			setPlay(PLAY_1);
		}
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