import styled from 'styled-components';

const StyledContainer = styled.article`
	position: sticky;
	top: calc(var(--navbar-height) + 10rem);
	width: 80%;
	height: 50rem;
	margin-left: auto;
	border-radius: var(--radius);
	box-shadow: var(--box-shadow);
	padding: 3rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media only screen and (max-width: 1200px) {
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

const StyledInput = styled.input`
	border: transparent;
	outline: none;
	width: 100%;
`;

const StyledCardSchedule = styled.div`
	display: flex;
	flex-direction: column;

	margin: 2rem 0;
	border: 1px solid #b0b0b0;
	border-radius: var(--radius);
`;

const StyledCardScheduleCheckIn = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
`;

const StyledCardScheduleGuest = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`;

const StyledCardDetail = styled.div`
	margin-top: 2rem;
`;

const StyledCardDetailItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledCardTotal = styled.div`
	display: flex;
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
const StyledLabel = styled.label`
	margin-bottom: 0.5rem;
	font-weight: bold;
`;

const StyledHeading = styled.h4`
	font-size: 2rem;
`;

const StyledPriceHeading = styled.h3`
	font-size: 1.5rem;
	font-weight: 500;
	letter-spacing: 0;
`;

const StyledSpan = styled.span`
	font-weight: 200;
	font-size: 1.5rem;
`;

const StyledParagraph = styled.p<{ textUnderline?: boolean }>`
	font-size: 1.5rem;
	text-decoration: ${(props) => (props.textUnderline ? 'underline' : 'none')};
`;

const StyledButton = styled.button<{
	borderRight?: boolean;
}>`
	text-align: left;
	border-bottom: 1px solid #b0b0b0;
	border-right: ${(props) =>
		props.borderRight ? '1px solid #b0b0b0' : 'none'};
	padding: 1rem;
`;

const StyledNormalButton = styled.button``;

export {
	StyledContainer,
	StyledLabel,
	StyledHeading,
	StyledSpan,
	StyledPriceHeading,
	StyledCardTotal,
	StyledParagraph,
	StyledCardDetail,
	StyledCardDetailItem,
	StyledCardSchedule,
	StyledCardScheduleCheckIn,
	StyledCardScheduleGuest,
	StyledButton,
	StyledInput,
	StyledDivWrapper,
	StyledNormalButton,
	StyledForm,
};
