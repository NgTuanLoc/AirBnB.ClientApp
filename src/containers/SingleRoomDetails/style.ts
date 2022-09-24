import styled from 'styled-components';

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	margin: 5rem auto;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
		margin: 2rem auto;
	}
`;

const StyledModalContainer = styled.div`
	padding: 2rem;
`;

const StyledImageContainer = styled.div`
	width: 100%;
`;

const StyledModalInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

// Typography
const StyledButton = styled.button<{ fontSize?: string }>`
	font-size: ${(props) => (props.fontSize ? props.fontSize : '1.3rem')};
	font-weight: 600;
	text-decoration: underline;
`;

const StyledParagraph = styled.p<{ textUnderline?: boolean }>`
	color: #252525;
	font-size: 1.6rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

const StyledHeading = styled.h3``;

export {
	StyledContainer,
	StyledModalContainer,
	StyledImageContainer,
	StyledModalInfo,
	StyledButton,
	StyledHeading,
	StyledParagraph,
};
