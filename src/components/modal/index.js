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
	onClick: PropTypes.func,
	isVisible: PropTypes.bool,
};

const defaultProps = {
	onClick: () => {},
};

function Modal({ isVisible ,message, onClick, }) {

	return (
		<div className={cx(PREFIX_CLASS, { [`${PREFIX_CLASS}__open`]: isVisible })}>
			<div className={`${PREFIX_CLASS}__content`}>
				<p>
					{message}
				</p>
				<Button onClick={onClick}> 確 定 </Button>
			</div>
		</div>
	);
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
