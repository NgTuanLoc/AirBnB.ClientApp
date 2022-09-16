import { StyledContainer, StyledLabel, StyledInput } from './style';

interface IAdminFormInput {
	id: string;
	inputName: string;
	disableInput?: boolean;
	inputType: string;
	defaultValue?: any;
	marginBottom?: boolean;
	isChecked?: boolean;
	register?: any;
	onChangeHandler?: any;
}

const AdminFormInput = ({
	id,
	inputName,
	disableInput,
	inputType,
	defaultValue,
	marginBottom,
	isChecked,
	register,
	onChangeHandler,
}: IAdminFormInput) => {
	if (inputType === 'checkbox')
		return (
			<StyledContainer>
				<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
				<StyledInput
					defaultChecked={isChecked}
					type={inputType}
					placeholder={inputName}
					marginBottom={marginBottom}
					{...register}
				/>
			</StyledContainer>
		);

	return (
		<StyledContainer key={id}>
			<StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
			<StyledInput
				type={inputType}
				disabled={disableInput}
				defaultValue={defaultValue}
				placeholder={inputName}
				onChange={onChangeHandler}
				{...register}
			/>
		</StyledContainer>
	);
};

export default AdminFormInput;
