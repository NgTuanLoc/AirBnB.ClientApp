import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: var(--clr-secondary);
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media only screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
	}
`;

const StyledFormContainer = styled.div`
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 992px) {
		height: 50rem;
		order: 3;
	}
`;

const StyledImageContainer = styled.div`
	height: 100vh;
	@media only screen and (max-width: 992px) {
		width: 100%;
		height: 40rem;
		order: 1;
	}
`;

export { StyledContainer, StyledFormContainer, StyledImageContainer };
