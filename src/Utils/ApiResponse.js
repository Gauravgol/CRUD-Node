export class ApiResponse {
    constructor(subCode, message, data = {}) {
        this.subCode = subCode;
        this.message = message;
        this.data = data;
        this.status = 400 > this.subCode;
    }
}
