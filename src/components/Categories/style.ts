import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledContainer = styled(Swiper)`
	width: 100%;

	.swiper-button-next,
	.swiper-button-prev {
		top: 50%;
		transform: translateY(-50%);
		color: black;

		@media only screen and (max-width: 992px) {
			transform: translateY(-25%);
		}
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
	margin-bottom: 1rem;
`;

const StyledHeading = styled.h5`
	@media only screen and (max-width: 992px) {
		margin-top: 0.1rem;
		font-size: 1.4rem;
		font-size: 500;
	}
`;

export {
	StyledContainer,
	StyledSwiperItem,
	StyledImageContainer,
	StyledHeading,
};
