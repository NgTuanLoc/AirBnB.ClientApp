/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector, usePagination } from '../../hooks';
import {
	getAllUsers,
	getUserById,
	deleteUserById,
	updateUserById,
} from '../../features/User/userThunk';
import { Loading, Button } from '../../components';
import { AdminForm } from '../../components';
import { IUser } from '../../@types/User';
import { transformDate } from '../../utils';
import {
	StyledContainer,
	StyledSearchButton,
	StyledSearchContainer,
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
} from './style';

const USER_PER_PAGE = 10;

const UserDashboard = () => {
	const [displayUser, setDisplayUser] = useState<IUser[]>([]);
	const { userList, selectedUser, isLoading } = useAppSelector(
		(store) => store.user
	);
	const [modalTitle, setModalTitle] = useState('User Info');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useAppDispatch();
	const maxPage = Math.floor(userList.length / USER_PER_PAGE) - 1;
	const { currentPage, setCurrentPage, nextPage, prevPage, pageArray } =
		usePagination(maxPage);

	const renderNewUser = () => {
		let tempArray = Array.from(
			{ length: USER_PER_PAGE },
			(_, i) => userList[currentPage * USER_PER_PAGE + i]
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
			setModalTitle('User Info');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	const updateUser = (id: string) => {
		return () => {
			setModalTitle('Update User');
			setIsModalOpen(true);
			dispatch(getUserById(id));
		};
	};

	useEffect(() => {
		renderNewUser();
	}, [currentPage, userList]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [selectedUser]);

	if (isLoading)
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);

	return (
		<StyledContainer>
			<AdminForm<IUser>
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedUser}
				disableInput={modalTitle === 'Update User' ? false : true}
				dispatchFunction={updateUserById}
			/>
			<Button fullWidth={false}>Add New</Button>
			<StyledSearchContainer>
				<StyledSearch />
				<StyledSearchButton>Search</StyledSearchButton>
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
		</StyledContainer>
	);
};

export default UserDashboard;
