import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled(Link)`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;
	color: black;
	height: 20rem;

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media only screen and (max-width: 992px) {
		height: 40rem;
		width: 100%;
		margin-inline: auto;
	}
`;

const StyledImageContainer = styled.div`
	margin-bottom: 0.5rem;

	@media only screen and (max-width: 992px) {
		height: 30rem;
	}
`;

const StyledDivWrapper = styled.div``;

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

const StyledHeading = styled.h5``;

export {
	StyledContainer,
	StyledParagraph,
	StyledSpan,
	StyledDivWrapper,
	StyledImageContainer,
	StyledHeading,
};
