import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';

import { convertToHumanTime, getImage, mergeArtists } from '~/utils';
import localStorageService from '~/services/localStorage';

import { StyledTracks } from './styles';

import Album from '~/components/Album';

import { UPDATE_CURRENT_TRACK } from '~/store/modules/tracks/actions';

const Tracks = ({ tracks: tracksData }) => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const {
		albums: { result },
		tracks: currentTracks,
	} = useSelector(state => state);

	const currentAlbum = () => {
		const storageAlbums = localStorageService.getAlbums();

		if (storageAlbums && storageAlbums.length) {
			return storageAlbums.find(album => album.id === id);
		}

		return result.find(album => album.id === id);
	};

	useEffect(() => {
		if (currentTracks.prev) {
			currentTracks.prev.pause();
		}

		if (currentTracks.current) {
			currentTracks.current.play();
		}
	}, [currentTracks]);

	const handleMusic = currentTrack => {
		const { name: trackName } = currentTrack;
		const { artists, images } = currentAlbum();

		const audio = { track: new Audio(currentTrack.preview_url) };

		dispatch({
			type: UPDATE_CURRENT_TRACK,
			payload: {
				...audio,
				currentTrack: {
					trackName,
					artists: mergeArtists(artists),
					image: getImage(images, 64),
				},
			},
		});
	};

	return (
		<StyledTracks>
			{currentAlbum() && (
				<div>
					<Album {...currentAlbum()} />
				</div>
			)}

			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>title</th>
						<th>
							<FaRegClock />
						</th>
					</tr>
				</thead>
				<tbody>
					{tracksData.map((track, index) => (
						<tr key={track.id} onClick={() => handleMusic(track)}>
							<td>{index + 1}</td>
							<td>{track.name}</td>
							<td>{convertToHumanTime(track.duration_ms)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</StyledTracks>
	);
};

Tracks.propTypes = {
	tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tracks;
