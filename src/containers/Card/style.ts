import styled from 'styled-components';

const StyledContainer = styled.article`
	position: sticky;
	top: calc(var(--navbar-height) + 5rem);
	width: 80%;
	height: 45rem;
	margin-left: auto;
	border-radius: var(--radius);
	box-shadow: var(--box-shadow);
	padding: 2rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media only screen and (max-width: 1200px) {
		width: 100%;
		margin-top: 2rem;
		margin-inline: auto;
	}

	@media only screen and (max-width: 992px) {
		position: fixed;
		width: 100%;
		border-radius: 0;
		z-index: 10000;
		bottom: 0;
		top: auto;
		left: 0;
		height: 7rem;
		background-color: white;
		box-shadow: var(--box-shadow);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem;
	}
`;

const StyledForm = styled.form``;

const StyledCardSchedule = styled.div`
	display: flex;
	flex-direction: column;

	margin: 2rem 0;
	border: 1px solid #b0b0b0;
	border-radius: var(--radius);
`;

const StyledCardDetail = styled.div`
	margin-top: 2rem;
`;

const StyledCardDetailItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

const StyledCardTotal = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
`;
const StyledDivWrapper = styled.div<{ justifyContent?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'center'};
	align-items: center;
`;

// Typography
const StyledHeading = styled.h5``;

const StyledPriceHeading = styled.h3`
	font-size: 1.5rem;
	font-weight: 500;
	letter-spacing: 0;
`;

const StyledSpan = styled.span`
	font-weight: 200;
	font-size: 1.5rem;
	text-transform: none;
`;

const StyledParagraph = styled.p<{ textUnderline?: boolean }>`
	font-size: 1.5rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

export {
	StyledContainer,
	StyledHeading,
	StyledSpan,
	StyledPriceHeading,
	StyledCardTotal,
	StyledParagraph,
	StyledCardDetail,
	StyledCardDetailItem,
	StyledCardSchedule,
	StyledDivWrapper,
	StyledForm,
};
