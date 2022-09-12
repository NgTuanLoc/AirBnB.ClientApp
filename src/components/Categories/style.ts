import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledContainer = styled(Swiper)`
	width: 100%;

	.swiper-button-next,
	.swiper-button-prev {
		top: 50%;
		transform: translateY(-50%);
		color: black;
	}
`;

const StyledSwiperItem = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 12.5rem;
	text-align: center;
	cursor: pointer;
`;

const StyledImageContainer = styled.div`
	border-radius: var(--radius);
	height: 12rem;
`;

const StyledHeading = styled.h5`
	margin-top: 1rem;
`;

export {
	StyledContainer,
	StyledSwiperItem,
	StyledImageContainer,
	StyledHeading,
};
