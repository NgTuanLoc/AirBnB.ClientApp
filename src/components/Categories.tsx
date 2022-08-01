import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import { useAppSelector } from '../hooks/hooks';

const Categories = () => {
	const { locationList } = useAppSelector((store) => store.location);

	return (
		<Container
			spaceBetween={10}
			slidesPerView={8}
			navigation={true}
			modules={[Navigation]}>
			{locationList.map((location) => {
				const { _id, image, province } = location;
				return (
					<SwiperSlide key={_id}>
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
	width: 90%;

	.swiper-button-next,
	.swiper-button-prev {
		position: fixed;
	}

	.swiper-button-next {
		right: 9rem;
	}
	.swiper-button-prev {
		left: 9rem;
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 12.5rem;
	text-align: center;

	img {
		border-radius: var(--radius);
		height: 10rem;
	}
`;

export default Categories;
