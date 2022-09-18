import styled from 'styled-components';

const StyledContainer = styled.div`
	margin-bottom: 3.5rem;
	@media only screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-between;
		padding-inline: var(--padding-inline-small-device);
	}
`;

const StyledDivWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const StyledListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr 5rem;
	}
`;

const StyledList = styled.ul`
	@media only screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;

const StyledListItem = styled.li<{
	isBold?: boolean;
	fontSize?: string;
	flexDirection?: string;
}>`
	font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5rem')};
	font-weight: ${(props) => (props.isBold ? 550 : 350)};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-bottom: 0.75rem;
	gap: 0.5rem;

	@media only screen and (max-width: 992px) {
		gap: 1rem;
		flex-direction: ${(props) =>
			props.flexDirection ? props.flexDirection : 'column'};
	}
`;

const StyledButton = styled.button`
	font-size: 1.7rem;
	font-weight: 550;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// Typography
const StyledHeading = styled.h4`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export {
	StyledContainer,
	StyledDivWrapper,
	StyledListContainer,
	StyledList,
	StyledListItem,
	StyledButton,
	StyledHeading,
};
