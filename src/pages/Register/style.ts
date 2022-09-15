import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBackButton = styled(Link)`
	position: absolute;
	top: 3rem;
	left: 3rem;
	font-size: 2rem;
	color: var(--clr-primary);
	transition: var(--transition);

	:hover {
		color: #d70466;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	max-width: 50rem;
	margin: 1rem;

	@media only screen and (max-width: 992px) {
		margin-top: 25rem;
	}
`;

interface StyledInputContainerProps {
	marginBottom?: string;
	borderBottomLeftRadius?: boolean;
	borderBottomRightRadius?: boolean;
	borderTopLeftRadius?: boolean;
	borderTopRightRadius?: boolean;
	borderBottom?: boolean;
}

const StyledInputContainer = styled.div<StyledInputContainerProps>`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	border: 1px solid #b3b3b3;
	border-bottom: ${(props) =>
		props.borderBottom ? '1px solid #b3b3b3' : 'none'};
	padding: 1.5rem;
	height: auto;
	margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')};

	border-bottom-left-radius: ${(props) =>
		props.borderBottomLeftRadius ? 'var(--radius)' : '0'};
	border-bottom-right-radius: ${(props) =>
		props.borderBottomRightRadius ? 'var(--radius)' : '0'};
	border-top-left-radius: ${(props) =>
		props.borderTopLeftRadius ? 'var(--radius)' : '0'};
	border-top-right-radius: ${(props) =>
		props.borderTopRightRadius ? 'var(--radius)' : '0'};
`;

const StyledLabel = styled.label`
	font-size: 1.2rem;
	font-weight: 200;
	color: var(--clr-paragraph);
`;

const StyledInput = styled.input`
	border: transparent;
	background-color: transparent;
	width: 100%;
	font-size: 2rem;
	:focus {
		background-color: transparent;
		border: transparent;
		outline: none;
	}
`;

// Typography
const StyledTitle = styled.h2`
	background: linear-gradient(to right, #4420d4 0%, #ff385c 100%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	height: 4rem;
	padding-bottom: 1rem;
`;

const StyledParagraph = styled.p`
	color: #b3b3b3;
	margin: 2rem 0;
`;

export {
	StyledTitle,
	StyledParagraph,
	StyledForm,
	StyledBackButton,
	StyledInputContainer,
	StyledLabel,
	StyledInput,
};
