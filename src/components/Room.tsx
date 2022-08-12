import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { IRoom } from '../@types/Room';
import { useAppSelector } from '../hooks/hooks';
import Image from './Image';

// const DEFAULT_IMAGE =
// 	'https://images.unsplash.com/photo-1659731062334-b6fa83d7de90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60';

const Room = ({ _id, name, image, locationId, price }: IRoom) => {
	const { isLoading } = useAppSelector((store) => store.room);

	return (
		<Container to={`/room/${_id}`}>
			<div className='img-container'>
				{isLoading ? <Skeleton /> : <Image url={image} alt={name} />}
			</div>
			<div className='info'>
				{isLoading ? <Skeleton /> : <h5>{name}</h5>}
				{isLoading ? (
					<Skeleton />
				) : (
					<p>
						{locationId?.province} <span>{locationId?.name}</span>
					</p>
				)}
				{isLoading ? (
					<Skeleton />
				) : (
					<p>
						<span className='bold'>${price.toLocaleString()}</span> night
					</p>
				)}
			</div>
		</Container>
	);
};

const Container = styled(Link)`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;
	color: black;

	.img-container {
		height: 20rem;
		margin-bottom: 1rem;
		img {
			border-radius: var(--radius);
		}
	}

	p {
		color: #717171;
		font-size: 1.5rem;
	}

	.bold {
		color: black;
		font-weight: bold;
	}

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export default Room;
