/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
	getAllUsers,
	getUserById,
	deleteUserById,
	updateUserById,
} from '../../features/User/userThunk';
import { Loading, Button } from '..';
import ActionButtons from './ActionButtons';
import Modal from './Modal';
import { IUser } from '../../@types/User';
import { transformDate } from '../../utils/util';

const USER_PER_PAGE = 10;
const NUMBER_OF_PAGE_BUTTON = Array.from({ length: 5 }, () => 0);

const RoomDashboard = () => {
	const [page, setPage] = useState(0);
	const [displayUser, setDisplayUser] = useState<IUser[]>([]);
	const { userList, selectedUser, isLoading } = useAppSelector(
		(store) => store.user
	);
	const [modalTitle, setModalTitle] = useState('User Info');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useAppDispatch();
	const maxPage = Math.floor(userList.length / USER_PER_PAGE);

	const nextPage = () => {
		setPage((oldPage) => {
			const newPage = oldPage + 1;

			if (newPage > maxPage) return 0;
			return newPage;
		});
	};

	const renderNewUser = () => {
		let tempArray = Array.from(
			{ length: USER_PER_PAGE },
			(_, i) => userList[page * USER_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayUser(tempArray);
	};

	const prevPage = () => {
		setPage((oldPage) => {
			const newPage = oldPage - 1;
			if (newPage < 0) return maxPage;
			return newPage;
		});
	};

	const paginate = (selectedPage: number) => {
		return () => setPage(selectedPage);
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
	}, [page, userList]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [selectedUser]);

	if (isLoading)
		return (
			<Container>
				<Loading />
			</Container>
		);

	return (
		<Container>
			<Modal<IUser>
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedUser}
				disableInput={modalTitle === 'Update User' ? false : true}
				dispatchFunction={updateUserById}
			/>
			<Button fullWidth={false}>Add New</Button>
			<SearchContainer>
				<Search />
				<SearchButton>Search</SearchButton>
			</SearchContainer>
			<TableContainer>
				<Table>
					<TableHead>
						<Row>
							<Title>Id</Title>
							<Title>Name</Title>
							<Title>Email</Title>
							<Title>Phone</Title>
							<Title>Birthday</Title>
							<Title>Gender</Title>
							<Title>Address</Title>
							<Title>Type</Title>
							<Title>Actions</Title>
						</Row>
					</TableHead>
					<TableBody>
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
								<Row key={_id}>
									<Item>{_id}</Item>
									<Item>{name}</Item>
									<Item>{email}</Item>
									<Item>{phone}</Item>
									<Item>{transformDate(new Date(birthday))}</Item>
									<Item>{gender ? 'Male' : 'Female'}</Item>
									<Item>{address}</Item>
									<Item>{type}</Item>
									<Item>
										<ActionButtons
											id={_id}
											infoHandler={showUser}
											updateHandler={updateUser}
											deleteHandler={deleteUser}
										/>
									</Item>
								</Row>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<PaginateContainer>
				<PrevButton onClick={prevPage}>Prev</PrevButton>
				<PageButton active={page === 0} onClick={paginate(0)}>
					1
				</PageButton>
				{NUMBER_OF_PAGE_BUTTON.map((_, index) => {
					let tempPage = page + index - 2;

					if (page === 0) {
						tempPage = page + index + 1;
					} else if (page === 1) {
						tempPage = page + index;
					} else if (page === 2) {
						tempPage = page + index - 1;
					}

					if (page === maxPage) {
						tempPage = page + index - 6;
					} else if (page === maxPage - 1) {
						tempPage = page + index - 5;
					} else if (page === maxPage - 2) {
						tempPage = page + index - 4;
					} else if (page === maxPage - 3) {
						tempPage = page + index - 3;
					}
					return (
						<PageButton
							key={index}
							active={page === tempPage}
							onClick={paginate(tempPage)}>
							{tempPage + 1}
						</PageButton>
					);
				})}
				<PageButton active={page === maxPage} onClick={paginate(maxPage)}>
					{maxPage}
				</PageButton>
				<NextButton onClick={nextPage}>Next</NextButton>
			</PaginateContainer>
		</Container>
	);
};

const Container = styled.section`
	padding: 5rem;
	position: relative;
	background-color: #fafbfb;
`;

const SearchButton = styled(Button)``;

const SearchContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 20rem;
	gap: 1rem;
	margin: 2rem auto;
	width: 100%;
`;

const Search = styled.input`
	font-size: 2rem;
`;

const TableContainer = styled.div`
	overflow-x: scroll;
	margin-inline: auto;
	width: 100%;
`;

const Table = styled.table`
	border: 1px solid black;
	border-collapse: collapse;
	margin-inline: auto;
	table-layout: fixed;
`;

const TableHead = styled.thead``;
const TableBody = styled.tbody``;

const Title = styled.th`
	font-size: 2.5rem;
	padding: 0.5rem;
	border: 1px solid black;
	border-collapse: collapse;
`;

const Item = styled.td`
	border: 1px solid black;
	border-collapse: collapse;
	font-size: 2rem;
	padding: 0.5rem;
	overflow: hidden;
	white-space: nowrap;
`;

const Row = styled.tr``;

const PaginateContainer = styled.div`
	margin-inline: auto;
	width: 50%;
	height: 10rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PrevButton = styled.button`
	font-size: 2.5rem;
	font-weight: bold;
`;
const NextButton = styled.button`
	font-size: 2.5rem;
	font-weight: bold;
`;

const PageButton = styled.button<{ active?: boolean }>`
	width: 5rem;
	background-color: ${(props) => (props.active ? '#9d0832' : '#e41d57')};
	font-weight: bold;
	transition: var(--transition);
	font-size: 2rem;
	border-radius: var(--radius);
	padding: 0.5rem;
	color: ${(props) => (props.active ? 'black' : 'white')};
`;

export default RoomDashboard;
