/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllUsers } from '../../features/User/userThunk';
import { Loading, Button } from '..';
import ActionButtons from './ActionButtons';
import { IUser } from '../../@types/User';
import { transformDate } from '../../utils/util';

const USER_PER_PAGE = 10;

const UserDashboard = () => {
	const [page, setPage] = useState(0);
	const [displayUser, setDisplayUser] = useState<IUser[]>([]);
	const { userList, isLoading } = useAppSelector((store) => store.user);
	const dispatch = useAppDispatch();
	const maxPage = Math.floor(userList.length / USER_PER_PAGE);

	const nextPage = () => {
		setPage((oldPage) => {
			const newPage = oldPage + 1;

			if (newPage > maxPage) return 0;
			return newPage;
		});
	};

	const prevPage = () => {
		setPage((oldPage) => {
			const newPage = oldPage - 1;

			if (newPage < 0) return maxPage;
			return newPage;
		});
	};

	const paginate = () => {};

	useEffect(() => {
		if (!userList) return;

		let tempArray = Array.from(
			{ length: USER_PER_PAGE },
			(_, i) => userList[page * USER_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);

		setDisplayUser(tempArray);
		console.log(page);
	}, [page]);

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	if (isLoading) return <Loading />;

	return (
		<Container>
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
										<ActionButtons />
									</Item>
								</Row>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<PaginateContainer>
				<PrevButton onClick={prevPage}>Prev</PrevButton>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<NextButton onClick={nextPage}>Next</NextButton>
			</PaginateContainer>
		</Container>
	);
};

const Container = styled.section`
	padding: 5rem;
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
`;

const TableHead = styled.thead``;
const TableBody = styled.tbody``;

const Title = styled.th`
	font-size: 2.5rem;
	padding: 1rem;
	border: 1px solid black;
	border-collapse: collapse;
`;

const Item = styled.td`
	border: 1px solid black;
	border-collapse: collapse;
	font-size: 2rem;
	padding: 1rem;
`;

const Row = styled.tr``;

const PaginateContainer = styled.div`
	margin-inline: auto;
	width: 50%;
	height: 10rem;
	display: flex;
	justify-content: space-evenly;
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

export default UserDashboard;
