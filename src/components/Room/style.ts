import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

const StyledContainer = styled(Link)`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;
	color: black;

	@media only screen and (max-width: 992px) {
		height: 40rem;
		width: 100%;
		margin-inline: auto;
	}
`;

const StyledImageContainer = styled.div`
	margin-bottom: 1.5rem;
	border-radius: var(--radius);
	height: 29rem;
	overflow: hidden;
	position: relative;
	z-index: 10;

	@media only screen and (max-width: 992px) {
		height: 30rem;
	}
`;

const StyledDivWrapper = styled.div<{ width?: string }>`
	width: ${(props) => (props.width ? props.width : '100%')};
`;

const StyledHeadingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledHeartIcon = styled(AiFillHeart)`
	display: block;
	fill: rgba(0, 0, 0, 0.5);
	height: 24px;
	width: 24px;
	stroke: white !important;
	stroke-width: 7rem !important;
	overflow: visible;
`;

const StyledLikeButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	top: 1.5rem;
	right: 1.5rem;
	color: white;
	background-color: transparent;
	border-radius: 50%;
	transition: transform 0.25s ease 0s;
	margin: -2px 0px 0px;
	padding: 2px 0px 0px;
`;

// Typography
const StyledParagraph = styled.p<{ bold?: boolean }>`
	font-size: 1.5rem;
	color: ${(props) => (props.bold ? 'black' : 'var(--clr-paragraph)')};
	font-weight: ${(props) => (props.bold ? 'bold' : '400')};
`;

const StyledSpan = styled.span<{ bold?: boolean }>`
	font-size: 1.5rem;
	color: ${(props) => (props.bold ? 'black' : 'var(--clr-paragraph)')};
	font-weight: ${(props) => (props.bold ? 'bold' : '300')};
`;

const StyledScore = styled.p`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	svg {
		font-size: inherit;
		margin-right: 0.5rem;
	}
`;

const StyledHeading = styled.h5`
	width: 70%;
	margin: 0;
	font-size: 1.5rem;
	color: #222222;
	font-size: 600;
`;
const StyledLightHeading = styled.h5`
	font-weight: 400;
`;

export {
	StyledContainer,
	StyledParagraph,
	StyledHeartIcon,
	StyledLikeButton,
	StyledSpan,
	StyledScore,
	StyledHeadingContainer,
	StyledDivWrapper,
	StyledImageContainer,
	StyledHeading,
	StyledLightHeading,
};
