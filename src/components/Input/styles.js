import styled from 'styled-components';
import { metric, fontSize, colors, medias } from '~/styles/theme';

export const StyledInput = styled.div`
	label {
		color: ${colors.dark};
		font-size: ${fontSize.xmall};
		margin-left: ${metric(1)};
	}

	input {
		font-size: ${fontSize.regular};
		width: 100%;
		color: white;
		background: transparent;
		border: none;
		border-bottom: 1px solid ${colors.dark};
		outline: none;
		padding: ${metric(1)};
		font-weight: bold;
	}

	${medias.tablet(`
		label {
			font-size: ${fontSize.small}
		}

		input {
			font-size: ${fontSize.large}
		}
	`)}
`;
