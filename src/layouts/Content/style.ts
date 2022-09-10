import styled from 'styled-components';

interface StyledContainerProps {
	margin?: string;
	padding?: string;
}

const StyledContainer = styled.section<StyledContainerProps>`
	margin-top: ${(props) => (props.margin ? props.margin : '8rem')};
	/* Ignore Navbar */
	padding: ${(props) => (props.padding ? props.padding : '2rem 10rem 0')};

	@media only screen and (max-width: 992px) {
		margin-top: ${(props) => (props.margin ? props.margin : '10rem')};
		padding: ${(props) => (props.padding ? props.padding : 'auto 0')};
	}
`;

export { StyledContainer };
