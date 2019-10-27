import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
	className: PropTypes.string,
};

function Button({ onClick, children, className }) {
	return (
		<button 
			onClick={onClick}
			className={cx(className, 'button')}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;

export default Button;