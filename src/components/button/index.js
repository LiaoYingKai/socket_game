import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const TypeEnums = {
	SOLID: 'solid',
	HOLLOW: 'hollow',
};

const propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.oneOf(Object.values(TypeEnums))
};

const defaultProps = {
	onClick: () => {},
	type: TypeEnums.SOLID
};

function Button({ onClick, children, className, type }) {
	return (
		<button 
			onClick={onClick}
			className={cx(className, 'button', `button--${type}`)}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.TypeEnums = TypeEnums;

export default Button;