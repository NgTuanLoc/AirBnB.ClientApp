import { useState, useRef, useMemo } from 'react';
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { setIsAnimalServiceModalOpen } from '../../features/Global/globalSlice';
import { useAppDispatch, useOnClickOutside } from '../../hooks';
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
	StyledAnchorButton,
	StyledSmallParagraph,
} from './style';

const GuestInput = () => {
	const dispatch = useAppDispatch();
	const ref = useRef(null);
	const [people, setPeople] = useState({
		guests: 1,
		children: 1,
		infants: 0,
		pets: 0,
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	useOnClickOutside(ref, () => {
		setIsModalOpen(false);
	});

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
				const temp = people[guestType] - 1;

				if (temp < 0) {
					setPeople({ ...people, [guestType]: 0 });
				} else {
					setPeople({ ...people, [guestType]: people[guestType] - 1 });
				}
			}
		};
	};

	const text = useMemo(() => {
		let temp = '';
		const { guests, children, infants, pets } = people;
		if (guests + children > 1) {
			temp += `${guests + children} guests`;
		} else {
			temp += `${guests + children} guest`;
		}

		if (infants === 1) {
			temp += `, ${infants} infant`;
		} else if (infants > 1) {
			temp += `, ${infants} infants`;
		}

		if (pets === 1) {
			temp += `, ${pets} pet`;
		} else if (pets > 1) {
			temp += `, ${pets} pets`;
		}

		return temp;
	}, [people]);

	return (
		<StyledContainer>
			<StyledDivWrapper>
				<StyledHeading>GUESTS</StyledHeading>
				<StyledParagraph>{text}</StyledParagraph>
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
								<StyledAnchorButton
									onClick={() => dispatch(setIsAnimalServiceModalOpen(true))}>
									Bringing a service animal?
								</StyledAnchorButton>
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
						<StyledSmallParagraph>
							This place has a maximum of 12 guests, not including infants. Pets
							aren't allowed.
						</StyledSmallParagraph>
					</StyledModalContent>
				</StyledModal>
			</StyledDivWrapper>
		</StyledContainer>
	);
};

export default GuestInput;
