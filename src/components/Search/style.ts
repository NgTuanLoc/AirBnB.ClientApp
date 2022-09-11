import styled from 'styled-components';

const StyledContainer = styled.form<{ hide?: boolean }>`
	display: ${(props) => (props.hide ? 'none' : 'flex')};
	justify-content: space-evenly;
	align-items: center;
	box-shadow: var(--light-shadow);
	padding: 1rem 1.5rem;
	border-radius: 30px;
	transition: var(--transition);
	cursor: pointer;

	@media only screen and (min-width: 992px) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.gray {
		color: #858585;
	}

	:hover {
		box-shadow: var(--dark-shadow);
	}

	@media only screen and (max-width: 992px) {
		grid-area: search;
		width: 80%;
		margin-inline: auto;
	}
`;

const StyledInput = styled.input<{ disableInput?: boolean }>`
	display: ${(props) => (props.disableInput ? 'none' : 'block')};
	width: 100%;
	background-color: transparent;
	border: transparent;
	font-size: 1rem;
	color: #858585;
	outline-style: none;
	padding-inline: 0.5rem;
	margin-top: 0.5rem;
`;

const StyledVerticalStripe = styled.div`
	width: 1px;
	background-color: var(--clr-secondary);
	height: 2.5rem;
	margin-inline: 1rem;
`;

const StyledButton = styled.button`
	font-size: 1.5rem;
	font-weight: 400;
	position: relative;
`;

const StyledSearchButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 0.5rem;
	background-color: var(--clr-primary);
	padding: 0.5rem;
	border-radius: 50%;
	svg {
		color: white;
		font-size: 1.5rem;
	}
`;

const StyledHeading = styled.h5``;

export {
	StyledContainer,
	StyledInput,
	StyledVerticalStripe,
	StyledButton,
	StyledSearchButton,
	StyledHeading,
};
