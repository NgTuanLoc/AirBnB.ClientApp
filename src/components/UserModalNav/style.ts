import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	min-width: 18rem;

	@media only screen and (max-width: 1200px) {
		grid-area: user;
	}
`;

const StyledLinkContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	@media only screen and (max-width: 1200px) {
		display: none;
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
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #dddddd;
	padding: 1rem;
	border-radius: 30px;
	transition: var(--transition);
	box-shadow: var(--light-shadow);
	margin-left: 1rem;
	cursor: pointer;

	svg {
		margin-inline: 0.5rem;
		font-size: 2rem;
	}

	:hover {
		box-shadow: var(--dark-shadow);
	}
`;

export {
	StyledContainer,
	StyledLinkContainer,
	StyledButton,
	StyledLoginButton,
};
