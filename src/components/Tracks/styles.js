import styled from 'styled-components';
import { lighten } from 'polished';
import { metric, medias, fontSize, colors } from '~/styles/theme';

export const StyledTracks = styled.div`
	table {
		font-size: ${fontSize.small};
		color: ${colors.dark};
		width: 100%;
		border-spacing: 0;
		border: none;
	}

	tbody tr {
		border: 1px solid ${colors.dark};
		cursor: pointer;

		&:hover {
			background-color: ${lighten(0.1, colors.black)};
		}
	}

	th,
	td {
		border-bottom: 1px solid ${lighten(0.1, colors.black)};
	}

	th {
		font-size: ${fontSize.xmall};
		padding: ${metric(1)};

		&:nth-child(2) {
			text-align: left;
		}
	}

	td {
		padding: ${metric(1)};

		&:first-child {
			width: ${metric(4)};
			text-align: right;
		}

		&:last-child {
			width: ${metric(10)};
			text-align: right;
		}

		&:nth-child(2) {
			color: ${colors.light};
			max-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	${medias.tablet(`
		display: flex;

		> div {
			width: calc(100% - ${metric(50)});
			padding: ${metric(1, 5)}
		}
	`)}
`;
