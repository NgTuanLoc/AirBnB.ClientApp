import styled from 'styled-components';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useOnClickOutside, useAppDispatch } from '../../hooks';
import { Loading, Button } from '..';
import { formType } from '../../constant/FormType';

export interface IModal<T> {
	title: string;
	isModalOpen: boolean;
	setIsModalOpen: any;
	isLoading: boolean;
	disableInput?: boolean;
	data: T | null;
	dispatchFunction?: any;
}

const AdminForm = <T extends { [key: string]: any }>({
	title,
	isModalOpen,
	setIsModalOpen,
	dispatchFunction,
	disableInput,
	data,
}: IModal<T>) => {
	const dispatch = useAppDispatch();
	const ref = useRef(null);
	useOnClickOutside(ref, () => setIsModalOpen(false));
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

	const onSubmitHandler = (data: any) => {
		setIsModalOpen(false);
		dispatch(dispatchFunction(data));
	};

	if (!data)
		return (
			<Container isModalOpen={isModalOpen}>
				<Loading />
			</Container>
		);

	const objectKeys = Object.keys(data);

	return (
		<Container isModalOpen={isModalOpen}>
			<Card ref={ref} onSubmit={handleSubmit(onSubmitHandler)}>
				<Title>{title}</Title>
				<CardBody>
					{objectKeys.map((key, id) => {
						let info = data[key] ? data[key] : 'Not Provided';
						if (info?.length === 0) info = 'null';
						let inputType = formType[key] ? formType[key] : 'text';

						if (key === 'birthday') {
							info = new Date(data[key]).toISOString().substring(0, 10);
						}

						if (key === 'gender') {
							inputType = 'checkbox';
						}

						return (
							<CardItem key={id}>
								<CardItemHeader htmlFor={key}>{key}</CardItemHeader>
								<CardItemInfo
									disabled={disableInput}
									type={inputType}
									defaultValue={info}
									placeholder={key}
									{...register(key, {
										required: {
											value: true,
											message: `${key} must be provided`,
										},
									})}
								/>
							</CardItem>
						);
					})}
				</CardBody>
				{title === 'Update User' && (
					<Button fullWidth bgColor='#ffc107'>
						Update
					</Button>
				)}
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
	cursor: pointer;

	* {
		cursor: default;
	}
`;

const Card = styled.form`
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
	margin-bottom: 2rem;
`;

const CardItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`;

const CardItemHeader = styled.label`
	font-size: 2rem;
	text-transform: capitalize;
`;

const CardItemInfo = styled.input`
	width: 100%;
	font-size: 2rem;
	border: none;
	padding-bottom: 1rem;
	border-bottom: 2px solid black;
	outline: none;
	cursor: pointer;
`;

export default AdminForm;
