import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { selectLocation } from '../features/Room/roomSlice';

const Categories = () => {
	const { locationList } = useAppSelector((store) => store.location);
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
							<div>
								<img src={image} alt={province} />
							</div>
							<h5>{province}</h5>
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
		top: 40%;
		color: black;
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 12.5rem;
	text-align: center;
	cursor: pointer;

	img {
		border-radius: var(--radius);
		height: 15rem;
	}
`;

export default Categories;
