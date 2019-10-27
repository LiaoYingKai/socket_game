import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const PREFIX_CLASS = "lattice";

const LatticeStatusEnums = {
	NONE: 'none',
	CIRCLE: 'circle',
	FORK: 'fork',
};

const propTypes = {
	onClick: PropTypes.func,
	status: PropTypes.oneOf(Object.values(LatticeStatusEnums)),
};

const defaultProps = {
	onClick: () => {},
	status: LatticeStatusEnums.NONE,
};

function Lattice({ onClick, status }) {
	return (
		<div className={cx(PREFIX_CLASS, `${PREFIX_CLASS}__${status}`)} onClick={onClick} ></div>
	);
}

Lattice.propTypes = propTypes;
Lattice.LatticeStatusEnums = LatticeStatusEnums;
Lattice.defaultProps = defaultProps;

export default Lattice;
