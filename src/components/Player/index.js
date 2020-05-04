import React from 'react';

import { useSelector } from 'react-redux';

import { StyledPlayer } from './styles';

const Player = () => {
	const {
		currentTrack: { trackName, albumName, artists, image },
	} = useSelector(state => state.tracks);

	return (
		<StyledPlayer>
			<img src={image.url} alt={`${trackName} - ${albumName} - ${artists}`} />
			<div>
				<span>{trackName}</span>
				<span>{artists}</span>
			</div>
		</StyledPlayer>
	);
};

export default Player;
