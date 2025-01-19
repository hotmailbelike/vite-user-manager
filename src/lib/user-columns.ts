import type { User } from '@/types/user';
import { ColumnDef } from '@tanstack/react-table';

export const userColumns: ColumnDef<User>[] = [
	{
		accessorKey: 'firstName',
		header: 'First Name',
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'phone',
		header: 'Phone',
	},
	{
		accessorFn: (row) => row.company.name,
		header: 'Company',
	},
];
