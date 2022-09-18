import styled from 'styled-components';

const StyledContainer = styled.div<{ isOpen?: boolean }>`
	position: fixed;
	z-index: 999999;
	background-color: ${(props) =>
		props.isOpen ? ' rgba(0, 0, 0, 0.7)' : 'transparent'};
	width: 100vw;
	height: 100vh;
	transition: top 0.3s linear;
	left: 0;
	top: ${(props) => (props.isOpen ? '0' : '100vh')};
`;

const StyledContent = styled.div``;

const StyledContentContainer = styled.div`
	margin-top: 5rem;
	background-color: white;
	border-radius: var(--radius);
	padding: 3rem;
	height: 100%;
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
