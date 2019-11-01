import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const PREFIX_CLASS = 'message';

const propTypes = {
	message: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string,
	]),
	onReset: PropTypes.func,
	onVisible: PropTypes.func,
	isVisible: PropTypes.bool,
};

function Message({ isVisible ,message }) {
	return (
		<div className={cx(PREFIX_CLASS, { [`${PREFIX_CLASS}__open`]: isVisible })}>
			<div className={`${PREFIX_CLASS}__content`}>
				<p>
					{message}
				</p>
			</div>
		</div>
	);
}

Message.propTypes = propTypes;

export default Message;
