import styled from 'styled-components';

export interface IDashboard {
	id: number;
	name: string;
	image: string;
	desc: string;
}

const Dashboard = () => {
	return <Container>Dashboard</Container>;
};

const Container = styled.section``;

export default Dashboard;
