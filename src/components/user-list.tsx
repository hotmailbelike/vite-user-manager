import { useState, useEffect } from 'react';
import { useGetUsersQuery } from '@/redux/features/users/usersApiSlice';
import { Loader } from './loader';
import { useNavigate } from 'react-router';
import { UserDataTable } from './user-data-table';
import { userColumns } from '@/lib/user-columns';

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
		<div className='space-y-4'>
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

			<div className='flex justify-between items-center mt-4'>
				<button
					onClick={() => setPageNumber(pageNumber - 1)}
					disabled={pageNumber === 0}
					className='px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300'
				>
					Previous
				</button>
				<span>
					Page {pageNumber + 1} of {totalPages}
				</span>
				<button
					onClick={() => setPageNumber(pageNumber + 1)}
					disabled={pageNumber >= totalPages - 1}
					className='px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300'
				>
					Next
				</button>
			</div>
		</div>
	);
};
