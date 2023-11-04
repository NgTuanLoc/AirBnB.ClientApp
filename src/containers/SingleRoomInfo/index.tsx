import { AiOutlineStar } from 'react-icons/ai';
import { GiPoolDive } from 'react-icons/gi';
import { MdOutlineFreeCancellation } from 'react-icons/md';

import { transformDate } from '../../utils';
import { useAppSelector } from '../../hooks';
import { logo } from '../../constant';
import { Calendar, Line } from '../../components';
import imageLogo from '../../images/image1.jpg';
import {
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
} from './style';

const SingleRoomInfo = () => {
	const {
		selectedRoom: {
			// id,
			name,
			// homeType,
			// roomType,
			totalOccupancy,
			totalBedrooms,
			totalBathrooms,
			// summary,
			// address,
			hasTV,
			hasKitchen,
			hasAirCon,
			hasHeating,
			hasInternet,
			// price,
			summary,
			// publishedAt,
			// owner,
			// latitude,
			// longitude,
			// location,
			// imageList,
		},
	} = useAppSelector((store) => store.room);
	const { numberOfVisitDay, bookDate } = useAppSelector(
		(store) => store.global
	);

	return (
		<StyledContainer>
			<StyledTitleContainer>
				<StyledDivWrapper>
					<StyledHeading>{name}</StyledHeading>
					<StyledParagraph>
						{totalOccupancy} guests &middot; {totalBedrooms} bedroom &middot;{' '}
						{totalBathrooms} bath
					</StyledParagraph>
				</StyledDivWrapper>
				<StyledTitleImage src={imageLogo} alt='logo' />
			</StyledTitleContainer>
			<Line />
			{/* Description */}
			<StyledDescription>
				<StyledDescriptionItem>
					<GiPoolDive />
					<StyledDivWrapper>
						<StyledHeading>Dive right in</StyledHeading>
						<StyledLightParagraph>
							This is one of the few places in the area with a pool.
						</StyledLightParagraph>
					</StyledDivWrapper>
				</StyledDescriptionItem>
				<StyledDescriptionItem>
					<AiOutlineStar />
					<StyledDivWrapper>
						<StyledHeading>Experienced host</StyledHeading>
						<StyledLightParagraph>
							Dorothy has 757 reviews for other places.
						</StyledLightParagraph>
					</StyledDivWrapper>
				</StyledDescriptionItem>
				<StyledDescriptionItem>
					<MdOutlineFreeCancellation />
					<StyledDivWrapper>
						<StyledHeading>Free cancellation for 48 hours.</StyledHeading>
					</StyledDivWrapper>
				</StyledDescriptionItem>
			</StyledDescription>
			<Line />
			{/* Sponsor */}
			<StyledSponsor>
				<StyledSponsorImage
					src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
					alt='sponsor'
				/>
				<StyledLightParagraph>
					Every booking includes free protection from Host cancellations,
					listing inaccuracies, and other issues like trouble checking in.
				</StyledLightParagraph>
			</StyledSponsor>
			<Line />
			{/* Short Description */}
			<StyledShortDescription>
				<StyledHeading>Summary</StyledHeading>
				<StyledLightParagraph>{summary}</StyledLightParagraph>
			</StyledShortDescription>
			<Line />
			{/* Offer */}
			<StyledOffer>
				<StyledHeading>What this place offers</StyledHeading>
				<StyledOfferContainer>
					<StyledOfferItem>
						<StyledOfferText disable={hasKitchen}>
							{logo['kitchen']} Kitchen
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={hasTV}>
							{logo['elevator']} TV
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={hasAirCon}>
							{logo['hotTub']} Air Condition
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={hasHeating}>
							{logo['pool']} Heating
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={hasInternet}>
							{logo['indoorFireplace']} Internet
						</StyledOfferText>
					</StyledOfferItem>
					{/* <StyledOfferItem>
						<StyledOfferText disable={dryer}>
							{logo['dryer']} dryer
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={gym}>{logo['gym']} gym</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={wifi}>
							{logo['wifi']} wifi
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={heating}>
							{logo['heating']} heating
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={cableTV}>
							{logo['cableTV']} cableTV
						</StyledOfferText>
					</StyledOfferItem> */}
				</StyledOfferContainer>
			</StyledOffer>
			{/* Calendar */}
			<Line />
			<StyledCalendar>
				<StyledHeading>
					{numberOfVisitDay}{' '}
					<StyledSpan style={{ textTransform: 'lowercase' }}>
						nights in
					</StyledSpan>{' '}
					{name}
				</StyledHeading>
				<StyledLightParagraph>
					{transformDate(bookDate.checkIn, 'MMMM Do')} -{' '}
					{transformDate(bookDate.checkOut, 'MMMM Do')}
				</StyledLightParagraph>
				<Calendar />
			</StyledCalendar>
		</StyledContainer>
	);
};

export default SingleRoomInfo;
