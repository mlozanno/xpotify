import styled from 'styled-components';

import { metric, fontSize, colors } from '~/styles/theme';

export const StyledAlbum = styled.article`
	text-align: center;
	width: 100%;
	margin-bottom: ${metric(4)};

	img {
		display: inline-block;
		width: 100%;
		max-width: 30rem;
		cursor: pointer;
		transition: all 0.1s linear;

		&:hover {
			transform: scale(1.05);
			box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.16);
		}
	}

	h1 {
		font-size: ${fontSize.small};
		color: ${colors.light};
	}

	h2 {
		font-size: ${fontSize.xmall};
		color: ${colors.dark};
	}
`;
