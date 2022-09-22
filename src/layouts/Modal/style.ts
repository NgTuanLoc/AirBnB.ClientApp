import styled from 'styled-components';

const StyledContainer = styled.div<{ isOpen?: boolean }>`
	position: fixed;
	z-index: 999999;
	background-color: ${(props) =>
		props.isOpen ? ' rgba(0, 0, 0, 0.7)' : 'transparent'};
	width: 100%;
	height: 100%;
	transition: all 0.5s linear;
	left: 0;
	top: ${(props) => (props.isOpen ? '0' : '180vh')};
`;

const StyledContent = styled.div``;

const StyledContentContainer = styled.div<{ fullHeight?: boolean }>`
	margin-top: 2.5rem;
	background-color: white;
	border-radius: var(--radius);
	padding: 3rem;
	margin-inline: auto;
	height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
	max-width: 100rem;
	width: 100%;

	@media only screen and (max-width: 992px) {
		padding-inline: 0.5rem;
	}
`;

const StyledCloseButton = styled.button`
	font-size: 3.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 3.5rem;
	}
`;

export {
	StyledContainer,
	StyledCloseButton,
	StyledContentContainer,
	StyledContent,
};
