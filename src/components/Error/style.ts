import styled from 'styled-components';

interface Props {
	removeError: boolean;
}

const StyledContainer = styled.div<Props>`
	transition: var(--transition);
	display: ${(props) => (props.removeError ? 'none' : 'block')};
	width: 100%;
	margin: 1rem auto;
	h5 {
		color: var(--clr-danger);
	}
`;

export { StyledContainer };
