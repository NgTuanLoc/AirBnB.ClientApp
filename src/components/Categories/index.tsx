import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import Skeleton from 'react-loading-skeleton';

import {
	StyledContainer,
	StyledSwiperItem,
	StyledImageContainer,
} from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectLocation } from '../../features/Room/roomSlice';
import { Image } from '..';

const Categories = () => {
	const { locationList, isLoading } = useAppSelector((store) => store.location);
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	return (
		<StyledContainer
			spaceBetween={isMobileDevice ? 5 : 10}
			slidesPerView={isMobileDevice ? 4 : 8}
			navigation={true}
			modules={[Navigation]}>
			{locationList.map((location) => {
				const { _id, image, province } = location;

				return (
					<SwiperSlide key={_id} onClick={() => dispatch(selectLocation(_id))}>
						<StyledSwiperItem>
							<StyledImageContainer>
								<Image url={image} alt={province} />
							</StyledImageContainer>
							{isLoading ? <Skeleton /> : <h5>{province}</h5>}
						</StyledSwiperItem>
					</SwiperSlide>
				);
			})}
		</StyledContainer>
	);
};

export default Categories;
