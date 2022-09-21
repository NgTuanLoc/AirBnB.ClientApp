import Skeleton from 'react-loading-skeleton';

import { DUMMY_IMAGE_DATA } from '../../constant';
import { IRoom } from '../../@types/Room';
import { useAppSelector } from '../../hooks';
import { Catalog } from '..';
import {
	StyledContainer,
	StyledParagraph,
	StyledSpan,
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
			</StyledImageContainer>
			<StyledDivWrapper>
				<StyledHeading>{name}</StyledHeading>
				<StyledDivWrapper width='60%'>
					<StyledParagraph>
						{locationId?.province} <StyledSpan>{locationId?.name}</StyledSpan>
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
