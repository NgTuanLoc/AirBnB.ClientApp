import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled(Link)`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;
	color: black;

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const StyledImageContainer = styled.div`
	height: 20rem;
	margin-bottom: 1rem;

	img {
		border-bottom-right-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
`;

const StyledDivWrapper = styled.div``;

// Typography
const StyledParagraph = styled.p<{ bold?: boolean }>`
	color: ${(props) => (props.bold ? 'black' : 'var(--clr-paragraph)')};
	font-weight: ${(props) => (props.bold ? 'bold' : '300')};
	font-size: 1.5rem;
`;

const StyledSpan = styled.p<{ bold?: boolean }>`
	color: ${(props) => (props.bold ? 'black' : 'var(--clr-paragraph)')};
	font-weight: ${(props) => (props.bold ? 'bold' : '300')};
	font-size: 1.5rem;
`;

export {
	StyledContainer,
	StyledParagraph,
	StyledSpan,
	StyledDivWrapper,
	StyledImageContainer,
};
