import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
	height: 8rem;
	border-bottom: 2px solid var(--clr-secondary);
`;

const StyledNavbar = styled.div`
	width: 100%;
	height: 100%;
	max-width: var(--max-width);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 10rem;

	@media only screen and (max-width: 992px) {
		padding: 1rem;
		padding-inline: var(--padding-inline-small-device);
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

const StyledLogo = styled(Link)`
	grid-area: logo;
`;

export { StyledContainer, StyledImage, StyledLogo, StyledNavbar };
