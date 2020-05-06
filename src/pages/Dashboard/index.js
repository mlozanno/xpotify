import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from '~/hooks/useDebounce';

import { getAlbums } from '~/services/albums';
import localStorageService from '~/services/localStorage';

import { SET_ALBUMS, SET_SEARCH } from '~/store/modules/albums/actions';

import Layout from '~/components/Layout';
import Input from '~/components/Input';
import AlbumList from '~/components/AlbumList';
import Album from '~/components/Album';
import Legend from '~/components/Legend';

const Dashboard = () => {
	const dispatch = useDispatch();

	const {
		auth,
		albums: { result, search },
	} = useSelector(state => state);

	const debouncedSearchTerm = useDebounce(search, 1000);

	useEffect(() => {
		const storageAlbums = localStorageService.getAlbums();

		if (storageAlbums && storageAlbums.length) {
			dispatch({ type: SET_ALBUMS, payload: [...storageAlbums] });
		}
	}, []);

	useEffect(() => {
		const fetchAlbums = async () => {
			if (search.length && debouncedSearchTerm) {
				try {
					if (debouncedSearchTerm) {
						const payload = await getAlbums(auth.access_token, search, 10);
						dispatch({ type: SET_ALBUMS, payload });
						localStorageService.setAlbums(payload);
					}
				} catch (error) {
						console.log(error); //eslint-disable-line
				}
			} else {
				dispatch({ type: SET_ALBUMS, payload: [] });
			}
		};

		fetchAlbums();
	}, [debouncedSearchTerm]);

	const handleAlbums = async ({ target: { value } }) => {
		dispatch({ type: SET_SEARCH, payload: { search: value } });
	};

	return (
		<Layout>
			<Input handleChange={handleAlbums} />

			{search && <Legend text={`Resultados encontrados para "${search}"`} />}

			{!result.length ? (
				<Legend text="Nenhum álbum para ser exibido :(" emptyState />
			) : (
				<AlbumList>
					{result.map(album => (
						<Album {...album} key={album.id} />
					))}
				</AlbumList>
			)}
		</Layout>
	);
};

export default Dashboard;
