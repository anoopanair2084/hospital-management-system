import { Doctor } from "./doctor";

export class Patient {
    id!: number;
    age!: number;
    name!: string;
	doctor!: Doctor;
	dateOfVisit!: string;
}
