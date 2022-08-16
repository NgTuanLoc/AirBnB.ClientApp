import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import moment from 'moment';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import Button from './Button';
import { bookRoomById } from '../features/Room/roomThunk';

interface ICard {
	pricePerNight: number;
	bookDate: {
		checkIn: Date;
		checkOut: Date;
	};
	numberOfVisitNights: number;
	setCheckInHandler?: any;
	roomId: string;
}

const Card = ({
	pricePerNight,
	bookDate,
	numberOfVisitNights,
	roomId,
}: ICard) => {
	const [checkInDate, setCheckInDate] = useState(
		moment(bookDate.checkIn).format('l')
	);
	const [checkOutDate, setCheckoutDate] = useState(
		moment(bookDate.checkOut).format('l')
	);
	const { isAuthenticated } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'check-in') {
			setCheckInDate(value);
		} else {
			setCheckoutDate(value);
		}
	};

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (!isAuthenticated) {
			navigate('/login');
		}
		dispatch(
			bookRoomById({
				roomId: roomId,
				checkIn: checkInDate,
				checkOut: checkOutDate,
			})
		);
	};

	useEffect(() => {
		setCheckInDate(moment(bookDate.checkIn).format('L'));
		setCheckoutDate(moment(bookDate.checkOut).format('L'));
	}, [bookDate]);

	return (
		<Container>
			<h3>
				${pricePerNight.toLocaleString()} VND
				<span className='light'> night</span>
			</h3>
			<form onSubmit={onSubmitHandler}>
				<div className='card__schedule'>
					<div className='schedule__checkIn'>
						<button type='button' className='btn-checkIn'>
							<label htmlFor='check-in'>
								<h5>CHECK-IN</h5>
							</label>
							<input
								value={checkInDate}
								type='text'
								name='check-in'
								id='check-in'
								onChange={onChangeHandler}
							/>
						</button>
						<button type='button' className='btn-checkOut'>
							<label htmlFor='check-in'>
								<h5>CHECK-OUT</h5>
							</label>
							<input
								value={checkOutDate}
								type='text'
								name='check-out'
								id='check-out'
								onChange={onChangeHandler}
							/>
						</button>
					</div>
					<div className='schedule__guest'>
						<div>
							<h5>GUESTS</h5>
							<p>2 guests</p>
						</div>
						<button type='submit'>
							<MdOutlineKeyboardArrowDown />
						</button>
					</div>
				</div>
				<Button>Check Availability</Button>
			</form>
			<div className='card__detail'>
				<div className='card__detail--item'>
					<p className='text-underline'>
						${pricePerNight.toLocaleString()} x {numberOfVisitNights} nights
					</p>
					<p>${(pricePerNight * numberOfVisitNights).toLocaleString()}</p>
				</div>
				<div className='card__detail--item'>
					<p className='text-underline'>Cleaning fee</p>
					<p>$200,000</p>
				</div>
				<div className='card__detail--item'>
					<p className='text-underline'>Service fee</p>
					<p>$500,000</p>
				</div>
			</div>
			<div className='line'></div>
			<div className='card__total'>
				<h4>Total before taxes</h4>
				<h4>
					$
					{(
						pricePerNight * numberOfVisitNights +
						200000 +
						500000
					).toLocaleString()}{' '}
					VND
				</h4>
			</div>
		</Container>
	);
};

const Container = styled.article`
	position: sticky;
	top: calc(var(--navbar-height) + 8rem);
	width: 75%;
	height: 50rem;
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

	.card__schedule {
		display: flex;
		flex-direction: column;

		margin: 2rem 0;
		border: 1px solid #b0b0b0;
		border-radius: var(--radius);

		h5 {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 1.5rem;
		}

		.schedule__checkIn {
			display: grid;
			grid-template-columns: 1fr 1fr;
			position: relative;

			button {
				text-align: left;
				border-bottom: 1px solid #b0b0b0;
				padding: 1rem;
			}

			.btn-checkIn {
				border-right: 1px solid #b0b0b0;
			}

			input {
				border: transparent;
				outline: none;
				width: 100%;
			}
		}

		.schedule__guest {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
		}
	}

	.card__detail {
		margin-top: 2rem;
		.card__detail--item {
			display: flex;
			align-items: center;
			justify-content: space-between;

			p {
				font-size: 1.5rem;
			}

			.text-underline {
				text-decoration: underline;
			}
		}
	}
	.card__total {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		h4 {
			font-size: 1.5rem;
		}
	}

	.line {
		margin: 2rem 0;
	}
`;

export default Card;
