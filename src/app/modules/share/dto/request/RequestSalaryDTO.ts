export class RequestSalaryDTO {
    constructor(
        public userType: string,
        public month: string,
        public amount: number,
    ) {
    }

}
