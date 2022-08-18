export class PassengerDTO {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public age: number,
        public job?: string,
    ) {}
}
