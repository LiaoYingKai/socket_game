import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Checkerboard from '../components/checkerboard';
import './style.scss';

const propTypes = {};

function Layout() {
	const checkerboard = [['x','o','x'],['x','x','o'],['o','o','x'],];

	function _handelClick(rowIndex, columnIndex) {
		checkerboard[rowIndex][columnIndex] = 'o';
		console.table(checkerboard);
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