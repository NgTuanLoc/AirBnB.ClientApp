import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IRoom } from '../@types/Room';

const Room = ({ _id, name, image, locationId }: IRoom) => {
	return (
		<Link to={`/room/${_id}`}>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<div className='info'>
				<h4>{name}</h4>
				<p>
					{locationId.province} <span>{locationId.name}</span>
				</p>
			</div>
		</Link>
	);
};

const Container = styled(Link)`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;
	color: black;

	.info {
		padding-inline: 0.5rem;
	}

	img {
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
	}

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export default Room;
