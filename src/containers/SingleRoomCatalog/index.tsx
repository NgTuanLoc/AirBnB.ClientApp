import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoShareOutline } from 'react-icons/io5';

import { useAppSelector } from '../../hooks';
import { Catalog, Line } from '../../components';
import {
	StyledNavbar,
	StyledLocationTitle,
	StyledContainer,
	StyledLinkContainer,
	StyledTitleContainer,
	StyledHeading,
	StyledSubTitle,
	StyledSubTitleLink,
	StyledCatalogContainer,
	StyledSubTitleLinkSpan,
	StyledPhotoContainer,
	StyledImage,
	StyledButton,
	StyledBackHomeButton,
	StyledDivWrapper,
	StyledSkeletonLoadingWrapper,
} from './style';

const SingleRoomCatalog = () => {
	const { selectedRoom, isLoading } = useAppSelector((store) => store.room);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	const { name, location, imageList } = selectedRoom;

	const imageUrlList = imageList.map((image) => image.highQualityUrl);

	return (
		<StyledContainer>
			{isMobileDevice && (
				<StyledNavbar>
					<StyledBackHomeButton to='/'>
						<IoIosArrowBack />
						Homes
					</StyledBackHomeButton>
					<StyledDivWrapper>
						<StyledButton>
							<IoShareOutline />
						</StyledButton>
						<StyledButton>
							<AiOutlineHeart />
						</StyledButton>
					</StyledDivWrapper>
				</StyledNavbar>
			)}
			{!isMobileDevice && (
				<StyledTitleContainer>
					<StyledLocationTitle>
						{isLoading ? (
							<Skeleton width='60%' />
						) : (
							`${name}${location.name ? `, ${location.name}` : ''}${
								location.province ? `, ${location.province}` : ''
							}`
						)}
					</StyledLocationTitle>
					<StyledLinkContainer>
						<StyledHeading isLoading={isLoading}>
							{isLoading ? (
								<Skeleton width='30rem' />
							) : (
								`${name}${location.country ? `, ${location.country}` : ''}${
									location.province ? `, ${location.province}` : ''
								}`
							)}
						</StyledHeading>
						{!isLoading && (
							<StyledSubTitle>
								<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
									<FiShare />{' '}
									<StyledSubTitleLinkSpan>Share</StyledSubTitleLinkSpan>
								</StyledSubTitleLink>
								<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
									<AiOutlineHeart />{' '}
									<StyledSubTitleLinkSpan>Save</StyledSubTitleLinkSpan>
								</StyledSubTitleLink>
							</StyledSubTitle>
						)}
					</StyledLinkContainer>
				</StyledTitleContainer>
			)}

			{isMobileDevice ? (
				<StyledCatalogContainer>
					<Catalog borderRadius='0' images={imageUrlList} />
				</StyledCatalogContainer>
			) : (
				<StyledPhotoContainer>
					<StyledSkeletonLoadingWrapper gridArea='main'>
						{isLoading ? (
							<Skeleton borderRadius='var(--radius) 0 0 var(--radius)' />
						) : (
							<StyledImage
								borderRadius='var(--radius) 0 0 var(--radius)'
								url={imageUrlList[0]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-1'>
						{isLoading ? (
							<Skeleton borderRadius='0' />
						) : (
							<StyledImage borderRadius='0' url={imageUrlList[1]} alt={name} />
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-2'>
						{isLoading ? (
							<Skeleton borderRadius='0 var(--radius) 0 0' />
						) : (
							<StyledImage
								borderRadius='0 var(--radius) 0 0'
								url={imageUrlList[2]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-3'>
						{isLoading ? (
							<Skeleton borderRadius='0' />
						) : (
							<StyledImage borderRadius='0' url={imageUrlList[3]} alt={name} />
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-4'>
						{isLoading ? (
							<Skeleton borderRadius='0 0 var(--radius) 0' />
						) : (
							<StyledImage
								borderRadius='0 0 var(--radius) 0'
								url={imageUrlList[4]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
				</StyledPhotoContainer>
			)}
			{isMobileDevice && (
				<StyledTitleContainer>
					<StyledLocationTitle>
						{name}, {location ? location?.name : ''},{' '}
						{location ? location?.province : ''}
					</StyledLocationTitle>
					<StyledLinkContainer>
						<StyledHeading>{location ? location.province : ''}</StyledHeading>
						<StyledSubTitle>
							<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
								<FiShare />{' '}
								<StyledSubTitleLinkSpan>Share</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
							<StyledSubTitleLink
								className='flex-center'
								href='https://github.com/NgTuanLoc'>
								<AiOutlineHeart />{' '}
								<StyledSubTitleLinkSpan>Save</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
						</StyledSubTitle>
					</StyledLinkContainer>
					<Line />
				</StyledTitleContainer>
			)}
		</StyledContainer>
	);
};

export default SingleRoomCatalog;
