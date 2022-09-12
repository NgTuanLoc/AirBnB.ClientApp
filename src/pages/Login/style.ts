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
`;

const StyledInputContainer = styled.div`
	border-top-left-radius: var(--radius);
	border-top-right-radius: var(--radius);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	border: 1px solid #b3b3b3;
	padding: 1.5rem;
	height: auto;

	:nth-child(2n) {
		border-top: none;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-left-radius: var(--radius);
		border-bottom-right-radius: var(--radius);
		margin-bottom: 2rem;
	}
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
