import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
	z-index: 1000;

	@media only screen and (max-width: 992px) {
		height: 30rem;
	}
`;

const StyledDivWrapper = styled.div<{ width?: string }>`
	width: ${(props) => (props.width ? props.width : '100%')};
`;

// Typography
const StyledParagraph = styled.p<{ bold?: boolean }>`
	font-size: 1.5rem;
	color: ${(props) => (props.bold ? 'black' : 'var(--clr-paragraph)')};
	font-weight: ${(props) => (props.bold ? 'bold' : '300')};
`;

const StyledSpan = styled.span<{ bold?: boolean }>`
	font-size: 1.5rem;
	color: ${(props) => (props.bold ? 'black' : 'var(--clr-paragraph)')};
	font-weight: ${(props) => (props.bold ? 'bold' : '300')};
`;

const StyledHeading = styled.h5`
	width: 70%;
	margin-bottom: 0.3rem;
`;
const StyledLightHeading = styled.h5`
	font-weight: 400;
`;

export {
	StyledContainer,
	StyledParagraph,
	StyledSpan,
	StyledDivWrapper,
	StyledImageContainer,
	StyledHeading,
	StyledLightHeading,
};
