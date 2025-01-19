import { useState, useEffect } from 'react';
import { useGetUsersQuery } from '@/redux/features/users/usersApiSlice';
import { Loader } from './loader';
import { useNavigate } from 'react-router';
import { UserDataTable } from './user-data-table';
import { userColumns } from '@/lib/user-columns';
import { Button } from './ui/button';
import { Pagination } from './pagination';

const USERS_PER_PAGE = 10;

export const UserList = () => {
	const navigate = useNavigate();

	const [pageNumber, setPageNumber] = useState(0);
	const [searchString, setSearchString] = useState('');
	const [debouncedSearchString, setDebouncedSearchString] =
		useState(searchString);

	const {
		data: userData,
		isLoading: isLoadingUserData,
		isFetching: isFetchingUserData,
		error: errorUserData,
	} = useGetUsersQuery({
		limit: USERS_PER_PAGE,
		skip: pageNumber * USERS_PER_PAGE,
		search: debouncedSearchString,
	});

	const totalPages = Math.ceil((userData?.total || 0) / USERS_PER_PAGE);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearchString(searchString);
		}, 500);

		return () => clearTimeout(timer);
	}, [searchString]);

	if (isLoadingUserData || isFetchingUserData) return <Loader />;
	if (errorUserData) {
		console.error(
			'📣 -> file: user-list.tsx:29 -> UserList -> errorUserData:',
			errorUserData
		);
		navigate('/500');
	}

	return (
		<div className='p-4 lg:p-16'>
			<div className='mb-4'>
				<h1 className='text-2xl text-center'>
					Users fetched from
					<Button className='text-2xl pl-2 text-cyan-600' variant={'link'}>
						<a href='https://dummyjson.com/' target='_blank'>
							https://dummyjson.com/
						</a>
					</Button>
				</h1>
			</div>

			<div className='mb-4'>
				<input
					type='text'
					placeholder='Search users...'
					className='w-full p-2 border rounded'
					value={searchString}
					onChange={(e) => setSearchString(e.target.value)}
				/>
			</div>

			<UserDataTable columns={userColumns} data={userData?.users || []} />

			{userData?.users && userData?.users?.length > 0 && (
				<Pagination
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
					totalPages={totalPages}
				/>
			)}
		</div>
	);
};
