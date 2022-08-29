import styled from 'styled-components';

import { Button } from '..';

const Dashboard = () => {
	return (
		<Container>
			<Button fullWidth={false}>Add New</Button>
			<SearchContainer>
				<Search />
				<SearchButton>Search</SearchButton>
			</SearchContainer>
			<List></List>
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
