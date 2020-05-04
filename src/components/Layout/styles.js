import styled from 'styled-components';
import { metric, colors } from '~/styles/theme';

import logo from '~/assets/xpotify-logo-short.png';

export const StyledLayout = styled.div`
	max-width: ${metric(128)};
	width: 100%;
	margin: ${metric(5, 'auto', 0)};
	padding: ${metric(4, 2, 15)};

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

	.backButton {
		display: inline-block;
		margin-bottom: ${metric(2)};
		position: relative;
		padding-left: ${metric(2)};

		&::before {
			content: '';
			width: ${metric(1)};
			height: ${metric(1)};
			border: 2px solid transparent;
			border-left-color: ${colors.light};
			border-bottom-color: ${colors.light};
			position: absolute;
			left: 0;
			top: 8px;
			transform: rotate(45deg);
		}
	}
`;
