import styled from 'styled-components';

const StyledContainer = styled.header`
	display: flex;
	background-color: white;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
	height: 8rem;
	border-bottom: 2px solid var(--clr-secondary);
	padding-inline: 10rem;

	@media only screen and (max-width: 992px) {
		padding: 1rem;
		display: grid;
		height: auto;
		row-gap: 0.5rem;
		grid-template-areas:
			'logo nav'
			'search search';
	}
`;

const StyledImage = styled.img`
	width: 10rem;
`;

export { StyledContainer, StyledImage };
