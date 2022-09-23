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

const StyledModalInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
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

const StyledModalContainer = styled.div`
	padding: 2rem;
`;

const StyledImageContainer = styled.div`
	width: 100%;
`;

// Typography
const StyledAnchorButton = styled.button<{ fontSize?: string }>`
	font-size: ${(props) => (props.fontSize ? props.fontSize : '1.3rem')};
	font-weight: 600;
	text-decoration: underline;
`;

const StyledBigParagraph = styled.p<{ textUnderline?: boolean }>`
	color: #252525;
	font-size: 1.6rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

const StyledParagraph = styled.p<{ textUnderline?: boolean }>`
	color: #252525;
	font-size: 1.4rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

const StyledSmallParagraph = styled.p<{ textUnderline?: boolean }>`
	color: #252525;
	font-size: 1.2rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

const StyledHeading = styled.h5``;

const StyledBigHeading = styled.h3``;

export {
	StyledContainer,
	StyledButton,
	StyledDivWrapper,
	StyledModalContainer,
	StyledImageContainer,
	StyledModal,
	StyledParagraph,
	StyledHeading,
	StyledModalButton,
	StyledModalContent,
	StyledModalItem,
	StyledModalInfo,
	StyledModalGuest,
	StyledButtonContainer,
	StyledAnchorButton,
	StyledSmallParagraph,
	StyledBigParagraph,
	StyledBigHeading,
};
