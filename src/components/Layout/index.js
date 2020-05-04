import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { StyledLayout } from './styles';

import Player from '~/components/Player';

const Layout = ({ children }) => {
	const {
		currentTrack: { trackName },
	} = useSelector(state => state.tracks);

	return (
		<StyledLayout>
			{children}
			{trackName && <Player />}
		</StyledLayout>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
