export interface Passenger {
    id: number;
    firstName: string;
    lastName: string;
    job?: string;
    email: string;
    age: number;
}

export interface PassengerDTO{
    firstName: string;
    lastname: string;
    job?: string;
    email: string;
    age: number;
}
