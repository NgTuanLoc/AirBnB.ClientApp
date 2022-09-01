import styled from 'styled-components';
import { useRef } from 'react';

import { useOnClickOutside } from '../../hooks/useClickOutsideHook';
import { Loading } from '..';
export interface IModal<T> {
	title: string;
	isModalOpen: boolean;
	setIsModalOpen: any;
	isLoading: boolean;
	disableInput?: boolean;
	data: T | null;
}

const Modal = <T extends { [key: string]: any }>({
	title,
	isModalOpen,
	setIsModalOpen,
	isLoading,
	disableInput,
	data,
}: IModal<T>) => {
	const ref = useRef(null);
	useOnClickOutside(ref, () => setIsModalOpen(false));

	if (!data) return <Loading />;

	const objectKeys = Object.keys(data);

	return (
		<Container isModalOpen={isModalOpen}>
			{isLoading ? (
				<Loading />
			) : (
				<Card ref={ref}>
					<Title>{title}</Title>
					<CardBody>
						{objectKeys.map((key, id) => {
							let info = data[key] ? data[key] : 'Not Provided';
							if (info?.length === 0) info = 'null';

							return (
								<CardItem key={id}>
									<CardItemHeader>{key}</CardItemHeader>
									<CardItemInfo disableInput={disableInput} value={info} />
								</CardItem>
							);
						})}
					</CardBody>
				</Card>
			)}
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
	cursor: pointer;

	* {
		cursor: default;
	}
`;

const Card = styled.article`
	margin-inline: 20rem;
	min-width: 50rem;
	height: 50rem;
	background-color: white;
	border-radius: var(--radius);
	overflow-y: scroll;
	padding: 4rem;
`;

const Title = styled.h3`
	margin-bottom: 3rem;
`;

const CardBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
`;

const CardItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;

const CardItemHeader = styled.h4``;

const CardItemInfo = styled.input<{ disableInput?: boolean }>`
	pointer-events: ${(props) => (props.disableInput ? 'none' : 'auto')};
	font-size: 2rem;
	border: none;
	padding-bottom: 1rem;
	border-bottom: 2px solid black;
	outline: none;
	cursor: pointer;
`;

export default Modal;
