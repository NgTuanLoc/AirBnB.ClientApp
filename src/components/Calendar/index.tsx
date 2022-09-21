import CalenderReact from 'react-calendar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'react-calendar/dist/Calendar.css';

import { useAppDispatch } from '../../hooks';
import { setBookDate } from '../../features/Global/globalSlice';
import { StyledContainer } from './style';

const Calendar = () => {
	const dispatch = useAppDispatch();
	const currentDate = new Date();
	const [value, setValue] = useState<any>(currentDate);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	useEffect(() => {
		if (value.length === 2) {
			dispatch(
				setBookDate({ checkInValue: value[0], checkOutValue: value[1] })
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
