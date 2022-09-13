import Skeleton from 'react-loading-skeleton';

import { IRoom } from '../../@types/Room';
import { useAppSelector } from '../../hooks';
import Image from '../Image';
import {
	StyledContainer,
	StyledParagraph,
	StyledSpan,
	StyledDivWrapper,
	StyledImageContainer,
} from './style';

const Room = ({ _id, name, image, locationId, price }: IRoom) => {
	const { isLoading } = useAppSelector((store) => store.room);

	return (
		<StyledContainer to={`/room/${_id}`}>
			<StyledImageContainer>
				{isLoading ? <Skeleton /> : <Image url={image} alt={name} />}
			</StyledImageContainer>
			<StyledDivWrapper>
				{isLoading ? <Skeleton /> : <h5>{name}</h5>}
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
					<StyledParagraph>
						<StyledSpan bold>${price?.toLocaleString()}</StyledSpan> night
					</StyledParagraph>
				)}
			</StyledDivWrapper>
		</StyledContainer>
	);
};

export default Room;
