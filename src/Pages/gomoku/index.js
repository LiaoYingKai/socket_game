import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import PlayTitle from '../../components/play-title';
import { PlayEnums, PlayStatus } from '../../enums';
import Lattice from '../../components/lattice';
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
const initCheckerboard = [['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x'],['x','o','x','o','o','o','x','x','o','x','o','x','x','o','x']];

function Gomoku() {
	const [playStatus, setPlayStatus] = useState(NONE);

	return (
		<div className="gomoku">
			<PlayTitle
				status={playStatus}
			/>
			{/* <Lattice.Gomoku/>
			<Lattice.Gomoku
				status={Lattice.Gomoku.GomokuStatusEnums.BLOCK}
			/>
			<Lattice.Gomoku
				status={Lattice.Gomoku.GomokuStatusEnums.WHITE}
			/>
			<Lattice.Gomoku/> */}
			<Checkerboard
				checkerboard={initCheckerboard}
				// onClick={_handlePlayChess}
				Lattice={Lattice.Gomoku}
				play1={BLOCK}
				play2={WHITE}
				type={Checkerboard.TypeEnums.GOMOKU}
			/>
		</div>
	);
}

Gomoku.propTypes = propTypes;

export default Gomoku;
