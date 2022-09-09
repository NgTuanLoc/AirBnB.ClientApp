import styled from 'styled-components';

const StyledContainer = styled.section`
	margin-top: 8rem;
	/* Ignore Navbar */
	padding-top: 2rem;
	padding-inline: 10rem;

	@media only screen and (max-width: 992px) {
		margin-top: 10rem;
		padding-inline: 0rem;
	}
`;

export { StyledContainer };
