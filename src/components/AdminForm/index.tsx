import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useOnClickOutside, useAppDispatch } from '../../hooks';
import { mapOriginValueToFormInput } from '../../utils';
import { Loading, Button, AdminFormInput } from '..';
import {
	StyledContainer,
	StyledForm,
	StyledTitle,
	StyledFormBody,
} from './style';

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
	dispatchUploadImageFunction?: any;
	dummyData?: any;
	imageName?: string;
}

const AdminForm = <T extends { [key: string]: any }>({
	formType,
	title,
	isModalOpen,
	setIsModalOpen,
	dispatchFunction,
	dispatchUploadImageFunction,
	disableInput,
	data,
	dummyData,
	imageName,
}: IModal<T>) => {
	const dispatch = useAppDispatch();
	const ref = useRef(null);
	const [formData, setFormData] = useState<FormData | null>(null);
	useOnClickOutside(ref, () => setIsModalOpen(false));
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

	const onUploadImageHandler = (e: any) => {
		const image = new FormData();
		const file = e.target.files[0];

		if (imageName && file) {
			image.append(imageName, file);
			setFormData(image);
		}
	};

	const onSubmitHandler = (data: any) => {
		setIsModalOpen(false);
		dispatch(dispatchFunction(data));

		if (formData) {
			const imageData = { id: data._id, image: formData };
			dispatch(dispatchUploadImageFunction(imageData));
		}

		setFormData(null);
	};

	if (!data)
		return (
			<StyledContainer isModalOpen={isModalOpen}>
				<Loading />
			</StyledContainer>
		);

	const objectKeys = Object.keys(data).filter((key) => {
		if (key === 'deleteAt') return false;
		if (key === '__v') return false;
		if (key === 'image') return false;

		return true;
	});

	return (
		<StyledContainer isModalOpen={isModalOpen}>
			<StyledForm ref={ref} onSubmit={handleSubmit(onSubmitHandler)}>
				<StyledTitle>{title}</StyledTitle>
				<StyledFormBody>
					{objectKeys.map((key) => {
						const { value, inputType } = mapOriginValueToFormInput(
							key,
							data[key]
						);

						return (
							<AdminFormInput
								id={key}
								inputName={key}
								disableInput={disableInput}
								defaultValue={value}
								inputType={inputType}
								register={register(key)}
								marginBottom={inputType === 'checkbox'}
								isChecked={value}
							/>
						);
					})}
					<AdminFormInput
						disableInput={disableInput}
						id='uploadImage'
						inputName='uploadImage'
						inputType='file'
						onChangeHandler={onUploadImageHandler}
					/>
				</StyledFormBody>
				{formType === 'UPDATE' && (
					<Button fullWidth bgColor='#ffc107'>
						Update
					</Button>
				)}
			</StyledForm>
		</StyledContainer>
	);
};

export default AdminForm;
