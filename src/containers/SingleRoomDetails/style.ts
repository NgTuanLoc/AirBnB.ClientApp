import styled from 'styled-components';

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	margin: 5rem auto;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
		margin: 2rem auto;
	}
`;

export { StyledContainer };
