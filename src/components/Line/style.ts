import styled from 'styled-components';

const StyledContainer = styled.div`
	height: 1px;
	width: 100%;
	background-color: #dddddd;
	margin: 5rem auto;

	@media only screen and (max-width: 992px) {
		.line {
			margin: 2.5rem auto;
		}
	}
`;

export { StyledContainer };
