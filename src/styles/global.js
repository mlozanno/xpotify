import { createGlobalStyle } from 'styled-components';
import { fontSize, colors } from '~/styles/theme';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #app {
		min-height: 100%;
	}

	html {
		font-size: 10px;
	}

	body, input, button {
		font: normal ${fontSize.regular}/1.5 Roboto, arial, sans-serif;
	}

	body {
		-webkit-font-smoothing: antialiased;
		background-color: ${colors.black};
		color: white
	}

	a {
		text-decoration: none;
		color: white
	}

	a:hover {
		color: ${colors.hover}
	}

	ul {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;
