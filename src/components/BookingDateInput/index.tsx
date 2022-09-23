import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';

import { transformDate, isValidDate } from '../../utils';

import {
	StyledContainer,
	StyledLabel,
	StyledButton,
	StyledInput,
	StyledErrorMsg,
} from './style';

const BookingDateInput = () => {
	const [reserveDate, setReserveDate] = useState({
		checkIn: '05/23/2000',
		checkOut: '05/23/2000',
	});
	const [errorInputDate, setErrorInputDate] = useState<
		'checkIn' | 'checkOut' | 'both' | null
	>(null);

	const checkOutInputRef = useRef<HTMLInputElement>(null);

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		const checkOutInput = checkOutInputRef.current;
		const name = e.target.name;

		if (name === 'check-in') {
			if (e.key === 'Enter') {
				if (isValidDate(reserveDate.checkIn)) {
					setReserveDate({
						...reserveDate,
						checkIn: transformDate(reserveDate.checkIn, 'L'),
					});
					if (checkOutInput) checkOutInput.focus();
					setErrorInputDate(null);
				} else {
					setErrorInputDate('checkIn');
				}
			}
		} else {
			if (e.key === 'Enter') {
				if (isValidDate(reserveDate.checkOut)) {
					setReserveDate({
						...reserveDate,
						checkOut: transformDate(reserveDate.checkOut, 'L'),
					});
					setErrorInputDate(null);
				} else {
					setErrorInputDate('checkOut');
				}
			}
		}
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setReserveDate({ ...reserveDate, [name]: value });
	};

	return (
		<StyledContainer>
			<StyledButton borderRight type='button' className='btn-checkIn'>
				<StyledLabel htmlFor='check-in'>CHECK-IN</StyledLabel>
				<StyledInput
					value={reserveDate.checkIn}
					type='text'
					name='checkIn'
					id='check-in'
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
					placeholder='MM/DD/YYYY'
				/>
				{errorInputDate === 'checkIn' && (
					<StyledErrorMsg>
						<AiOutlineWarning /> Invalid Check-In Date
					</StyledErrorMsg>
				)}
			</StyledButton>
			<StyledButton type='button' className='btn-checkOut'>
				<StyledLabel>CHECK-OUT</StyledLabel>
				<StyledInput
					value={reserveDate.checkOut}
					type='text'
					name='checkOut'
					id='check-out'
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
					placeholder='MM/DD/YYYY'
					ref={checkOutInputRef}
				/>
				{errorInputDate === 'checkOut' && (
					<StyledErrorMsg>
						<AiOutlineWarning /> Invalid Check-Out Date
					</StyledErrorMsg>
				)}
			</StyledButton>
		</StyledContainer>
	);
};

export default BookingDateInput;
