import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const Card = () => {
	const { bookedRoom } = useAppSelector((store) => store.book);

	return (
		<Container>
			<h3>{bookedRoom?.roomId.name}</h3>
		</Container>
	);
};

const Container = styled.article`
	position: sticky;
	top: calc(var(--navbar-height) + 8rem);
	width: 80%;
	margin-inline: auto;
	border-radius: var(--radius);
	box-shadow: var(--box-shadow);
	padding: 3rem 1.5rem;

	.price {
		font-weight: 500;

		span {
			font-weight: 200;
			font-size: 1.5rem;
		}
	}
`;

export default Card;
