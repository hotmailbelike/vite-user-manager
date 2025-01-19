import { useGetUserByIdQuery } from '@/redux/features/users/usersApiSlice';
import { useParams, useNavigate } from 'react-router';
import { Loader } from './loader';
import { Separator } from '@/components/ui/separator';

export const UserDetails = () => {
	const navigate = useNavigate();
	const { userId } = useParams();

	if (!userId) navigate('/users');

	const {
		data: userData,
		isLoading: isLoadingUserData,
		error: errorUserData,
	} = useGetUserByIdQuery(parseInt(userId as string));

	if (isLoadingUserData) return <Loader />;

	if (errorUserData) {
		console.error('Error fetching user data:', errorUserData);
		navigate('/500');
	}

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
			<div className='bg-white p-6 rounded-lg max-w-2xl w-full mx-auto shadow-lg'>
				<div className='flex justify-between items-center mb-2'>
					<h2 className='text-2xl font-bold'>User Details</h2>
					<button
						onClick={() => navigate(-1)}
						className='text-blue-500 hover:underline'
					>
						Back
					</button>
				</div>
				<Separator className='mb-4' />
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<h3 className='font-semibold text-xl'>Personal Information</h3>
						<Separator className='my-2' />

						<p>
							<strong>First Name:</strong> {userData?.firstName}
						</p>
						<p>
							<strong>Last Name:</strong> {userData?.lastName}
						</p>
						<p>
							<strong>Email:</strong> {userData?.email}
						</p>
						<p>
							<strong>Phone:</strong> {userData?.phone}
						</p>
					</div>

					<div>
						<h3 className='font-semibold text-xl'>Company Information</h3>
						<Separator className='my-2' />

						<p>
							<strong>Company:</strong> {userData?.company.name}
						</p>
						<p>
							<strong>Department:</strong> {userData?.company.department}
						</p>
						<p>
							<strong>Title:</strong> {userData?.company.title}
						</p>
						<p>
							<strong>Address:</strong> {userData?.company.address.address}
						</p>
						<p>
							<strong>City:</strong> {userData?.company.address.city}
						</p>
						<p>
							<strong>State:</strong> {userData?.company.address.state}
						</p>
						<p>
							<strong>Postal Code:</strong>{' '}
							{userData?.company.address.postalCode}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
