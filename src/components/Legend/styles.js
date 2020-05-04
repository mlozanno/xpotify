import styled from 'styled-components';
import { colors, fontSize, medias } from '~/styles/theme';

export const StyledLegend = styled.p`
	color: ${colors.dark};
	font-size: ${fontSize.small};

	${medias.tablet(`
		font-size: ${fontSize.medium}
	`)}

	${({ emptyState }) =>
		emptyState &&
		`
			font-size: ${fontSize.medium};
			text-align: center;
		`}
`;
