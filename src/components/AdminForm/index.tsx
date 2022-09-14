import styled from 'styled-components';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useOnClickOutside, useAppDispatch } from '../../hooks';
import { Loading, Button } from '..';
import { inputType } from '../../constant/InputType';

export type FormType = 'INFO' | 'UPDATE' | 'CREATE';
export interface IModal<T> {
	formType: FormType;
	title: string;
	isModalOpen: boolean;
	setIsModalOpen: any;
	isLoading: boolean;
	disableInput?: boolean;
	data: T | null;
	dispatchFunction?: any;
	dummyData?: any;
}

const AdminForm = <T extends { [key: string]: any }>({
	formType,
	title,
	isModalOpen,
	setIsModalOpen,
	dispatchFunction,
	disableInput,
	data,
	dummyData,
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

	if (formType === 'CREATE') {
		const objectKeys = Object.keys(dummyData);

		return (
			<Container isModalOpen={isModalOpen}>
				<Card ref={ref} onSubmit={handleSubmit(onSubmitHandler)}>
					<Title>{title}</Title>
					<CardBody>
						{objectKeys.map((key, id) => {
							let info = dummyData[key] ? dummyData[key] : 'Not Provided';

							if (info?.length === 0) info = 'null';
							let inputTypeValue = inputType[key] ? inputType[key] : 'text';

							if (key === 'birthday') {
								info = new Date(dummyData[key]).toISOString().substring(0, 10);
							}

							return (
								<CardItem key={id}>
									<CardItemHeader htmlFor={key}>{key}</CardItemHeader>
									<CardItemInfo
										disabled={disableInput}
										type={inputTypeValue}
										defaultValue={inputTypeValue === 'checkbox' ? false : info}
										placeholder={key}
										marginBottom={inputTypeValue === 'checkbox'}
										{...register(key)}
									/>
								</CardItem>
							);
						})}
					</CardBody>

					<Button fullWidth bgColor='#198754'>
						Create
					</Button>
				</Card>
			</Container>
		);
	}

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
						let inputTypeValue = inputType[key] ? inputType[key] : 'text';

						if (key === 'birthday') {
							info = new Date(data[key]).toISOString().substring(0, 10);
						}

						if (typeof info === 'boolean') {
							inputTypeValue = 'checkbox';
						}

						return (
							<CardItem key={id}>
								<CardItemHeader htmlFor={key}>{key}</CardItemHeader>
								<CardItemInfo
									disabled={disableInput}
									type={inputTypeValue}
									defaultValue={info}
									placeholder={key}
									marginBottom={true}
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
				{formType === 'UPDATE' && (
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
	border-bottom: 2px solid black;
`;

const CardItemHeader = styled.label`
	font-size: 2rem;
	text-transform: capitalize;
`;

const CardItemInfo = styled.input<{ marginBottom: boolean }>`
	width: 100%;
	font-size: 2rem;
	border: none;
	padding-bottom: 1rem;
	/* border-bottom: 2px solid black; */
	margin-bottom: ${(props) => (props.marginBottom ? '1rem' : '0')};
	outline: none;
	cursor: pointer;
`;

export default AdminForm;
