import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import SelectPokerBlock from '../../components/select-poker-block';
import './style.scss';

const PREFIX_CLASS = 'poker-boast';

const propTypes = {};

function PokerBoast() {
	return (
		<div className={PREFIX_CLASS}>
			<SelectPokerBlock/>
		</div>
	);
}

PokerBoast.propTypes = propTypes;

export default PokerBoast;
