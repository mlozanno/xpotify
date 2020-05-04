import styled from 'styled-components';
import { metric, fontSize, colors } from '~/styles/theme';

export const StyledPlayer = styled.div`
	display: flex;
	background-color: #111;
	padding: ${metric(2)};
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	user-select: none;

	img {
		display: block;
		margin-right: ${metric(2)};
	}

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;

		span:first-child {
			color: ${colors.light};
		}

		span:last-child {
			font-size: ${fontSize.small};
			color: ${colors.dark};
		}
	}
`;
