/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ChangeEvent } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

import { useAppDispatch, useAppSelector, usePagination } from '../../hooks';

import {
	getLocationList,
	getLocationById,
	updateLocationById,
	deleteLocationById,
	createLocation,
} from '../../features/Location/locationThunk';
import { Loading, Button, Image } from '../../components';
import { type FormType } from '../../components/AdminForm';
import { AdminForm } from '../../components';
import { ILocation } from '../../@types/Location';
import { transformLanguage } from '../../utils';
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
	StyledHeadButtonContainer,
	StyledRefreshButton,
} from './style';
import { LOCATION_DATA } from '../../constant';

const LOCATION_PER_PAGE = 10;

const LocationDashboard = () => {
	const [formType, setFormType] = useState<FormType>('INFO');
	const [displayLocation, setDisplayLocation] = useState<ILocation[]>([]);
	const { locationList, selectedLocation, isLoading } = useAppSelector(
		(store) => store.location
	);
	const [modalTitle, setModalTitle] = useState('Room Info');
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
	} = usePagination(locationList.length);
	const [rotateRefreshButton, setRotateRefreshButton] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [data, setData] = useState<ILocation[]>(locationList);

	const renderNewLocation = () => {
		let tempArray = Array.from(
			{ length: LOCATION_PER_PAGE },
			(_, i) => data[currentPage * LOCATION_PER_PAGE + i]
		);

		tempArray = tempArray.filter((item) => item !== undefined);
		setDisplayLocation(tempArray);
	};

	const createNewLocation = () => {
		return () => {
			setModalTitle('Create Location');
			setFormType('CREATE');
			setIsModalOpen(true);
		};
	};

	const deleteLocation = (id: string) => {
		return () => {
			dispatch(deleteLocationById(id));
			dispatch(getLocationList());
		};
	};

	const showLocation = (id: string) => {
		return () => {
			setFormType('INFO');
			setModalTitle('location Info');
			setIsModalOpen(true);
			dispatch(getLocationById(id));
		};
	};

	const updateLocation = (id: string) => {
		return () => {
			setFormType('UPDATE');
			setModalTitle('Update location');
			setIsModalOpen(true);
			dispatch(getLocationById(id));
		};
	};

	const onRefreshHandler = () => {
		setRotateRefreshButton(true);
		dispatch(getLocationList());
		setData(locationList);
		renderNewLocation();
		setTimeout(() => {
			setRotateRefreshButton(false);
		}, 3000);
	};

	const onSearchHandler = () => {
		const temp = locationList.filter((item) => {
			if (!item.name) return false;
			const transformedName = transformLanguage(item.name);

			return transformedName.includes(searchValue);
		});
		setCurrentPage(0);
		setData(temp);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		renderNewLocation();
		setMaxPage(Math.floor(data.length / LOCATION_PER_PAGE));
	}, [currentPage, locationList, data, isLoading]);

	useEffect(() => {
		dispatch(getLocationList());
	}, [selectedLocation]);

	if (isLoading) {
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<AdminForm<ILocation>
				formType={formType}
				title={modalTitle}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				isLoading={isLoading}
				data={selectedLocation}
				disableInput={formType === 'INFO' ? true : false}
				dispatchFunction={
					formType === 'UPDATE' ? updateLocationById : createLocation
				}
				dummyData={LOCATION_DATA}
			/>
			<StyledHeadButtonContainer>
				<Button onClickHandler={createNewLocation()} fullWidth={false}>
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
									<StyledItem>{valueate ? valueate : 0}</StyledItem>

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

export default LocationDashboard;
