import { useState, useRef } from 'react';
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useOnClickOutside } from '../../hooks';
import {
	StyledContainer,
	StyledButton,
	StyledDivWrapper,
	StyledModal,
	StyledParagraph,
	StyledHeading,
	StyledModalButton,
	StyledModalContent,
	StyledModalItem,
	StyledModalGuest,
	StyledButtonContainer,
} from './style';

const GuestInput = () => {
	const ref = useRef(null);
	const [people, setPeople] = useState({
		guests: 1,
		children: 1,
		infants: 0,
		pets: 0,
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	useOnClickOutside(ref, () => setIsModalOpen(false));

	const openModalHandler = () => {
		setIsModalOpen(!isModalOpen);
	};

	const onClickHandler = (
		type: 'minus' | 'plus',
		guestType: 'guests' | 'children' | 'infants' | 'pets'
	) => {
		return () => {
			if (type === 'plus') {
				setPeople({ ...people, [guestType]: people[guestType] + 1 });
			} else {
				setPeople({ ...people, [guestType]: people[guestType] - 1 });
			}
		};
	};

	return (
		<StyledContainer>
			<StyledDivWrapper>
				<StyledHeading>GUESTS</StyledHeading>
				<StyledParagraph>{`${
					people.guests + people.children > 1
						? `${people.guests + people.children} guests`
						: `${people.guests + people.children} guest`
				} ${
					people.infants > 1
						? `, ${people.infants} infants`
						: `, ${people.infants} infant`
				} ${
					people.pets > 1 ? `, ${people.pets} pets` : `, ${people.pets} pet`
				}`}</StyledParagraph>
			</StyledDivWrapper>
			<StyledDivWrapper ref={ref}>
				<StyledButton type='button' onClick={openModalHandler}>
					{isModalOpen ? (
						<MdOutlineKeyboardArrowDown />
					) : (
						<MdOutlineKeyboardArrowUp />
					)}
				</StyledButton>
				<StyledModal isModalOpen={isModalOpen}>
					<StyledModalContent>
						<StyledModalItem>
							<StyledModalGuest>
								<StyledHeading>Adults</StyledHeading>
								<StyledParagraph>Age 13+</StyledParagraph>
							</StyledModalGuest>
							<StyledButtonContainer>
								<StyledModalButton onClick={onClickHandler('minus', 'guests')}>
									<AiOutlineMinus />
								</StyledModalButton>
								<StyledParagraph>{people.guests}</StyledParagraph>
								<StyledModalButton onClick={onClickHandler('plus', 'guests')}>
									<AiOutlinePlus />
								</StyledModalButton>
							</StyledButtonContainer>
						</StyledModalItem>
						<StyledModalItem>
							<StyledModalGuest>
								<StyledHeading>Children</StyledHeading>
								<StyledParagraph>Ages 2-12</StyledParagraph>
							</StyledModalGuest>
							<StyledButtonContainer>
								<StyledModalButton
									onClick={onClickHandler('minus', 'children')}>
									<AiOutlineMinus />
								</StyledModalButton>
								<StyledParagraph>{people.children}</StyledParagraph>
								<StyledModalButton onClick={onClickHandler('plus', 'children')}>
									<AiOutlinePlus />
								</StyledModalButton>
							</StyledButtonContainer>
						</StyledModalItem>
						<StyledModalItem>
							<StyledModalGuest>
								<StyledHeading>Infants</StyledHeading>
								<StyledParagraph>Under 2</StyledParagraph>
							</StyledModalGuest>
							<StyledButtonContainer>
								<StyledModalButton onClick={onClickHandler('minus', 'infants')}>
									<AiOutlineMinus />
								</StyledModalButton>
								<StyledParagraph>{people.infants}</StyledParagraph>
								<StyledModalButton onClick={onClickHandler('plus', 'infants')}>
									<AiOutlinePlus />
								</StyledModalButton>
							</StyledButtonContainer>
						</StyledModalItem>
						<StyledModalItem>
							<StyledModalGuest>
								<StyledHeading>Pets</StyledHeading>
								<StyledParagraph>Bringing a service animal?</StyledParagraph>
							</StyledModalGuest>
							<StyledButtonContainer>
								<StyledModalButton onClick={onClickHandler('minus', 'pets')}>
									<AiOutlineMinus />
								</StyledModalButton>
								<StyledParagraph>{people.pets}</StyledParagraph>
								<StyledModalButton onClick={onClickHandler('plus', 'pets')}>
									<AiOutlinePlus />
								</StyledModalButton>
							</StyledButtonContainer>
						</StyledModalItem>
					</StyledModalContent>
				</StyledModal>
			</StyledDivWrapper>
		</StyledContainer>
	);
};

export default GuestInput;
