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

	return (
		<StyledContainer to={`/room/${_id}`}>
			<StyledImageContainer>
				{isLoading ? <Skeleton /> : <Catalog images={images} navigation />}
			</StyledImageContainer>
			<StyledDivWrapper>
				<StyledHeading>{isLoading ? <Skeleton /> : name}</StyledHeading>
				<StyledDivWrapper width='60%'>
					{isLoading ? (
						<Skeleton />
					) : (
						<StyledParagraph>
							{locationId?.province} <StyledSpan>{locationId?.name}</StyledSpan>
						</StyledParagraph>
					)}
				</StyledDivWrapper>
				<StyledDivWrapper width='50%'>
					{isLoading ? (
						<Skeleton />
					) : (
						<StyledLightHeading>
							<StyledSpan bold>
								${price ? price?.toLocaleString() : 'undefined'}
							</StyledSpan>{' '}
							night
						</StyledLightHeading>
					)}
				</StyledDivWrapper>
			</StyledDivWrapper>
		</StyledContainer>
	);
};

export default Room;
