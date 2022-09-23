import styled from 'styled-components';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
`;

const StyledInput = styled.input`
	border: transparent;
	outline: none;
	width: 100%;
`;

const StyledButton = styled.button<{
	borderRight?: boolean;
}>`
	text-align: left;
	border-bottom: 1px solid #b0b0b0;
	border-right: ${(props) =>
		props.borderRight ? '1px solid #b0b0b0' : 'none'};
	padding: 1rem;
`;

const StyledLabel = styled.label`
	margin-bottom: 0.5rem;
	font-weight: bold;
`;

const StyledErrorMsg = styled.h5`
	margin-top: 0.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.2rem;
	color: red;

	svg {
		font-size: inherit;
	}
`;

export {
	StyledContainer,
	StyledLabel,
	StyledButton,
	StyledInput,
	StyledErrorMsg,
};
