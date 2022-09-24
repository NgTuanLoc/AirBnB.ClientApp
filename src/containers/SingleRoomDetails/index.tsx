import { useAppDispatch, useAppSelector } from '../../hooks';
import { Modal } from '../../layouts';
import { Image } from '../../components';
import { SingleRoomInfo, Card } from '..';
import {
	StyledContainer,
	StyledModalContainer,
	StyledImageContainer,
	StyledModalInfo,
	StyledButton,
	StyledHeading,
	StyledParagraph,
} from './style';
import { setIsAnimalServiceModalOpen } from '../../features/Global/globalSlice';

const SingleRoomDetails = () => {
	const { isAnimalServiceModalOpen } = useAppSelector((store) => store.global);
	const dispatch = useAppDispatch();

	const closeModal = () => {
		dispatch(setIsAnimalServiceModalOpen(false));
	};

	return (
		<StyledContainer>
			<Modal
				isModalOpen={isAnimalServiceModalOpen}
				fullHeight={false}
				setIsModalOpen={closeModal}>
				<StyledModalContainer>
					<StyledImageContainer>
						<Image
							url='https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg'
							alt='A guest with a service animal being greeted by a host'
						/>
					</StyledImageContainer>
					<StyledModalInfo>
						<StyledHeading>Service animals</StyledHeading>
						<StyledParagraph>
							Service animals aren’t pets, so there’s no need to add them here.
						</StyledParagraph>
						<StyledParagraph>
							Traveling with an emotional support animal? Check out our{' '}
							<StyledButton fontSize='1.5rem'>
								accessibility policy
							</StyledButton>
							.
						</StyledParagraph>
					</StyledModalInfo>
				</StyledModalContainer>
			</Modal>
			<SingleRoomInfo />
			<Card />
		</StyledContainer>
	);
};

export default SingleRoomDetails;
