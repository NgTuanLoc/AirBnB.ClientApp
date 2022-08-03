// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import styled from 'styled-components';

interface ICatalog {
	images: string[];
}

const Catalog = ({ images }: ICatalog) => {
	return (
		<Container>
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}>
				{images.map((image, id) => (
					<SwiperSlide key={id}>
						<img src={image} alt={`house ${id}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

const Container = styled.div``;

export default Catalog;
