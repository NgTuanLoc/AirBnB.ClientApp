import styled from 'styled-components';
import { IRoom } from '../@types/Room';

const Room = ({ name, image, locationId }: IRoom) => {
	return (
		<Container>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<h4>{name}</h4>
			<p>
				{locationId.province} <span>{locationId.name}</span>
			</p>
		</Container>
	);
};

const Container = styled.article`
	display: block;
	img {
		border-radius: var(--radius);
	}
`;

export default Room;
