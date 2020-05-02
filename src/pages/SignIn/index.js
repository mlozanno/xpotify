import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
	authEndpoint,
	clientId,
	clientSecret,
	redirectUri,
	scopes,
} from '~/config';

import { getAuthToken } from '~/services/auth';
import history from '~/services/history';

import { SET_AUTH_DATA } from '~/store/modules/auth/actions';
import { SET_ERROR } from '~/store/modules/error/actions';

import { StyledSignIn } from './styles';

import ErrorMessage from '~/components/ErrorMessage';

import logo from '~/assets/logo.png';

import store from '~/store';

const SignIn = () => {
	const dispatch = useDispatch();

	const url = `
		${authEndpoint}
			?client_id=${clientId}
			&redirect_uri=${redirectUri}
			&scope=${scopes.join('%20')}
			&response_type=code
			&show_dialog=false
		`;

	useEffect(() => {
		const { search } = window.location;

		if (search.includes('error')) {
			dispatch({
				type: SET_ERROR,
				payload: { message: 'Não foi possível fazer a busca' },
			});
		}

		if (search.includes('code')) {
			const code = search.split('=')[1];

			getAuthToken(code, redirectUri, clientId, clientSecret)
				.then(payload => {
					dispatch({ type: SET_AUTH_DATA, payload });
					history.push('/dashboard');
				})
				.catch(err => {
					dispatch({
						type: SET_ERROR,
						payload: { message: err },
					});
				});
		}
	}, []);

	return (
		<StyledSignIn>
			<img src={logo} alt="XPotify logo" />
			<a href={url}>Login to Spotify</a>
			<ErrorMessage />
		</StyledSignIn>
	);
};

export default SignIn;
