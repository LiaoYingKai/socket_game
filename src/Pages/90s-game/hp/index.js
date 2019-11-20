import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
	nowHp: PropTypes.number
};

const defaultProps = {
	nowHp: 100,
};

function HP({ nowHp }) {
	const HP = nowHp / 100;

	let hpStatus="more-hp";

	if (HP < 0.3) {
		hpStatus = "less-hp";
	} else if (HP >=0.3 && HP<0.85) {
		hpStatus = "middle-hp";
	} else {
		hpStatus="more-hp";
	}

	return (
		<div className='hp'>
			<p> HP </p>
			<div>
				<div style={{ width: `${HP * 100}%` }} className={hpStatus}></div>
			</div>
		</div>
	);
}

HP.propTypes = propTypes;
HP.defaultProps = defaultProps;

export default HP;
