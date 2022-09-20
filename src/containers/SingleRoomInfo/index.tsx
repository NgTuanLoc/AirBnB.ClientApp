import { AiOutlineStar } from 'react-icons/ai';
import { GiPoolDive } from 'react-icons/gi';
import { MdOutlineFreeCancellation } from 'react-icons/md';

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
			name,
			guests,
			bedRoom,
			bath,
			description,
			kitchen,
			elevator,
			hotTub,
			pool,
			indoorFireplace,
			dryer,
			gym,
			wifi,
			heating,
			cableTV,
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
						{guests} guests &middot; {bedRoom} bedroom &middot; {bath} bath
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
				<StyledHeading>Description</StyledHeading>
				<StyledLightParagraph>{description}</StyledLightParagraph>
			</StyledShortDescription>
			<Line />
			{/* Offer */}
			<StyledOffer>
				<StyledHeading>What this place offers</StyledHeading>
				<StyledOfferContainer>
					<StyledOfferItem>
						<StyledOfferText disable={kitchen}>
							{logo['kitchen']} kitchen
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={elevator}>
							{logo['elevator']} elevator
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={hotTub}>
							{logo['hotTub']} hotTub
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={pool}>
							{logo['pool']} pool
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
						<StyledOfferText disable={indoorFireplace}>
							{logo['indoorFireplace']} indoorFireplace
						</StyledOfferText>
					</StyledOfferItem>
					<StyledOfferItem>
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
					</StyledOfferItem>
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
					{bookDate.checkIn} - {bookDate.checkOut}
				</StyledLightParagraph>
				<Calendar />
			</StyledCalendar>
		</StyledContainer>
	);
};

export default SingleRoomInfo;
