import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import localStorageService from '~/services/localStorage';

import store from '~/store';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
	const { signed } = store.getState().auth;
	const token = !!localStorageService.getAccessToken();
	const authenticated = signed || !!token;

	if (!authenticated && isPrivate) {
		return <Redirect to="/" />;
	}

	if (authenticated && !isPrivate) {
		return <Redirect to="/dashboard" />;
	}

	return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
};

export default RouteWrapper;
