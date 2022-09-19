import styled from 'styled-components';

const StyledContainer = styled.section`
	margin: 4rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
	grid-gap: 2rem;
	padding-bottom: var(--footer-height);

	@media only screen and (max-width: 992px) {
		margin: 1rem 0;
	}
`;

const StyledNotFoundContainer = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30vh;
`;

const StyledHeading = styled.h1`
	margin-inline: auto;
	text-align: center;
`;

export { StyledContainer, StyledNotFoundContainer, StyledHeading };
