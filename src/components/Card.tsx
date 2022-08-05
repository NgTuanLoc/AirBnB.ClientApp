import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import Button from './Button';

const Card = () => {
	// const { bookedRoom } = useAppSelector((store) => store.book);

	return (
		<Container>
			<h3>
				$176 <span className='light'>night</span>
			</h3>
			<div className='schedule'>
				<div className='schedule__checkIn'>
					<button className='btn-checkIn'>
						<h5>CHECK-IN</h5>
						<p>23/05/2000</p>
					</button>
					<button className='btn-checkOut'>
						<h5>CHECK-OUT</h5>
						<p>23/05/2000</p>
					</button>
				</div>
				<div className='schedule__guest'>
					<div>
						<h5>GUESTS</h5>
						<p>2 guests</p>
					</div>
					<button>
						<MdOutlineKeyboardArrowDown />
					</button>
				</div>
			</div>
			<Button>Check Availability</Button>
		</Container>
	);
};

const Container = styled.article`
	position: sticky;
	top: calc(var(--navbar-height) + 8rem);
	width: 60%;
	margin-inline: auto;
	border-radius: var(--radius);
	box-shadow: var(--box-shadow);
	padding: 3rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.price {
		font-weight: 500;

		span {
			font-weight: 200;
			font-size: 1.5rem;
		}
	}

	.light {
		font-weight: 200;
		font-size: 1.5rem;
	}

	.schedule {
		display: flex;
		flex-direction: column;

		margin: 2rem 0;
		border: 1px solid #b0b0b0;
		border-radius: var(--radius);

		h5 {
			font-size: 1rem;
		}

		p {
			font-size: 1.5rem;
		}

		.schedule__checkIn {
			display: grid;
			grid-template-columns: 1fr 1fr;

			button {
				text-align: left;
				border-bottom: 1px solid #b0b0b0;
				padding: 1rem;
			}

			.btn-checkIn {
				border-right: 1px solid #b0b0b0;
			}
		}

		.schedule__guest {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
		}
	}
`;

export default Card;
