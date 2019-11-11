import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import spades1 from '../../images/spades1.jpg';
import spades2 from '../../images/spades2.jpg';
import spades3 from '../../images/spades3.jpg';
import spades4 from '../../images/spades4.jpg';
import spades5 from '../../images/spades5.jpg';
import spades6 from '../../images/spades6.jpg';
import spades7 from '../../images/spades7.jpg';
import spades8 from '../../images/spades8.jpg';
import spades9 from '../../images/spades9.jpg';
import spades10 from '../../images/spades10.jpg';
import spades11 from '../../images/spades11.jpg';
import spades12 from '../../images/spades12.jpg';
import spades13 from '../../images/spades13.jpg';

const PREFIX_CLASS = 'select-poker-block';
const propTypes = {};
const spadesArray = [
	spades1,
	spades2,
	spades3,
	spades4,
	spades5,
	spades6,
	spades7,
	spades8,
	spades9,
	spades10,
	spades11,
	spades12,
	spades13,
];

function SelectPokerBlock() {
	return (
		<div className={PREFIX_CLASS}>
			<div className={`${PREFIX_CLASS}__container`}>
				{
					spadesArray.map(poker => (
						<img
							src={poker}
							key={poker}
						/>
					))
				}
			</div>
		</div>
	);
}

SelectPokerBlock.propTypes = propTypes;

export default SelectPokerBlock;
