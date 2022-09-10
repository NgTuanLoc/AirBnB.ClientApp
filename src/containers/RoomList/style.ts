import styled from 'styled-components';

const StyledContainer = styled.section`
	margin: 4rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
	grid-gap: 2rem;
	padding-bottom: var(--footer-height);
`;

const StyledNotFoundContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 30vh;
`;

const StyledHeading = styled.h1`
	margin-inline: auto;
	text-align: center;
`;

export { StyledContainer, StyledNotFoundContainer, StyledHeading };
