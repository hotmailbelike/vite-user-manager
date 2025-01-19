export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: {
		name: string;
		department: string;
		title: string;
		address: {
			address: string;
			city: string;
			postalCode: string;
			state: string;
		};
	};
}
