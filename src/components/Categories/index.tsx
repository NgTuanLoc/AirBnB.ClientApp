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
	StyledHeading,
} from './style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectLocation } from '../../features/Room/roomSlice';
import { Image } from '..';

const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Categories = () => {
	const { locationList, isLoading } = useAppSelector((store) => store.location);
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	if (isLoading) {
		return (
			<StyledContainer
				spaceBetween={isMobileDevice ? 5 : 10}
				slidesPerView={isMobileDevice ? 3 : 8}
				navigation={true}
				modules={[Navigation]}>
				{skeletonArray.map((item) => {
					return (
						<SwiperSlide key={item}>
							<StyledSwiperItem>
								<StyledImageContainer>
									<Skeleton />
								</StyledImageContainer>
								<StyledHeading>
									<Skeleton />
								</StyledHeading>
							</StyledSwiperItem>
						</SwiperSlide>
					);
				})}
			</StyledContainer>
		);
	}

	return (
		<StyledContainer
			spaceBetween={isMobileDevice ? 5 : 10}
			slidesPerView={isMobileDevice ? 3 : 8}
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
							<StyledHeading>{province}</StyledHeading>
						</StyledSwiperItem>
					</SwiperSlide>
				);
			})}
		</StyledContainer>
	);
};

export default Categories;
