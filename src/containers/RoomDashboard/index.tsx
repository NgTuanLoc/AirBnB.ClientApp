// import { useState, useEffect } from 'react';

import { usePagination } from '../../hooks';
import {
	StyledContainer,
	StyledPaginateContainer,
	StyledPrevButton,
	StyledNextButton,
	StyledPageButton,
} from './style';

const RoomDashboard = () => {
	const { currentPage, setCurrentPage, nextPage, prevPage, pageArray } =
		usePagination(199);

	return (
		<StyledContainer>
			<StyledPaginateContainer>
				<StyledPrevButton onClick={prevPage}>Prev</StyledPrevButton>
				{pageArray.map((page, index) => {
					return (
						<StyledPageButton
							key={index}
							active={currentPage === page}
							onClick={() => setCurrentPage(page)}>
							{page + 1}
						</StyledPageButton>
					);
				})}
				<StyledNextButton onClick={nextPage}>Next</StyledNextButton>
			</StyledPaginateContainer>
		</StyledContainer>
	);
};

export default RoomDashboard;
