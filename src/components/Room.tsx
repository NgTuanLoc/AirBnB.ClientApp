import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IRoom } from '../@types/Room';

const Room = ({ _id, name, image, locationId, price }: IRoom) => {
	return (
		<Container to={`/room/${_id}`}>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<div className='info'>
				<h5>{name}</h5>
				<p>
					{locationId.province} <span>{locationId.name}</span>
				</p>
				<p>
					<span className='bold'>${price.toLocaleString()}</span> night
				</p>
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

	.info {
		padding: 0.5rem;
	}

	img {
		border-radius: var(--radius);
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
