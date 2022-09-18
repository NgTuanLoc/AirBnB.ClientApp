import { ReactNode, useRef } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import { useOnClickOutside } from '../../hooks';
import {
	StyledContainer,
	StyledContentContainer,
	StyledContent,
	StyledCloseButton,
} from './style';

interface IModal {
	children?: ReactNode;
	isModalOpen?: boolean;
	setIsModalOpen?: any;
}

const Modal = ({ children, isModalOpen, setIsModalOpen }: IModal) => {
	const ref = useRef(null);
	useOnClickOutside(ref, () => setIsModalOpen(false));

	return (
		<StyledContainer isOpen={isModalOpen}>
			<StyledContentContainer ref={ref}>
				<StyledCloseButton onClick={() => setIsModalOpen(!isModalOpen)}>
					<MdOutlineKeyboardArrowLeft />
				</StyledCloseButton>
				<StyledContent>{children}</StyledContent>
			</StyledContentContainer>
		</StyledContainer>
	);
};

export default Modal;
