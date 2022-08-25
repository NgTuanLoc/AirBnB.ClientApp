import styled from 'styled-components';

import { IUser } from '../@types/User';
import { Button } from '../components';

export interface IDashboard {
	data: IUser[];
}

const Dashboard = ({ data }: IDashboard) => {
	return (
		<Container>
			<Button>Add New</Button>
			<SearchContainer>
				<Search />
				<SearchButton>Search</SearchButton>
			</SearchContainer>
			<List>
				{data.map(() => {
					return <ListItem></ListItem>;
				})}
			</List>
		</Container>
	);
};

const Container = styled.section`
	padding: 5rem;
`;

const SearchButton = styled.button``;

const SearchContainer = styled.div`
	display: flex;
	margin: 2rem auto;
`;

const Search = styled.input``;

const List = styled.div`
	width: 100%;
`;

const ListTitle = styled.div``;

const ListItem = styled.div``;

export default Dashboard;
