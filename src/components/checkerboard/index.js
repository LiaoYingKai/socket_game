import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Lattice from '../lattice';
import './style.scss';
const {
	LatticeStatusEnums,
} = Lattice;

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

						if (item === 'o') {
							status = CIRCLE;
						}
						if (item === 'x') {
							status = FORK;
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

export default checkerboard;