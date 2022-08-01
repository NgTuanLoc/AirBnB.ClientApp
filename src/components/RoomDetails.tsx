import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

import { IRoom } from '../@types/Room';

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
	const { province, name: locationName } = locationId;
	return (
		<Container>
			<img src={image} alt={name} />
			<div className='info'>
				<h4>{name}</h4>
				<p>
					{province} - {locationName}
				</p>
				<div className='line'></div>
				<p className='detail'>
					{guests} guests - {bedRoom} bedrooms - {bath} bathrooms
				</p>
				<ul className='list'>
					<li className='list-item'>
						Elevator{' '}
						<span>
							{elevator ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Hot-Tub{' '}
						<span>
							{hotTub ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Pool{' '}
						<span>
							{pool ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Indoor FirePlace{' '}
						<span>
							{indoorFireplace ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Dryer{' '}
						<span>
							{dryer ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Gym{' '}
						<span>
							{gym ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Kitchen{' '}
						<span>
							{kitchen ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Wifi{' '}
						<span>
							{wifi ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Elevator{' '}
						<span>
							{elevator ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						Heating{' '}
						<span>
							{heating ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
					<li className='list-item'>
						CableTV{' '}
						<span>
							{cableTV ? (
								<TiTickOutline className='success' />
							) : (
								<AiOutlineClose className='danger' />
							)}
						</span>
					</li>
				</ul>
				<h5 className='price'>
					{price.toLocaleString()}VND<span>/Month</span>
				</h5>
			</div>
		</Container>
	);
};

const Container = styled.article`
	display: grid;
	grid-template-columns: 25rem 1fr;
	padding: 2rem;
	gap: 2rem;

	p {
		font-size: 1.5rem;
		color: var(--clr-paragraph);
	}

	.detail {
		font-weight: bold;
	}

	:not(:first-child) {
		border-top: 1px solid var(--clr-secondary);
	}

	img {
		border-radius: var(--radius);
	}

	.info {
		display: flex;
		flex-direction: column;
		.price {
			margin-top: auto;
			text-align: right;

			span {
				color: var(--clr-paragraph);
			}
		}

		.line {
			width: 5rem;
			height: 1px;
			background-color: var(--clr-secondary);
			margin: 1rem 0;
		}

		.list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin-top: 0.5rem;

			li {
				text-transform: capitalize;
			}

			li,
			svg {
				font-size: 1.2rem;
				vertical-align: middle;
			}
		}
	}
`;

export default RoomDetails;
