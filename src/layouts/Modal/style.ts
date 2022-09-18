import styled from 'styled-components';

const StyledContainer = styled.div<{ isOpen?: boolean }>`
	position: fixed;
	z-index: 999999;
	background-color: white;
	width: 100vw;
	height: 100vh;
	transition: var(--transition);
	left: 0;
	top: ${(props) => (props.isOpen ? '0' : '100vh')};
	padding: 3rem;
`;

const StyledContent = styled.div``;

const StyledCloseButton = styled.button`
	font-size: 2.5rem;
`;

export { StyledContainer, StyledCloseButton, StyledContent };
