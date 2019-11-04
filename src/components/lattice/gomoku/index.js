import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PREFIX_CLASS = "lattice-gomoku";

const GomokuStatusEnums = {
	NONE: 'none',
	BLOCK: 'block',
	WHITE: 'white',
};

const {
	NONE,
	BLOCK,
	WHITE,
} = GomokuStatusEnums;

const propTypes = {
	onClick: PropTypes.func,
	status: PropTypes.oneOf([NONE, BLOCK, WHITE])
};

function Gomoku({ onClick, status }) {
	return (
		<div className={PREFIX_CLASS} onClick={onClick}>
			<div className={`${PREFIX_CLASS}__${status}`}></div>
		</div>
	);
}

Gomoku.propTypes = propTypes;
Gomoku.GomokuStatusEnums = GomokuStatusEnums;
export default Gomoku;
