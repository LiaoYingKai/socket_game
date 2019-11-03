import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {};

function ImageLink({ imageSrc, onClick }) {
	return (
		<div className="image-link" onClick={onClick}>
			<img
				src={imageSrc}
			/>
		</div>
	);
}

ImageLink.propTypes = propTypes;

export default ImageLink;
