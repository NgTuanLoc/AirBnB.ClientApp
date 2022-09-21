import styled from 'styled-components';

const StyledContainer = styled.div<{ hide?: boolean; gridColumn?: boolean }>`
	display: ${(props) => (props.hide ? 'none' : 'grid')};
	column-gap: 2rem;
	grid-template-columns: ${(props) => (props.gridColumn ? '1fr' : '1fr 1fr')};
	row-gap: ${(props) => (props.gridColumn ? '1rem' : '0')};
	margin-bottom: 3rem;
`;

const StyledEvaluateItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 15rem;
	align-items: center;
`;

const StyledLightHeading = styled.h5`
	font-weight: 350;
	margin: 0;
`;

export { StyledContainer, StyledEvaluateItem, StyledLightHeading };
