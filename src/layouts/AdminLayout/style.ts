import styled from 'styled-components';

const StyledContainer = styled.div``;

const StyledContentContainer = styled.div`
	display: grid;
	margin-top: 8rem;
	grid-template-columns: 20rem calc(100vw - 20rem);
	height: calc(100vh - 8rem);
	@media only screen and (max-width: 992px) {
		margin-top: 6rem;
		height: calc(100vh - 6rem);
	}
`;

const StyledSidebar = styled.aside`
	z-index: 2;
	background-color: white;
	display: flex;
	flex-direction: column;
	box-shadow: var(--dark-shadow);
`;

const StyledButton = styled.button<{ active?: boolean }>`
	text-align: left;
	padding: 2rem 2rem;
	font-size: 3rem;
	width: 100%;
	cursor: pointer;
	background-color: ${(props) =>
		props.active ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
`;

const StyledMainContainer = styled.div``;

export {
	StyledContainer,
	StyledContentContainer,
	StyledSidebar,
	StyledButton,
	StyledMainContainer,
};
