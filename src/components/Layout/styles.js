import styled from 'styled-components';
import { metric } from '~/styles/theme';

import logo from '~/assets/xpotify-logo-short.png';

export const StyledLayout = styled.div`
	max-width: ${metric(128)};
	width: 100%;
	margin: ${metric(5, 'auto', 0)};
	padding: ${metric(4, 2)};

	&::before {
		content: '';
		display: block;
		width: ${metric(6)};
		height: ${metric(6)};
		position: absolute;
		top: ${metric(2)};
		left: ${metric(2)};
		background-image: url(${logo});
	}
`;
