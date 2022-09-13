/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector, usePagination } from '../../hooks';

import {
	getLocationList,
	getLocationById,
	updateLocationById,
	deleteLocationById,
} from '../../features/Location/locationThunk';

import { Loading, Button, Image } from '../../components';
import { AdminForm } from '../../components';
import { ILocation } from '../../@types/Location';
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

const LOCATION_PER_PAGE = 10;

const LocationDashboard = () => {
	const [displayLocation, setDisplayLocation] = useState<ILocation[]>([]);
	const { locationList, selectedLocation, isLoading } = useAppSelector(
		(store) => store.location
	);
	const [modalTitle, setModalTitle] = useState('Room Info');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useAppDispatch();
	const maxPage = Math.floor(locationList.length / LOCATION_PER_PAGE) - 1;
	const { currentPage, setCurrentPage, nextPage, prevPage, pageArray } =
		usePagination(maxPage);

	const renderNewLocation = () => {
		let tempArray = Array.from(
			{ length: LOCATION_PER_PAGE },
			(_, i) => locationList[currentPage * LOCATION_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayLocation(tempArray);
	};

	const deleteLocation = (id: string) => {
		return () => {
			dispatch(deleteLocationById(id));
			dispatch(getLocationList());
		};
	};

	const showLocation = (id: string) => {
		return () => {
			setModalTitle('location Info');
			setIsModalOpen(true);
			dispatch(getLocationById(id));
		};
	};

	const updateLocation = (id: string) => {
		return () => {
			setModalTitle('Update location');
			setIsModalOpen(true);
			dispatch(getLocationById(id));
		};
	};

	useEffect(() => {
		renderNewLocation();
	}, [currentPage, locationList]);

	useEffect(() => {
		dispatch(getLocationList());
	}, [selectedLocation]);

	if (isLoading)
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);

	return (
		<StyledContainer>
			<AdminForm<ILocation>
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedLocation}
				disableInput={modalTitle === 'Update location' ? false : true}
				dispatchFunction={updateLocationById}
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
							<StyledTitle>Province</StyledTitle>
							<StyledTitle>Country</StyledTitle>
							<StyledTitle>Valuate</StyledTitle>
							<StyledTitle>Image</StyledTitle>
							<StyledTitle>Actions</StyledTitle>
						</StyledRow>
					</StyledTableHead>
					<StyledTableBody>
						{displayLocation.map((item) => {
							const { _id, name, province, country, valueate, image } = item;
							return (
								<StyledRow key={_id}>
									<StyledItem>{_id}</StyledItem>
									<StyledItem>{name ? name : 'Not provided'}</StyledItem>
									<StyledItem>
										{province ? province : 'Not provided'}
									</StyledItem>
									<StyledItem>{country ? country : 'Not provided'}</StyledItem>
									<StyledItem>{valueate ? name : 0}</StyledItem>

									<StyledItem>
										<Image url={image} alt={name} />
									</StyledItem>

									<StyledItem>
										<StyledButtonContainer>
											<Button
												onClickHandler={showLocation(_id)}
												bgColor='#28a745'>
												Info
											</Button>
											<Button
												onClickHandler={updateLocation(_id)}
												bgColor='#ffc107'>
												Update
											</Button>
											<Button
												onClickHandler={deleteLocation(_id)}
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

export default LocationDashboard;
