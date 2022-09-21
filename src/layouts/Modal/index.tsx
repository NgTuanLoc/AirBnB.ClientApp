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
	fullHeight?: boolean;
}

const Modal = ({
	children,
	isModalOpen,
	setIsModalOpen,
	fullHeight = true,
}: IModal) => {
	const ref = useRef(null);
	useOnClickOutside(ref, () => setIsModalOpen(false));

	return (
		<StyledContainer
			isOpen={isModalOpen}
			className={`${fullHeight ? '' : 'flex-center'}`}>
			<StyledContentContainer ref={ref} fullHeight={fullHeight}>
				<StyledCloseButton onClick={() => setIsModalOpen(!isModalOpen)}>
					<MdOutlineKeyboardArrowLeft />
				</StyledCloseButton>
				<StyledContent>{children}</StyledContent>
			</StyledContentContainer>
		</StyledContainer>
	);
};

export default Modal;
