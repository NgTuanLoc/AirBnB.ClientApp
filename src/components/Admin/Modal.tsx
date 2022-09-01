import styled from 'styled-components';
import { useState, useRef } from 'react';

import { useOnClickOutside } from '../../hooks/useClickOutsideHook';
export interface IModal {
	title: string;
	data?: any;
}

const Modal = ({ title }: IModal) => {
	const ref = useRef(null);
	const [isModalOpen, setIsModalOpen] = useState(true);
	useOnClickOutside(ref, () => setIsModalOpen(false));

	console.log(isModalOpen);

	return (
		<Container isModalOpen={isModalOpen}>
			<Card ref={ref}>
				<Title>{title}</Title>
			</Card>
		</Container>
	);
};

const Container = styled.div<{ isModalOpen: boolean }>`
	display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const Card = styled.article`
	width: 70rem;
	height: 100rem;
	background-color: white;
	border-radius: var(--radius);
	overflow-y: scroll;
	padding: 4rem;
`;

const Title = styled.h3``;

export default Modal;
