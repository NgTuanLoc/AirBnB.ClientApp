/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ChangeEvent } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

import { useAppDispatch, useAppSelector, usePagination } from '../../hooks';
import {
	getAllUsers,
	getUserById,
	deleteUserById,
	updateUserById,
	createUser,
} from '../../features/User/userThunk';
import { searchUser } from '../../features/User/userSlice';
import { Loading, Button } from '../../components';
import { AdminForm } from '../../components';
import { type FormType } from '../../components/AdminForm';
import { IUser } from '../../@types/User';
import { transformDate } from '../../utils';
import {
	StyledContainer,
	StyledSearchButton,
	StyledSearchContainer,
	StyledHeadButtonContainer,
	StyledSearch,
	StyledTableContainer,
	StyledTable,
	StyledTableHead,
	StyledTableBody,
	StyledTitle,
	StyledItem,
	StyledRow,
	StyledButtonContainer,
	StyledPaginateContainer,
	StyledPrevButton,
	StyledNextButton,
	StyledPageButton,
	StyledRefreshButton,
} from './style';
import { USER_DATA } from '../../constant';

const USER_PER_PAGE = 10;

const UserDashboard = () => {
	const [formType, setFormType] = useState<FormType>('INFO');
	const [displayUser, setDisplayUser] = useState<IUser[]>([]);
	const { userList, searchedUser, selectedUser, isLoading } = useAppSelector(
		(store) => store.user
	);
	const [modalTitle, setModalTitle] = useState('User Info');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useAppDispatch();
	const {
		currentPage,
		setCurrentPage,
		nextPage,
		prevPage,
		pageArray,
		maxPage,
		setMaxPage,
	} = usePagination(userList.length);
	const [rotateRefreshButton, setRotateRefreshButton] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const renderNewUser = () => {
		let tempArray = Array.from(
			{ length: USER_PER_PAGE },
			(_, i) => searchedUser[currentPage * USER_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayUser(tempArray);
	};

	const deleteUser = (id: string) => {
		return () => {
			dispatch(deleteUserById(id));
			dispatch(getAllUsers());
		};
	};

	const showUser = (id: string) => {
		return () => {
			setFormType('INFO');
			setModalTitle('User Info');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	const createNewUser = () => {
		return () => {
			setModalTitle('Create User');
			setFormType('CREATE');
			setIsModalOpen(true);
		};
	};

	const updateUser = (id: string) => {
		return () => {
			setFormType('UPDATE');
			setModalTitle('Update User');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	const onRefreshHandler = () => {
		setRotateRefreshButton(true);
		dispatch(getAllUsers());
		renderNewUser();
		setTimeout(() => {
			setRotateRefreshButton(false);
		}, 3000);
	};

	const onSearchHandler = () => {
		setCurrentPage(0);
		dispatch(searchUser(searchValue));
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		renderNewUser();
		setMaxPage(Math.floor(searchedUser.length / USER_PER_PAGE));
	}, [currentPage, userList, searchedUser, maxPage]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	if (isLoading) {
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<AdminForm<IUser>
				formType={formType}
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedUser}
				disableInput={formType === 'INFO' ? true : false}
				dispatchFunction={formType === 'UPDATE' ? updateUserById : createUser}
				dummyData={USER_DATA}
			/>
			<StyledHeadButtonContainer>
				<Button onClickHandler={createNewUser()} fullWidth={false}>
					Add New
				</Button>
				<StyledRefreshButton
					isSpin={rotateRefreshButton}
					onClick={onRefreshHandler}>
					<HiOutlineRefresh />
				</StyledRefreshButton>
			</StyledHeadButtonContainer>
			<StyledSearchContainer>
				<StyledSearch onChange={onChangeHandler} />
				<StyledSearchButton onClickHandler={onSearchHandler}>
					Search
				</StyledSearchButton>
			</StyledSearchContainer>
			<StyledTableContainer>
				<StyledTable>
					<StyledTableHead>
						<StyledRow>
							<StyledTitle>Id</StyledTitle>
							<StyledTitle>Name</StyledTitle>
							<StyledTitle>Email</StyledTitle>
							<StyledTitle>Phone</StyledTitle>
							<StyledTitle>Birthday</StyledTitle>
							<StyledTitle>Gender</StyledTitle>
							<StyledTitle>Address</StyledTitle>
							<StyledTitle>Type</StyledTitle>
							<StyledTitle>Actions</StyledTitle>
						</StyledRow>
					</StyledTableHead>
					<StyledTableBody>
						{displayUser.map((item) => {
							const {
								_id,
								name,
								email,
								phone,
								birthday,
								gender,
								address,
								type,
							} = item;
							return (
								<StyledRow key={_id}>
									<StyledItem>{_id}</StyledItem>
									<StyledItem>{name}</StyledItem>
									<StyledItem>{email}</StyledItem>
									<StyledItem>{phone}</StyledItem>
									<StyledItem>{transformDate(new Date(birthday))}</StyledItem>
									<StyledItem>{gender ? 'Male' : 'Female'}</StyledItem>
									<StyledItem>{address}</StyledItem>
									<StyledItem>{type}</StyledItem>
									<StyledItem>
										<StyledButtonContainer>
											<Button onClickHandler={showUser(_id)} bgColor='#28a745'>
												Info
											</Button>
											<Button
												onClickHandler={updateUser(_id)}
												bgColor='#ffc107'>
												Update
											</Button>
											<Button
												onClickHandler={deleteUser(_id)}
												bgColor='#dc3545'>
												Delete
											</Button>
										</StyledButtonContainer>
									</StyledItem>
								</StyledRow>
							);
						})}
					</StyledTableBody>
				</StyledTable>
			</StyledTableContainer>
			{maxPage !== 0 && (
				<StyledPaginateContainer>
					<StyledPrevButton onClick={prevPage}>Prev</StyledPrevButton>
					{pageArray.map((page, index) => {
						return (
							<StyledPageButton
								key={index}
								active={currentPage === page}
								onClick={() => setCurrentPage(page)}>
								{page + 1}
							</StyledPageButton>
						);
					})}
					<StyledNextButton onClick={nextPage}>Next</StyledNextButton>
				</StyledPaginateContainer>
			)}
		</StyledContainer>
	);
};

export default UserDashboard;
