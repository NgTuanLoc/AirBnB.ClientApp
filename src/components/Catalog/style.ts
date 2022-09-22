import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	.swiper-pagination-bullet-active {
		background-color: white !important;
	}
	.swiper-pagination-bullet {
		background-color: white;
	}

	.swiper-button-next,
	.swiper-button-prev {
		color: black;
		transition: var(--transition);
		opacity: 0;

		::after {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 30px;
			width: 30px;
			box-shadow: var(--box-shadow);
			text-align: center;
			font-weight: bold;
			border-radius: 50%;
			padding: 15px;
			color: black;
			z-index: 12;
			font-size: 10px;
			background-color: rgba(254, 254, 255, 0.9);
		}
	}

	:hover {
		.swiper-button-next,
		.swiper-button-prev {
			opacity: 1;
		}
	}
`;

const StyledHeartIcon = styled(AiFillHeart)`
	display: block;
	fill: rgba(0, 0, 0, 0.5);
	height: 24px;
	width: 24px;
	stroke: white !important;
	stroke-width: 7rem !important;
	overflow: visible;
`;

const StyledLikeButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	top: 1.5rem;
	right: 1.5rem;
	color: white;
	background-color: transparent;
	border-radius: 50%;
	transition: transform 0.25s ease 0s;
	margin: -2px 0px 0px;
	padding: 2px 0px 0px;
`;

export { StyledContainer, StyledHeartIcon, StyledLikeButton };
