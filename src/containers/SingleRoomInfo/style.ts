import styled from 'styled-components';

const StyledContainer = styled.div`
	@media only screen and (max-width: 992px) {
		padding-inline: var(--padding-inline-small-device);
	}
`;

const StyledDivWrapper = styled.div`
	flex: 1;
`;

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTitleImage = styled.img`
	width: 10rem;
	height: 10rem;
`;

// TypoGraphy
const StyledParagraph = styled.p`
	font-weight: 200;
	text-transform: capitalize;
`;

const StyledLightParagraph = styled.p`
	color: rgb(113, 113, 113);
	font-size: 300;
	font-size: 1.4rem;
	margin-top: 0.1rem;
`;

const StyledHeading = styled.h4`
	margin: 0;
`;

const StyledSpan = styled.span`
	text-transform: lowercase;
`;

// Detail Container
const StyledDescription = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const StyledDescriptionItem = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin: 1.5rem 0;
`;

const StyledSponsor = styled.div``;

const StyledSponsorImage = styled.img`
	width: 20rem;
	margin-bottom: 1rem;
`;

const StyledShortDescription = styled.div``;

const StyledOffer = styled.div``;

const StyledOfferContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const StyledOfferItem = styled.div`
	margin: 0.5rem 0;
`;

const StyledOfferText = styled.p<{ disable: boolean }>`
	display: flex;
	align-items: center;
	font-weight: 300;
	color: rgb(34, 34, 34);
	text-decoration: ${(props) => (props.disable ? 'line-through' : 'none')};
	text-decoration-thickness: ${(props) => (props.disable ? '3px' : '0px')};

	svg {
		margin-right: 1rem;
	}
`;

const StyledCalendar = styled.div``;

export {
	StyledContainer,
	StyledTitleContainer,
	StyledTitleImage,
	StyledHeading,
	StyledParagraph,
	StyledLightParagraph,
	StyledSpan,
	StyledDivWrapper,
	StyledDescription,
	StyledDescriptionItem,
	StyledSponsor,
	StyledSponsorImage,
	StyledShortDescription,
	StyledOffer,
	StyledOfferItem,
	StyledOfferText,
	StyledOfferContainer,
	StyledCalendar,
};
