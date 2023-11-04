import { AiOutlineClose } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

import { IRoom } from '../../@types/Room';
import { Image, Line } from '..';
import {
	StyledContainer,
	StyledParagraph,
	StyledPrice,
	StyledSpan,
	StyledActionLink,
	StyledInfoContainer,
	StyledListContainer,
} from './style';

const RoomDetails = ({
	id,
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
	price,
	// publishedAt,
	// owner,
	// latitude,
	// longitude,
	location,
	imageList,
}: IRoom) => {
	const { highQualityUrl } = imageList[0];
	return (
		<StyledContainer>
			<Image url={highQualityUrl} alt={name} />
			<StyledInfoContainer>
				<StyledActionLink to={`/room/${id}`}>{name}</StyledActionLink>
				<StyledParagraph>
					{location ? location.province : 'not provided'} -{' '}
					{location ? location.name : 'not provided'}
				</StyledParagraph>
				<Line margin='0.8rem auto' />
				<StyledParagraph bold>
					{totalOccupancy} guests - {totalBedrooms} bedrooms - {totalBathrooms}{' '}
					bathrooms
				</StyledParagraph>
				<StyledListContainer>
					{/* <li className='list-item'>
						Elevator{' '}
						<StyledSpan>
							{elevator ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Hot-Tub{' '}
						<StyledSpan>
							{hotTub ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Pool{' '}
						<StyledSpan>
							{pool ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li> */}
					{/* <li className='list-item'>
						Indoor FirePlace{' '}
						<StyledSpan>
							{indoorFireplace ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Dryer{' '}
						<StyledSpan>
							{dryer ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li> */}
					<li className='list-item'>
						Air Condition{' '}
						<StyledSpan>
							{hasAirCon ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Kitchen{' '}
						<StyledSpan>
							{hasKitchen ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Wifi{' '}
						<StyledSpan>
							{hasInternet ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					{/* <li className='list-item'>
						Elevator{' '}
						<StyledSpan>
							{elevator ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li> */}
					<li className='list-item'>
						Tv{' '}
						<StyledSpan>
							{hasTV ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Heating{' '}
						<StyledSpan>
							{hasHeating ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					{/* <li className='list-item'>
						CableTV{' '}
						<StyledSpan>
							{cableTV ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li> */}
				</StyledListContainer>
				<StyledPrice>
					{price?.toLocaleString()}VND<StyledSpan>/night</StyledSpan>
				</StyledPrice>
			</StyledInfoContainer>
		</StyledContainer>
	);
};

export default RoomDetails;
