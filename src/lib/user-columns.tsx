import { ActionCell } from '@/components/action-cell';
import type { User } from '@/types/user';
import type { ColumnDef } from '@tanstack/react-table';

export const userColumnsDef = (): ColumnDef<User>[] => {
	return [
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
		{
			id: 'actions',
			cell: ({ row }) => {
				return <ActionCell userId={row.original.id} />;
			},
		},
	];
};

export const userColumns = userColumnsDef();
