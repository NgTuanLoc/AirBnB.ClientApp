import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;

	@media only screen and (max-width: 992px) {
		grid-area: nav;

		h5 {
			display: none;
		}
	}
`;

const StyledButton = styled.button`
	font-size: 1.5rem;
	font-weight: 450;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: var(--transition);
	border-radius: var(--radius);
	padding: 1rem;
	svg {
		color: #222222;
		font-size: 1.75rem;
	}

	:hover {
		background-color: #f7f7f7;
	}
`;

const StyledLoginButton = styled.button`
	cursor: pointer;
	border: 1px solid #dddddd;
	padding: 1rem;
	border-radius: 30px;
	transition: var(--transition);
	box-shadow: var(--light-shadow);
	margin-inline: 1rem;

	svg {
		margin-inline: 0.5rem;
		font-size: 2rem;
	}

	:hover {
		box-shadow: var(--dark-shadow);
	}
`;

export { StyledContainer, StyledButton, StyledLoginButton };