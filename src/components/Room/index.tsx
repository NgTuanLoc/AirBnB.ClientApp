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
				{isLoading ? <Skeleton /> : <Catalog images={images} />}
			</StyledImageContainer>
			<StyledDivWrapper>
				{isLoading ? <Skeleton /> : <StyledHeading>{name}</StyledHeading>}
				{isLoading ? (
					<Skeleton />
				) : (
					<StyledParagraph>
						{locationId?.province} <span>{locationId?.name}</span>
					</StyledParagraph>
				)}
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
		</StyledContainer>
	);
};

export default Room;
