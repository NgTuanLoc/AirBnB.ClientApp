import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import moment from 'moment';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Line } from '../../components';
import { bookRoomById } from '../../features/Room/roomThunk';
import { transformDate } from '../../utils';
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

const Card = () => {
	const { auth } = useAppSelector((store) => store.auth);
	const { bookDate, numberOfVisitDay } = useAppSelector(
		(store) => store.global
	);
	const {
		selectedRoom: { _id, price },
	} = useAppSelector((store) => store.room);

	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	const [isBooked, setIsBooked] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		console.log(name, value);
	};

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (!auth) {
			navigate('/login');
		}
		dispatch(
			bookRoomById({
				roomId: _id,
				checkIn: transformDate(bookDate.checkIn),
				checkOut: transformDate(bookDate.checkOut),
			})
		);
		setIsBooked(true);
	};

	if (isMobileDevice) {
		return (
			<StyledContainer>
				<StyledDivWrapper justifyContent='flex-start'>
					<StyledPriceHeading>
						${price.toLocaleString()} VND
						<StyledSpan>/night</StyledSpan>
					</StyledPriceHeading>
					<StyledPriceHeading style={{ marginRight: 'auto', marginTop: '5px' }}>
						{moment(bookDate.checkIn).format('MMM D')}-
						{moment(bookDate.checkOut).format('MMM D')}
					</StyledPriceHeading>
				</StyledDivWrapper>
				<StyledDivWrapper>
					<Button onClickHandler={onSubmitHandler}>
						{isBooked ? 'Purchased' : 'Reserve'}
					</Button>
				</StyledDivWrapper>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<StyledPriceHeading>
				${price.toLocaleString()} VND
				<StyledSpan> night</StyledSpan>
			</StyledPriceHeading>
			<StyledForm onSubmit={onSubmitHandler}>
				<StyledCardSchedule>
					<StyledCardScheduleCheckIn>
						<StyledButton borderRight type='button' className='btn-checkIn'>
							<StyledLabel htmlFor='check-in'>CHECK-IN</StyledLabel>
							<StyledInput
								value={transformDate(bookDate.checkIn, 'l')}
								type='text'
								name='check-in'
								id='check-in'
								onChange={onChangeHandler}
							/>
						</StyledButton>
						<StyledButton type='button' className='btn-checkOut'>
							<StyledLabel>CHECK-OUT</StyledLabel>
							<StyledInput
								value={transformDate(bookDate.checkOut, 'l')}
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
				<Button fullWidth>
					{isBooked ? 'Purchased' : 'Check Availability'}
				</Button>
			</StyledForm>
			<StyledCardDetail>
				<StyledCardDetailItem>
					<StyledParagraph textUnderline>
						${price.toLocaleString()} x {numberOfVisitDay} nights
					</StyledParagraph>
					<StyledParagraph>
						${(price * numberOfVisitDay).toLocaleString()}
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
					${(price * numberOfVisitDay + 200000 + 500000).toLocaleString()} VND
				</StyledHeading>
			</StyledCardTotal>
		</StyledContainer>
	);
};

export default Card;
