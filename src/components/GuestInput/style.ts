import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	position: relative;
`;

const StyledButton = styled.button``;

const StyledDivWrapper = styled.div``;

const StyledModal = styled.div<{ isModalOpen?: boolean }>`
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: ${(props) => (props.isModalOpen ? 'auto' : '0')};
	background-color: white;
	border-radius: var(--radius);
	z-index: 100;
	box-shadow: var(--dark-shadow);
	transform: translateY(100%);
	transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const StyledModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 2rem 1rem;
`;
const StyledModalItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const StyledModalGuest = styled.div``;
const StyledButtonContainer = styled.div`
	width: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledModalButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid rgb(176, 176, 176);
	transition: var(--transition);

	svg {
		color: rgb(113, 113, 113);
		font-size: 1.5rem;
	}

	:hover {
		border: 1px solid black;
	}
`;

// Typography
const StyledParagraph = styled.p<{ textUnderline?: boolean }>`
	font-size: 1.5rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

const StyledHeading = styled.h5``;

export {
	StyledContainer,
	StyledButton,
	StyledDivWrapper,
	StyledModal,
	StyledParagraph,
	StyledHeading,
	StyledModalButton,
	StyledModalContent,
	StyledModalItem,
	StyledModalGuest,
	StyledButtonContainer,
};
