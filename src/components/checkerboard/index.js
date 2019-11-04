import React from 'react';
import PropTypes from 'prop-types';
import { PlayEnums } from '../../enums';
import './style.scss';

const {
	PLAY_1,
	PLAY_2,
} = PlayEnums;

const TypeEnums = {
	TIC_TAC_TOC: 'tic-tac-toc',
	GOMOKU: 'gomoku',
};

const {
	TIC_TAC_TOC,
	GOMOKU,
} = TypeEnums;

const propTypes = {
	checkerboard: PropTypes.array,
	onClick: PropTypes.func,
	Lattice: PropTypes.any,
	play1: PropTypes.string,
	play2: PropTypes.string,
	type: PropTypes.oneOfType([
		TIC_TAC_TOC,
		GOMOKU,
	])
};

function checkerboard({ Lattice, checkerboard, onClick, play1, play2, type }) {
	return (
		<div className={`checkerboard__${type}`}>
			{
				checkerboard.map((row, rowIndex) => (
					row.map((item, columnIndex) => {
						let status;

						if (item === PLAY_1) {
							status = play1;
						}
						if (item === PLAY_2) {
							status = play2;
						}
						return (
							<Lattice
								key={`${rowIndex}__${columnIndex}`}
								onClick={() => onClick(rowIndex, columnIndex)}
								status={status}
							/>
						);
					})
				))
			}
		</div>
	);
}

checkerboard.propTypes = propTypes;
checkerboard.TypeEnums = TypeEnums;

export default checkerboard;