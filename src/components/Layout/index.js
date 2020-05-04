import React from 'react';
import PropTypes from 'prop-types';

import { StyledLayout } from './styles';

const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
