import styled from 'styled-components';

const StyledContainer = styled.div`
	@media only screen and (max-width: 992px) {
		padding-inline: var(--padding-inline-small-device);
	}
`;

const StyledEvaluateContainer = styled.div<{ hide?: boolean }>`
	display: ${(props) => (props.hide ? 'none' : 'grid')};
	column-gap: 2rem;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 3rem;
`;

const StyledEvaluateItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 15rem;
	align-items: center;
`;

const StyledUserContainer = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 3rem;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE 10+ */

	::-webkit-scrollbar {
		background: transparent; /* Chrome/Safari/Webkit */
		width: 0px;
	}

	@media only screen and (max-width: 992px) {
		display: flex;
		align-items: center;
		overflow-x: scroll;
	}
`;

// Typography
const StyledHeading = styled.h4`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 1rem;
`;

const StyledLightHeading = styled.h5`
	font-weight: 350;
	margin: 0;
`;

export {
	StyledContainer,
	StyledEvaluateContainer,
	StyledEvaluateItem,
	StyledUserContainer,
	StyledHeading,
	StyledLightHeading,
};
