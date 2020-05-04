import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { apiService } from '~/services/api';

import Layout from '~/components/Layout';
import Tracks from '~/components/Tracks';

const Album = () => {
	const { id } = useParams();
	const [tracks, setTraks] = useState([]);

	const { auth } = useSelector(state => state);

	useEffect(() => {
		const fetchAlbum = async () => {
			const {
				data: { items },
			} = await apiService.get(`/albums/${id}/tracks`, {
				headers: { Authorization: `Bearer ${auth.access_token}` },
			});

			setTraks(items);
		};

		fetchAlbum();
	}, []);

	return (
		<Layout>
			<h1>
				<Link to="/dashboard">Voltar</Link>
			</h1>

			<Tracks tracks={tracks} />
		</Layout>
	);
};

export default Album;
