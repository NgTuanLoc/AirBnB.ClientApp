import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import moment from 'moment';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Line } from '../../components';
import { bookRoomById } from '../../features/Room/roomThunk';
import {
	StyledContainer,
	StyledLabel,
	StyledHeading,
	StyledSpan,
	StyledPriceHeading,
	StyledCardTotal,
	StyledParagraph,
	StyledCardDetail,
	StyledCardDetailItem,
	StyledCardSchedule,
	StyledCardScheduleCheckIn,
	StyledCardScheduleGuest,
	StyledButton,
	StyledNormalButton,
	StyledInput,
	StyledDivWrapper,
	StyledForm,
} from './style';

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
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	const { auth } = useAppSelector((store) => store.auth);
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
		if (!auth) {
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

	if (isMobileDevice) {
		return (
			<StyledContainer>
				<StyledDivWrapper justifyContent='flex-start'>
					<StyledPriceHeading>
						${pricePerNight.toLocaleString()} VND
						<StyledSpan> night</StyledSpan>
					</StyledPriceHeading>
					<StyledPriceHeading style={{ marginRight: 'auto', marginTop: '5px' }}>
						{moment(bookDate.checkIn).format('ddd D')} -{' '}
						{moment(bookDate.checkOut).format('ddd D')}
					</StyledPriceHeading>
				</StyledDivWrapper>
				<StyledDivWrapper>
					<Button>Reserve</Button>
				</StyledDivWrapper>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<StyledPriceHeading>
				${pricePerNight.toLocaleString()} VND
				<StyledSpan> night</StyledSpan>
			</StyledPriceHeading>
			<StyledForm onSubmit={onSubmitHandler}>
				<StyledCardSchedule>
					<StyledCardScheduleCheckIn>
						<StyledButton borderRight type='button' className='btn-checkIn'>
							<StyledLabel htmlFor='check-in'>CHECK-IN</StyledLabel>
							<StyledInput
								value={checkInDate}
								type='text'
								name='check-in'
								id='check-in'
								onChange={onChangeHandler}
							/>
						</StyledButton>
						<StyledButton type='button' className='btn-checkOut'>
							<StyledLabel>CHECK-OUT</StyledLabel>
							<StyledInput
								value={checkOutDate}
								type='text'
								name='check-out'
								id='check-out'
								onChange={onChangeHandler}
							/>
						</StyledButton>
					</StyledCardScheduleCheckIn>
					<StyledCardScheduleGuest>
						<StyledDivWrapper>
							<StyledHeading>GUESTS</StyledHeading>
							<StyledParagraph>2 guests</StyledParagraph>
						</StyledDivWrapper>
						<StyledNormalButton type='submit'>
							<MdOutlineKeyboardArrowDown />
						</StyledNormalButton>
					</StyledCardScheduleGuest>
				</StyledCardSchedule>
				<Button fullWidth>Check Availability</Button>
			</StyledForm>
			<StyledCardDetail>
				<StyledCardDetailItem>
					<StyledParagraph textUnderline>
						${pricePerNight.toLocaleString()} x {numberOfVisitNights} nights
					</StyledParagraph>
					<StyledParagraph>
						${(pricePerNight * numberOfVisitNights).toLocaleString()}
					</StyledParagraph>
				</StyledCardDetailItem>
				<StyledCardDetailItem>
					<StyledParagraph textUnderline>Cleaning fee</StyledParagraph>
					<StyledParagraph>$200,000</StyledParagraph>
				</StyledCardDetailItem>
				<StyledCardDetailItem>
					<StyledParagraph textUnderline>Service fee</StyledParagraph>
					<StyledParagraph>$500,000</StyledParagraph>
				</StyledCardDetailItem>
			</StyledCardDetail>
			<Line margin='1.4rem 0' />
			<StyledCardTotal>
				<StyledHeading>Total before taxes</StyledHeading>
				<StyledHeading>
					$
					{(
						pricePerNight * numberOfVisitNights +
						200000 +
						500000
					).toLocaleString()}{' '}
					VND
				</StyledHeading>
			</StyledCardTotal>
		</StyledContainer>
	);
};

export default Card;
