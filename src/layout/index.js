import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Lattice from '../components/lattice';
import './style.scss';

const propTypes = {};

function Layout() {
	return (
		<div className="layout">
			Hello
			<Lattice/>
			<Lattice status={Lattice.LatticeStatusEnums.CIRCLE}/>
			<Lattice status={Lattice.LatticeStatusEnums.FORK}/>
		</div>
	);
}

Layout.propTypes = propTypes;

export default Layout;