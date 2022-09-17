import styled from 'styled-components';

const StyledContainer = styled.main`
	margin-top: var(--navbar-height);
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr 1fr;
	height: calc(100vh - var(--navbar-height));
	padding: 2rem 0;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		height: auto;
	}
`;

const StyledGoogleMap = styled.section`
	display: block;
	border: transparent;
	box-shadow: var(--box-shadow);
	@media only screen and (max-width: 992px) {
		min-height: 50rem;
	}
`;
const StyledRoomList = styled.section`
	overflow-y: scroll;
	scrollbar-width: none;
`;

export { StyledContainer, StyledGoogleMap, StyledRoomList };
