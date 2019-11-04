import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Lattice from '../lattice';
import { PlayEnums } from '../../enums';
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

const propTypes = {
	checkerboard: PropTypes.array,
	onClick: PropTypes.func
};

function checkerboard({ checkerboard, onClick }) {
	return (
		<div className="checkerboard">
			{
				checkerboard.map((row, rowIndex) => (
					row.map((item, columnIndex) => {
						let status;

						if (item === PLAY_1) {
							status = CIRCLE;
						}
						if (item === PLAY_2) {
							status = FORK;
						}
						return (
							<Lattice.TicTacToc
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

export default checkerboard;