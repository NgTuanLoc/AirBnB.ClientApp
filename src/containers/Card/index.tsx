import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { FormEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ClipLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button, Line, BookingDateInput, GuestInput } from '../../components';
import { bookRoomById } from '../../features/Room/roomThunk';
import {
	StyledContainer,
	StyledHeading,
	StyledSpan,
	StyledPriceHeading,
	StyledCardTotal,
	StyledParagraph,
	StyledCardDetail,
	StyledButtonContainer,
	StyledCardDetailItem,
	StyledCardSchedule,
	StyledDivWrapper,
	StyledForm,
} from './style';

const Card = () => {
	const { auth } = useAppSelector((store) => store.auth);
	const { isLoading } = useAppSelector((store) => store.room);
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

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (!auth) {
			navigate('/login');
		}
		dispatch(
			bookRoomById({
				roomId: _id,
				checkIn: bookDate.checkIn,
				checkOut: bookDate.checkOut,
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
					<StyledButtonContainer width='15rem'>
						<Button fullWidth onClickHandler={onSubmitHandler}>
							{isLoading ? (
								<ClipLoader color='#36d7b7' size={22} />
							) : isBooked ? (
								'Purchased'
							) : (
								'Reserve'
							)}
						</Button>
					</StyledButtonContainer>
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
					<BookingDateInput />
					<GuestInput />
				</StyledCardSchedule>
				<StyledDivWrapper style={{ paddingInline: '1px' }}>
					<StyledButtonContainer>
						<Button fullWidth>
							{isLoading ? (
								<ClipLoader color='#36d7b7' size={22} />
							) : isBooked ? (
								'Purchased'
							) : (
								'Reserve'
							)}
						</Button>
					</StyledButtonContainer>
				</StyledDivWrapper>
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
