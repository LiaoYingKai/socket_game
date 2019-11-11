import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import cx from 'classnames';
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
	{
		image: spades1,
		isSelect: false,
		point:1 ,
	},
	{
		image: spades2,
		isSelect: false,
		point:2 ,
	},
	{
		image: spades3,
		isSelect: false,
		point:3 ,
	},
	{
		image: spades4,
		isSelect: false,
		point:4 ,
	},
	{
		image: spades5,
		isSelect: false,
		point:5 ,
	},
	{
		image: spades6,
		isSelect: false,
		point:6 ,
	},
	{
		image: spades7,
		isSelect: false,
		point:7 ,
	},
	{
		image: spades8,
		isSelect: false,
		point:8 ,
	},
	{
		image: spades9,
		isSelect: false,
		point:9 ,
	},
	{
		image: spades10,
		isSelect: false,
		point:10 ,
	},
	{
		image: spades11,
		isSelect: false,
		point:11 ,
	},
	{
		image: spades12,
		isSelect: false,
		point:12 ,
	},
	{
		image: spades13,
		isSelect: false,
		point:13 ,
	},
];

function SelectPokerBlock() {
	const [totalPoint, setTotalPoint] = useState(0);

	function _handleClickPoker(index, point, isSelect) {
		if (isSelect) {
			setTotalPoint(totalPoint - point);
		} else {
			setTotalPoint(totalPoint + point);
		}
		spadesArray[index].isSelect = !isSelect;
	}

	function _handleClickOk() {
		console.log(totalPoint);
	}

	function _handleClickCancel() {
		Object.values(spadesArray).forEach(poker => {
			poker.isSelect = false;
		});
		setTotalPoint(0);
	}

	return (
		<div className={PREFIX_CLASS}>
			<div className={`${PREFIX_CLASS}__total-point`}>
				目前點數：{totalPoint}
			</div>
			<div className={`${PREFIX_CLASS}__container`}>
				{
					spadesArray.map((poker, index) => {
						const { image, isSelect, point } = poker;

						return (
							<img
								key={image} 
								className={cx({ [`${PREFIX_CLASS}__poker--isSelect`]: isSelect })}
								src={image}
								onClick={() => _handleClickPoker(index, point, isSelect)}
							/>
						);
					})
				}
			</div>
			<div className={`${PREFIX_CLASS}__buttons`}>
				<Button 
					type={Button.TypeEnums.HOLLOW}
					onClick={_handleClickCancel}
				> 取消 </Button>
				<Button
					onClick={_handleClickOk}
				> 確認 </Button>
			</div>
		</div>
	);
}

SelectPokerBlock.propTypes = propTypes;

export default SelectPokerBlock;
