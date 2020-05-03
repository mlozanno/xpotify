import styled from 'styled-components';

import { metric, medias } from '~/styles/theme';

export const StyledAlbumsList = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: ${metric(4)};

	article {
		width: calc(100% / 2 - ${metric(1)});

		${medias.tablet(`
			width: calc(100% / 3 - ${metric(2)});
		`)}

		${medias.desktop(`
			width: calc(100% / 5 - ${metric(4)});
			margin-bottom: ${metric(8)};
		`)}
	}
`;
