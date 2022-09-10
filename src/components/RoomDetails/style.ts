import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.article`
	display: grid;
	grid-template-columns: 25rem 1fr;
	padding: 2rem 0;
	gap: 2rem;

	:not(:first-child) {
		border-top: 1px solid var(--clr-secondary);
	}

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
	}
`;

// Typography
const StyledParagraph = styled.p<{ bold?: boolean }>`
	font-size: 1.5rem;
	color: var(--clr-paragraph);
	font-weight: ${(props) => (props.bold ? 'bold' : '300')};
`;

const StyledPrice = styled.h5`
	margin-top: auto;
	text-align: right;
`;

const StyledSpan = styled.span`
	color: var(--clr-paragraph);
`;

const StyledActionLink = styled(Link)`
	font-size: 2.5rem;
	color: black;
	font-weight: 450;
	cursor: pointer;
`;

// Container
const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledListContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 0.5rem;

	li,
	svg {
		text-transform: capitalize;
		font-size: 1.2rem;
		vertical-align: middle;
	}
`;

export {
	StyledContainer,
	StyledParagraph,
	StyledPrice,
	StyledSpan,
	StyledActionLink,
	StyledInfoContainer,
	StyledListContainer,
};
