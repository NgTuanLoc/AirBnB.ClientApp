import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	position: fixed;
	height: auto;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
	border-bottom: 2px solid var(--clr-secondary);
`;

const StyledNavbar = styled.div`
	width: 100%;
	height: 100%;
	max-width: var(--max-width);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;

	@media only screen and (max-width: 992px) {
		padding: 1rem 1rem;
		display: grid;
		grid-template-areas:
			'logo . . user'
			'search search search search';
		grid-template-rows: 1fr 1fr;
		row-gap: 0.5rem;
	}
`;

const StyledImage = styled.img`
	width: 10rem;
`;

const StyledLogo = styled(Link)`
	grid-area: logo;
`;

export { StyledContainer, StyledImage, StyledLogo, StyledNavbar };
