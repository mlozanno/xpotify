import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAlbums } from '~/services/albums';

import store from '~/store';
import { SET_ALBUMS } from '~/store/modules/albums/actions';

import Layout from '~/components/Layout';
import Input from '~/components/Input';
import AlbumList from '~/components/AlbumList';
import Album from '~/components/Album';

const Dashboard = () => {
	const [search, setSearch] = useState('');
	const { auth, albums } = store.getState();

	const dispatch = useDispatch();

	const handleAlbums = async ({ target: { value } }) => {
		setSearch(value);

		if (value.length) {
			try {
				const payload = await getAlbums(auth.access_token, value, 10);

				dispatch({ type: SET_ALBUMS, payload });
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Layout>
			<Input handleChange={handleAlbums} value={search} />

			<AlbumList>
				{albums.map(album => (
					<Album {...album} key={album.id} />
				))}
			</AlbumList>
		</Layout>
	);
};

export default Dashboard;
