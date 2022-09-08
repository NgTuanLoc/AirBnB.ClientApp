import CalenderReact from 'react-calendar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { StyledContainer } from './style';

interface ICalendar {
	setBookDate?: any;
}

const Calendar = ({ setBookDate }: ICalendar) => {
	const currentDate = new Date();
	const nextDate = new Date();

	nextDate.setDate(currentDate.getDate());
	const [value, setValue] = useState<any>(currentDate);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	useEffect(() => {
		if (value.length === 2) {
			setBookDate({
				checkIn: value[0],
				checkOut: value[1],
			});
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
