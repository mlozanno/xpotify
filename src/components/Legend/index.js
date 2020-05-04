import React from 'react';
import PropTypes from 'prop-types';

import { StyledLegend } from './styles';

const Legend = ({ text, emptyState }) => {
	return <StyledLegend emptyState={emptyState}>{text}</StyledLegend>;
};

Legend.propTypes = {
	text: PropTypes.string.isRequired,
	emptyState: PropTypes.bool,
};

Legend.defaultProps = {
	emptyState: false,
};

export default Legend;
