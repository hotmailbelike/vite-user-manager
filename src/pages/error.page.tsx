export const Error = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='text-center'>
				<h1 className='text-6xl font-bold text-red-500'>500</h1>
				<p className='mt-4 text-lg text-gray-700'>
					Oops! Something went wrong on our end.
				</p>
				<p className='text-sm text-gray-500'>
					Please try again later or contact support.
				</p>
				<a
					href='/users'
					className='mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
				>
					Click here to try again
				</a>
			</div>
		</div>
	);
};
