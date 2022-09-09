import styled from 'styled-components';
import { Image } from '../../components';

const StyledContainer = styled.section`
	width: 100%;
`;
const StyledLocationTitle = styled.h3``;

const StyledLinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledHeading = styled.h5`
	font-size: 1.5rem;
	border-bottom: 1px solid black;
	font-weight: 450;
`;

const StyledSubTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledSubTitleLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	font-size: 1.5rem;
	margin-inline: 1rem;
	place-items: center;
	transition: var(--transition);
	padding: 0.5rem;
	border-radius: var(--radius);

	:hover {
		background-color: #f7f7f7;
	}
`;

const StyledSubTitleLinkSpan = styled.span`
	margin-left: 0.5rem;
	border-bottom: 1px solid black;
`;

const StyledPhotoContainer = styled.div`
	margin: 3rem auto;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 20rem);

	grid-template-areas:
		'main main image-1 image-2'
		'main main image-3 image-4';
`;

const StyledImage = styled(Image)``;

export {
	StyledLocationTitle,
	StyledContainer,
	StyledLinkContainer,
	StyledHeading,
	StyledSubTitle,
	StyledSubTitleLink,
	StyledSubTitleLinkSpan,
	StyledPhotoContainer,
	StyledImage,
};
