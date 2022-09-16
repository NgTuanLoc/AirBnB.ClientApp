import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 5rem 0;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
	}
`;

const StyledInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const StyledImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 992px) {
		display: none;
	}
`;

const StyledLinkContainer = styled.div`
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	display: flex;
`;

const StyledBackToHomeButton = styled(Link)`
	color: #26969a;
	font-size: 2rem;
	transition: var(--transition);

	:hover {
		text-decoration: underline;
	}
`;

const StyledDivWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

// Typography
const StyledLargerHeading = styled.h1`
	font-size: 7rem;
	color: #484848;
	margin-bottom: 2rem;
`;

const StyledLargeHeading = styled.h2`
	color: #484848;
	font-weight: 350;
	margin-bottom: 1.5rem;
`;

const StyledHeading = styled.h4`
	font-weight: 300;
	color: #767676;
`;

const StyledParagraph = styled.p`
	font-size: 1.5rem;
`;

const StyledLink = styled.a`
	color: #26969a;
	font-size: 2rem;
	transition: var(--transition);

	:hover {
		text-decoration: underline;
	}
`;

export {
	StyledContainer,
	StyledImageContainer,
	StyledInfoContainer,
	StyledLinkContainer,
	StyledLargerHeading,
	StyledLargeHeading,
	StyledHeading,
	StyledParagraph,
	StyledLink,
	StyledBackToHomeButton,
	StyledDivWrapper,
};
