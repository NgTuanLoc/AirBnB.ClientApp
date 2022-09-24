import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledContainer = styled(Swiper)`
	width: 100%;
	padding: 1rem 0.5rem !important;

	.swiper-button-next,
	.swiper-button-prev {
		color: black;
	}
`;

const StyledSwiperItem = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.02) !important;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px !important;
	border-radius: 12px;
	color: rgb(34, 34, 34) !important;
	white-space: normal !important;
	background-color: white;
	box-shadow: var(--light-shadow);
	display: flex;
	flex-direction: column;
	min-height: 12.5rem;
	text-align: center;
	cursor: pointer;
`;

const StyledImageContainer = styled.div`
	border-radius: var(--radius);
	height: 14rem;
	margin-bottom: 1rem;
`;

const StyledHeading = styled.h5`
	padding: 1rem;
	padding-right: 0;
	text-align: start;
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
