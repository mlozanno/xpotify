import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';

import { convertToHumanTime } from '~/utils';

import { StyledTracks } from './styles';

import Album from '~/components/Album';

import store from '~/store';
import { UPDATE_CURRENT_TRACK } from '~/store/modules/tracks/actions';

const Tracks = ({ tracks }) => {
	const { id } = useParams();

	const { albums } = store.getState();
	const [albumData, setAlbumData] = useState(null);

	const dispatch = useDispatch();

	const currentTracks = useSelector(state => state.tracks);

	useEffect(() => {
		setAlbumData(albums.find(album => album.id === id));
	}, [albumData]);

	useEffect(() => {
		if (currentTracks.prev) {
			currentTracks.prev.pause();
		}

		if (currentTracks.next) {
			currentTracks.next.play();
		}
	}, [currentTracks]);

	const handleMusic = previewUrl => {
		const payload = { track: new Audio(previewUrl) };

		dispatch({ type: UPDATE_CURRENT_TRACK, payload });
	};

	return (
		<StyledTracks>
			{albumData && (
				<div>
					<Album {...albumData} />
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
					{tracks.map((track, index) => (
						<tr key={track.id} onClick={() => handleMusic(track.preview_url)}>
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

export default Tracks;
