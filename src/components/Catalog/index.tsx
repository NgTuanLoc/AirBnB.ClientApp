// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { StyledContainer } from './style';
import { Image } from '../';

interface ICatalog {
	images: string[];
	borderRadius?: string;
}

const Catalog = ({ images, borderRadius }: ICatalog) => {
	return (
		<StyledContainer>
			<Swiper
				style={{ height: '100%' }}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}>
				{images.map((image, id) => (
					<SwiperSlide key={id}>
						<Image
							borderRadius={borderRadius}
							url={image}
							alt={`house ${id}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</StyledContainer>
	);
};

export default Catalog;
