import styled from 'styled-components';

const StyledContainer = styled.footer`
	display: block;
	background-color: #f7f7f7;
	width: 100%;
	padding: 2rem 8rem;

	@media only screen and (max-width: 992px) {
		padding-bottom: 6rem;
		padding-inline: 1rem;
	}
`;

const StyledLinkContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 3rem;
	background-color: transparent;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
	}
`;

const StyledHeading = styled.h3``;

const StyledLinkRow = styled.div``;

const StyledUnorderedLink = styled.ul``;

const StyledLink = styled.li`
	margin: 0.5rem auto;
	text-transform: capitalize;
	font-size: 1.5rem;
	cursor: pointer;
`;

const StyledSocialContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (max-width: 992px) {
		flex-direction: column;
	}
`;

const StyledSocialHeading = styled.h4`
	font-size: 1.5rem;
	font-weight: 300;

	@media only screen and (max-width: 992px) {
		margin-bottom: 1rem;
	}
`;

const StyledSocialLink = styled.a`
	font-size: 2.5rem;
	margin-inline: 0.5rem;
	transition: var(--transition);
	color: black;

	:hover:nth-child(1) {
		color: #1877f2;
	}
	:hover:nth-child(2) {
		color: #1da1f2;
	}
	:hover:nth-child(3) {
		color: #e4405f;
	}
	:hover:nth-child(4) {
		color: #0a66c2;
	}
`;

export {
	StyledContainer,
	StyledLinkContainer,
	StyledHeading,
	StyledLinkRow,
	StyledUnorderedLink,
	StyledLink,
	StyledSocialContainer,
	StyledSocialHeading,
	StyledSocialLink,
};
