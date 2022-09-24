import styled from 'styled-components';

interface StyledContainerProps {
	margin?: string;
	padding?: string;
}

const StyledContainer = styled.main<StyledContainerProps>`
	max-width: var(--max-width);
	margin-top: ${(props) => (props.margin ? props.margin : '8rem')};
	/* Ignore Navbar */
	padding: ${(props) => (props.padding ? props.padding : '2rem 10rem 0')};
	margin-inline: auto;

	@media only screen and (max-width: 992px) {
		margin-top: ${(props) => (props.margin ? props.margin : '11rem')};
		padding: ${(props) => (props.padding ? props.padding : '0')};
	}
`;

export { StyledContainer };
