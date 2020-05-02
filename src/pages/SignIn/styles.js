import styled from 'styled-components';
import { metric, colors } from '~/styles/theme';

export const StyledSignIn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	a {
		background-color: ${colors.green};
		color: white;
		padding: ${metric(2, 3)};
		border-radius: ${metric(7)};
		transition: background-color 0.2s linear;
		display: inline-block;
		text-transform: uppercase;
		font-weight: bold;
		margin-top: ${metric(10)};

		&:hover {
			background-color: ${colors.greenHover};
			color: inherit;
		}
	}
`;
