import styled from 'styled-components';
import { IRoom } from '../@types/Room';

const Room = ({ name, image, locationId }: IRoom) => {
	return (
		<Container>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<div className='info'>
				<h4>{name}</h4>
				<p>
					{locationId.province} <span>{locationId.name}</span>
				</p>
			</div>
		</Container>
	);
};

const Container = styled.article`
	display: block;
	transition: var(--transition);
	border-radius: var(--radius);
	cursor: pointer;

	.info {
		padding-inline: 0.5rem;
	}

	img {
		border-radius: var(--radius);
	}

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export default Room;
