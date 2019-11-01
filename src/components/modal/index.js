import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import cx from 'classnames';
import './style.scss';

const PREFIX_CLASS = 'modal';

const propTypes = {
	message: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
	onReset: PropTypes.func,
	onVisible: PropTypes.func,
	isVisible: PropTypes.bool,
};

function Modal({ isVisible ,message, onReset, onVisible }) {
	function _handleClick() {
		onReset();
		onVisible();
	}
	return (
		<div className={cx(PREFIX_CLASS, { [`${PREFIX_CLASS}__open`]: isVisible })}>
			<div className={`${PREFIX_CLASS}__content`}>
				<p>
					{message}
				</p>
				<Button onClick={_handleClick}> 確 定 </Button>
			</div>
		</div>
	);
}

Modal.propTypes = propTypes;

export default Modal;