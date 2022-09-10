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
	image,
	name,
	locationId,
	guests,
	bedRoom,
	bath,
	elevator,
	hotTub,
	pool,
	indoorFireplace,
	dryer,
	gym,
	kitchen,
	wifi,
	heating,
	cableTV,
	price,
	_id,
}: IRoom) => {
	return (
		<StyledContainer>
			<Image url={image} alt={name} />
			<StyledInfoContainer>
				<StyledActionLink to={`/room/${_id}`}>{name}</StyledActionLink>
				<StyledParagraph>
					{locationId ? locationId.province : 'not provided'} -{' '}
					{locationId ? locationId.name : 'not provided'}
				</StyledParagraph>
				<Line margin='0.8rem auto' />
				<StyledParagraph bold>
					{guests} guests - {bedRoom} bedrooms - {bath} bathrooms
				</StyledParagraph>
				<StyledListContainer>
					<li className='list-item'>
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
					</li>
					<li className='list-item'>
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
					</li>
					<li className='list-item'>
						Gym{' '}
						<StyledSpan>
							{gym ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Kitchen{' '}
						<StyledSpan>
							{kitchen ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						Wifi{' '}
						<StyledSpan>
							{wifi ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
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
						Heating{' '}
						<StyledSpan>
							{heating ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
					<li className='list-item'>
						CableTV{' '}
						<StyledSpan>
							{cableTV ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</StyledSpan>
					</li>
				</StyledListContainer>
				<StyledPrice>
					{price?.toLocaleString()}VND<StyledSpan>/night</StyledSpan>
				</StyledPrice>
			</StyledInfoContainer>
		</StyledContainer>
	);
};

export default RoomDetails;
