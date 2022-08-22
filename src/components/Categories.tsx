import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import Skeleton from 'react-loading-skeleton';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { selectLocation } from '../features/Room/roomSlice';
import Image from './Image';

const Categories = () => {
	const { locationList, isLoading } = useAppSelector((store) => store.location);
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	return (
		<Container
			spaceBetween={isMobileDevice ? 5 : 10}
			slidesPerView={isMobileDevice ? 4 : 8}
			navigation={true}
			modules={[Navigation]}>
			{locationList.map((location) => {
				const { _id, image, province } = location;

				return (
					<SwiperSlide key={_id} onClick={() => dispatch(selectLocation(_id))}>
						<Item>
							<div className='image-container'>
								<Image url={image} alt={province} />
							</div>
							{isLoading ? <Skeleton /> : <h5>{province}</h5>}
						</Item>
					</SwiperSlide>
				);
			})}
		</Container>
	);
};

const Container = styled(Swiper)`
	width: 100%;

	.swiper-button-next,
	.swiper-button-prev {
		top: 50%;
		transform: translateY(-50%);
		color: black;
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 12.5rem;
	text-align: center;
	cursor: pointer;

	.image-container {
		border-radius: var(--radius);
		height: 12rem;

		img {
			border-radius: var(--radius);
		}
	}
`;

export default Categories;
