export class Profile {
	basics: BasicSummary;
}

export class BasicSummary {
	name: string;
	label: string;
	picture: string;
	email: string;
	phone: ContactPhone;
}

export class ContactPhone {
	countryCode: string;
	primary: string;
	secondary: string;
}