import styled from 'styled-components';

import { metric } from '~/styles/theme';

export const StyledAlbumsList = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: ${metric(0, 2)};
	max-width: ${metric(128)};
	width: 100%;
	margin: ${metric(4, 'auto', 0)};
`;
