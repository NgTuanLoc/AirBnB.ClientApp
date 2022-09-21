import CalenderReact from 'react-calendar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'react-calendar/dist/Calendar.css';

import { useAppDispatch } from '../../hooks';
import { setBookDate } from '../../features/Global/globalSlice';
import { StyledContainer } from './style';
import { transformDate } from '../../utils';

const Calendar = () => {
	const dispatch = useAppDispatch();
	const currentDate = new Date();
	const [value, setValue] = useState<any>(currentDate);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	useEffect(() => {
		if (value.length === 2) {
			const [checkInValue, checkOutValue] = value;
			const numberOfVisitDayValue = Math.round(
				(checkOutValue.getTime() - checkInValue.getTime()) / (1000 * 3600 * 24)
			);

			dispatch(
				setBookDate({
					checkInValue: transformDate(checkInValue),
					checkOutValue: transformDate(checkOutValue),
					numberOfVisitDayValue,
				})
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<StyledContainer>
			<CalenderReact
				minDate={currentDate}
				value={value}
				onChange={setValue}
				selectRange={true}
				showDoubleView={!isMobileDevice}
			/>
		</StyledContainer>
	);
};

export default Calendar;
