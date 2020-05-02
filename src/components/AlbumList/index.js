import React from 'react';
import PropTypes from 'prop-types';

import { StyledAlbumsList } from './styles';

const AlbumsList = ({ children }) => (
	<StyledAlbumsList data-testid="album-list">{children}</StyledAlbumsList>
);

AlbumsList.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AlbumsList;
