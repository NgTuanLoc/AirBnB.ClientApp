import Skeleton from 'react-loading-skeleton';
import { AiFillStar } from 'react-icons/ai';

import { DUMMY_IMAGE_DATA } from '../../constant';
import { generateRandomIndex } from '../../utils';
import { IRoom } from '../../@types/Room';
import { useAppSelector } from '../../hooks';
import { Catalog } from '..';
import {
	StyledContainer,
	StyledParagraph,
	StyledHeartIcon,
	StyledLikeButton,
	StyledSpan,
	StyledScore,
	StyledHeadingContainer,
	StyledDivWrapper,
	StyledImageContainer,
	StyledHeading,
	StyledLightHeading,
} from './style';

const Room = ({ _id, name, image, locationId, price }: IRoom) => {
	const { isLoading } = useAppSelector((store) => store.room);

	const images = [image, ...DUMMY_IMAGE_DATA];

	if (isLoading) {
		return (
			<StyledContainer to={''}>
				<StyledImageContainer>
					<Skeleton />
				</StyledImageContainer>
				<StyledDivWrapper>
					<StyledHeading>
						<Skeleton />
					</StyledHeading>
					<StyledDivWrapper width='60%'>
						<StyledParagraph>
							<Skeleton />
						</StyledParagraph>
					</StyledDivWrapper>
					<StyledDivWrapper width='50%'>
						<StyledLightHeading>
							<Skeleton />
						</StyledLightHeading>
					</StyledDivWrapper>
				</StyledDivWrapper>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer to={`/room/${_id}`}>
			<StyledImageContainer>
				<Catalog images={images} navigation />
				<StyledLikeButton>
					<StyledHeartIcon />
				</StyledLikeButton>
			</StyledImageContainer>
			<StyledDivWrapper>
				<StyledHeadingContainer>
					<StyledHeading>
						{name.length > 20 ? `${name.substring(0, 20)}...` : name}
					</StyledHeading>
					<StyledScore>
						<AiFillStar /> {generateRandomIndex(400, 500) / 100}
					</StyledScore>
				</StyledHeadingContainer>
				<StyledDivWrapper width='60%'>
					<StyledParagraph>
						{locationId?.province} <StyledSpan>{locationId?.name}</StyledSpan>
					</StyledParagraph>
					<StyledParagraph>
						{generateRandomIndex(120, 500).toLocaleString()} kilometers
					</StyledParagraph>
				</StyledDivWrapper>
				<StyledDivWrapper width='50%'>
					<StyledLightHeading>
						<StyledSpan bold>
							${price ? price?.toLocaleString() : 'undefined'}
						</StyledSpan>{' '}
						night
					</StyledLightHeading>
				</StyledDivWrapper>
			</StyledDivWrapper>
		</StyledContainer>
	);
};

export default Room;
