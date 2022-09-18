import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GiSparkles } from 'react-icons/gi';

import { Modal } from '../../layouts';
import { Line } from '../../components';
import { THINGS_TO_KNOW_DATA } from '../../constant';
import {
	StyledContainer,
	StyledListContainer,
	StyledList,
	StyledDivWrapper,
	StyledListItem,
	StyledButton,
	StyledHeading,
} from './style';

const ThingsToKnow = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [modalContent, setModalContent] = useState(0);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	const onClickModal = (id: number) => {
		return () => {
			setIsModalOpen(true);
			setModalContent(id);
		};
	};

	if (isMobileDevice) {
		return (
			<StyledContainer>
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
					<StyledList>
						<StyledListItem fontSize='2.5rem' isBold>
							{THINGS_TO_KNOW_DATA[modalContent].title}
						</StyledListItem>
						<StyledListItem flexDirection='column'>
							{THINGS_TO_KNOW_DATA[modalContent].list.map((listItem, index) => {
								return (
									<StyledDivWrapper key={`${index + Math.random()}`}>
										{listItem}
									</StyledDivWrapper>
								);
							})}
						</StyledListItem>
						{modalContent !== 0 && (
							<StyledButton>
								Show more
								<MdOutlineKeyboardArrowRight />
							</StyledButton>
						)}
					</StyledList>
				</Modal>
				<StyledListContainer>
					<StyledList>
						<StyledListItem isBold>House rules</StyledListItem>
						<StyledListItem>
							<AiFillClockCircle /> Check-in: 3:00 PM - 11:00 PM
						</StyledListItem>
					</StyledList>
					<StyledButton>
						<MdOutlineKeyboardArrowRight onClick={onClickModal(0)} />
					</StyledButton>
				</StyledListContainer>
				<Line />
				<StyledListContainer>
					<StyledList>
						<StyledListItem isBold>Health & safety</StyledListItem>
						<StyledListItem>
							<GiSparkles /> Airbnb's COVID-19 safety practices apply
						</StyledListItem>
					</StyledList>
					<StyledButton>
						<MdOutlineKeyboardArrowRight onClick={onClickModal(1)} />
					</StyledButton>
				</StyledListContainer>
				<Line />
				<StyledListContainer>
					<StyledList>
						<StyledListItem isBold>Cancellation policy</StyledListItem>
						<StyledListItem>This reservation is non-refundable.</StyledListItem>
						<StyledListItem>
							Review the Host’s full cancellation policy which applies even if
							you cancel for illness or disruptions caused by COVID-19.
						</StyledListItem>
					</StyledList>
					<StyledButton>
						<MdOutlineKeyboardArrowRight onClick={onClickModal(2)} />
					</StyledButton>
				</StyledListContainer>
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<StyledHeading>Things to know</StyledHeading>
			<StyledListContainer>
				{THINGS_TO_KNOW_DATA.map((item, index) => {
					const { title, list } = item;

					return (
						<StyledList key={title}>
							<StyledListItem isBold>{title}</StyledListItem>
							<StyledListItem>
								{list.map((listItem, index) => {
									return (
										<StyledDivWrapper key={`${index + Math.random()}`}>
											{listItem}
										</StyledDivWrapper>
									);
								})}
							</StyledListItem>
							{index !== 0 && (
								<StyledButton>
									Show more
									<MdOutlineKeyboardArrowRight />
								</StyledButton>
							)}
						</StyledList>
					);
				})}
			</StyledListContainer>
		</StyledContainer>
	);
};

export default ThingsToKnow;
