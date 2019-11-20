import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/button';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	isVisible: PropTypes.bool,
	onClick: PropTypes.func,
};

const defaultProps = {
	isVisible: true,
	onClick: () => {},
};

function StartView({ onClick, isVisible }) {
	return (
		<div className={cx("start-view", { "start-view--visible": isVisible })}>
			<h1>我<span>只是</span>要去上班</h1>
			<h3> 上班到底有多難 </h3>
			<Button className="start-view__button" onClick={onClick}>START</Button>
		</div>
	);
}

StartView.propTypes = propTypes;
StartView.defaultProps = defaultProps;

export default StartView;
